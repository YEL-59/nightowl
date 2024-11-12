// src/hooks/useNavbarFixed.js
import { useState, useEffect } from "react";

function useNavbarFixed(scrollThreshold = 70) {
  const [navfix, setNavfix] = useState(false);

  useEffect(() => {
    function setFixed() {
      setNavfix(window.scrollY >= scrollThreshold);
    }

    window.addEventListener("scroll", setFixed);
    return () => window.removeEventListener("scroll", setFixed); // Cleanup
  }, [scrollThreshold]);

  return navfix;
}

export default useNavbarFixed;

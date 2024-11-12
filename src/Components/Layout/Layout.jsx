
import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import useNavbarFixed from "../../Components/CustomHooks/NavBar/useNavbarFixed";

const Layout = ({ children }) => {
  const navfix = useNavbarFixed();

  return (
    <>
      <div
        className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${
          navfix ? "shadow-lg bg-white" : ""
        }`}
      >
        <NavBar />
      </div>
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default React.memo(Layout);

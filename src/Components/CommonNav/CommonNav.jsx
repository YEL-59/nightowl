import React from "react";

const CommonNav = ({nav_title}) => {
  return (
    <>
      <div>
        <div className="container mx-auto  border-b-2 mb-20">
          <div className="flex justify-between items-center gap-5 mb-5">
            <div>
              <h1 className="text-xl lg:text-2xl font-medium">
               {nav_title}
              </h1>
            </div>

            <div>
              <button className="border rounded px-3 py-2 font-medium text-blue-500">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonNav;

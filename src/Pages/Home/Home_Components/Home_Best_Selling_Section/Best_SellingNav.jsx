import React from "react";


const Best_SellingNav = () => {

  return (
    <>
      <div>
        <div className="container mx-auto  border-b-2 mb-20">
          <div className="flex justify-between items-center gap-5 mb-5">
            <div>
              <div className="flex gap-5 justify-center items-center ">
                <div>
                  <img
                    src="https://www.pickaboo.com/_next/static/images/today_special-6d01810cf4c6efe6028ea84af31999e2.jpg"
                    className="h-20"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-xl lg:text-2xl font-medium">
                    Best Selling Products
                  </h1>
                </div>
              </div>
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

export default Best_SellingNav;

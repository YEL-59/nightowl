const Product_Single_Card = ({ name, sub_description, price, productimgsrc }) => {
    return (
      <section>
        <div className="max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
          <a href="#">
            <img
              className="rounded-t-lg w-full  hover:scale-105 transition-transform"
              src={productimgsrc}
              alt=""
            />
          </a>
          <div className="p-4 border border-dashed rounded-b-lg">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900 truncate">
                {name}
              </span>
              <span className="text-xs font-normal text-gray-500 truncate mt-1">
                {sub_description}
              </span>
              <span className="text-xs font-normal text-gray-700 truncate mt-1">
                {price}
              </span>
            </div>
            <div className="flex items-center justify-between mt-4">
              {/* Ratings demmo perpose*/}
              <div className="flex items-center">
                <div className="flex space-x-1">
                  {/* Star icons */}
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                  {/* Empty star */}
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
                  5.0
                </span>
              </div>
              <span className="text-sm font-bold text-gray-900 cursor-pointer hover:text-blue-500">
                Buy
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Product_Single_Card;
  
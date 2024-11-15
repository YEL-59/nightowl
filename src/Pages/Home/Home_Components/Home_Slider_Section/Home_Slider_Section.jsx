import Home_Product_Category from "../Home_Product_Category/Home_Product_Category";
import Slider from "../Slider/Slider";

const Home_Slider_Section = () => {
  const slides = [
    {
      image:
        "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/computer_essential_4_app_banner_copy_1_.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/unbeatableapp_banner.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/iPhone_16_Series_App_Banner.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/38__on_Refrigetor_app_banner_copy_2_.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/app_banner_3_copy.jpg",
    },
  ];
  return (
    <>
      <div>
        <div className="container mx-auto grid grid-cols-12">
          <div className=" col-span-12 lg:col-span-3">
            <div className="flex flex-row md:flex-col gap-5 justify-center mb-5 lg:mb-5">
              <div>
                <div className=" border-[#71d0f0] border-l-8">sds</div>
                <div>
                  <Home_Product_Category />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 ">
            <div className="h-[300px] md:h-[300px] w-full bg-red-500">
              <Slider
                slides={slides}
                options={{
                  autoplay: { delay: 2500, disableOnInteraction: false },
                  pagination: { clickable: true },
                  navigation: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Slider_Section;

import Slider from "../Home_Fixed_Slider/Slider/Slider";

const Home_Fixed_Slider = () => {
  const slides = [
    {
      image:
        "	https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/EMI.png",
        text:"Up to 36 Months EMI"
    },
    {
      image:
        "	https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Easy_Returns_1.png",
         text:"Easy Returns"
    },
    {
      image:
        "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Temp.png",
         text:"Warranty coverage"
    },
    {
      image:
        "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/EMI.png",
         text:"Display insurance"
    },
    {
      image:
        "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/official_warranty.png",
         text:"100% Genuine Products"
    },
    {
      image:
        "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Secure_Payment_1.png",
         text:"Secure Payment"
    },
    {
      image:
        "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Express_Delivery_1.png",
         text:"3 Hours Delivery"
    },
  ];
  return (
    <>
      <div>
        <div className="bg-white shadow-lg p-5 mt-20">
          <div className="container mx-auto">
            <Slider slides={slides} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Fixed_Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

export default function Slider({ slides }) {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      
      modules={[FreeMode, Pagination, Autoplay, Navigation]}
      className="mySwiper"
      
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center ">
            <img src={slide.image} alt="" className="w-[6rem] h-[6rem] object-cover rounded-lg" />
            <h1 className="text-md text-black font-medium mt-2 hover:text-teal-600">
              {slide.text}
            </h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

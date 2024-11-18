import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

export default function Slider({ slides }) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      loop={true}
      modules={[FreeMode, Pagination, Autoplay, Navigation]}
      className="mySwiper"
      
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center border rounded-lg shadow">
            <img src={slide.image} alt="" className="w-full h-[25rem] object-cover rounded-lg" />
            <h1 className="text-md text-black font-medium mt-2 hover:text-teal-600">
              {slide.text}
            </h1>
            <p>${slide.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

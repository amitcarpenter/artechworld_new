// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "CRM Development",
    description: "Enhance and build your CRM with ArtechWorld. Our solutions include CRM Integration.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Design your product and website with our expert team at ArtechWorld.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Crafting high-quality websites with advanced frontend and backend.let's Start",
  },
  {
    icon: <RxReader />,
    title: "Mobile App",
    description: "We create fully customized, high-performing mobile apps for Android and   .",
  },
  {
    icon: <RxRocket />,
    title: "SEO / SMM Marketing..",
    description: "Leverage the vast potential of SEO/SMM to boost your business.",
  },
];

//import swipper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-20">
              {/* icons */}
              <div className="text-4xl text-accent mb-4 ">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg ">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-10" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;

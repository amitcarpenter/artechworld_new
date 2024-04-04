// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Farhan Malik",
    position: "Realtor",
    message:
      "I've had the pleasure of working with AR Tech World recently and I must say, it has been an exceptional experience. As a realtor, I understand the importance of professionalism and efficiency in every transaction, and I found both in abundance with AR Tech World.!",
  },
  {
    image: "/t-avt-2.png",
    name: "Aamir khan",
    position: "HR",
    message:
      "Their dedication to client satisfaction is truly commendable. From the initial consultation to the final deal closing, every step was handled with precision and care. I was particularly impressed by their attention to detail and prompt communication throughout the process!",
  },
  {
    image: "/t-avt-3.png",
    name: "Ravindra",
    position: "Realtor",
    message:
      "Working with AR Tech World not only met but exceeded my expectations. I wholeheartedly recommend their services to anyone in need of top-notch real estate assistance. Thank you, AR Tech World, for your outstanding support and expertise !",
  },
];

// icons
import { FaQuoteLeft } from "react-icons/fa";

//next image
import Image from "next/image";

//import swipper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import required modules
import { Navigation, Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar  , name , position  */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 ">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar image */}
                  <div className="mb-2 mx-auto"></div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest ">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message   */}
              <div className=" flex-1 flex  flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4 ">
                  <FaQuoteLeft className="text-4xl  xl:text-6xl text-white/20 mx-auto md:mx-0 " />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left ">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

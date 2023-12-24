import React from "react";
import "./ClientsLogo.css";
import clientLogos from "../../data/clientLogo";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ClientsLogo = () => {
  return (
    <div className="p-10 bg-[#d6d6d6]">
      <h1 className="text-[35px] lg:text-[50px] mb-[50px] text-center font-bold leading-10 text-[#002060]">
        Clients & Associates
      </h1>
      {/* First Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-10">
          <div className="col-span-10">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              autoplay={{ delay: 300, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
              // className="flex items-center justify-center"
            >
              {clientLogos?.map((cl) => (
                <SwiperSlide key={cl.img}>
                  <div>
                    <img src={cl.img} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsLogo;

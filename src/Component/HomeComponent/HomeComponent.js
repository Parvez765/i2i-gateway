import React from 'react';
import './HomeComponent.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


const HomeComponent = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
       
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className='sliderOne'>
              <h1 className='text-white slideOneHead text-[35px] leading-[40px] lg:leading-[60px]  p-6 lg:p-0 lg:text-[50px] text-center'>Guiding People And Organizations <br/> Towards Excellence</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='sliderTwo'>
                <h1 className='text-white slideOneHead  text-[35px] p-6 lg:p-0 leading-[40px] lg:leading-[60px] lg:text-[50px] text-center'>Operational excellence <br/> through continuous improvement</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='sliderThree'>
                <h1 className='text-white slideOneHead  text-[35px] leading-[40px] lg:leading-[60px] p-6 lg:p-0 lg:text-[50px] text-center'>Customized solutions for <br/> your business pain points</h1>
            </div></SwiperSlide>
       
     
      </Swiper>
    </div>
  );
};

export default HomeComponent;

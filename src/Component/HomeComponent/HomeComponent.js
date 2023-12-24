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


const  bannerData =[
  {
    id : 1,
    description : "Pioneering Excellence in MEP & FIRE Consulting: Unleashing Innovation for Bangladesh's Industries.",
    image:"https://i.ibb.co/4pJ9nfs/plumbing.png"
  },
  {
    id: 2,
    description : "Transformative Solutions, Unmatched Expertise: Redefining the Future of Industrial Infrastructure",
    image:"https://i.ibb.co/wNxKs1w/mechanical.png"
  },
  {
    id: 3,
    description : "Empowering Growth with 360-Degree MEP Services: Your Gateway to Efficiency and Innovation",
    image:"https://i.ibb.co/Phm30bm/electrical.png"
  }
]

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
        {
          bannerData.map((el,i)=>
        <SwiperSlide key={i}>
          <div className='sliderStyle' style={{backgroundImage:`linear-gradient(to bottom, rgba(26, 3, 129, 0), rgba(0,0,0,1)),url(${el.image})`}}>
              <h1 className='text-white slideOneHead text-[20px] p-6 lg:p-0 lg:text-[36px] text-center max-w-screen-md'>{el.description}</h1>
          </div>
        </SwiperSlide>
          )
        }
      
       
     
      </Swiper>
    </div>
  );
};

export default HomeComponent;

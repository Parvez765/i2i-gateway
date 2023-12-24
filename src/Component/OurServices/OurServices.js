import React from "react";
import "./OurService.css";
import { FaAngleRight } from "react-icons/fa";
import SectionHeading from "../SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { services } from "../../data/services";
import { Link } from "react-router-dom";
import Button from "../Button";

const OurServices = () => {
  return (
    <div className="serviceContainer">
      <div className="container mx-auto p-10">
        <SectionHeading title={"Our projects"} />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
{
                    services?.map(service => 
                        <SwiperSlide>
                    <div className="card glass relative">
                    <figure><img src={service.image}  alt="car!"/></figure>
                    <div className="card-body absolute bottom-0 w-full p-5 bg-black bg-opacity-50">
                      <h2 className="card-title text-white">{service.name}</h2>
                      {/* <p>{service.description}</p> */}
                      <div className="card-actions">
                        <Link to={`/service/${service.id}`}><Button title={service.buttonText} className=""/></Link>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  )
                }

        </Swiper>
        {/* <div className='mt-[50px]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-[20px] lg:gap-[50px] mb-[50px]'>
                        <img src="https://i.ibb.co/5Lnwsjc/counselling-One.webp" alt="Our Service List One" className='lg:w-[700px] imageOne' data-aos="fade-right"/>
                        <div data-aos="fade-left">
                            <h3 className='imageHeadingOne text-[30px] lg:text-[35px]'>CONSULTING</h3>
                            <p className='imageHeadingPara lg:text-[22px]'>Creating customized long-term solutions for businesses and guiding them to achieving sustainable results.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-[20px] lg:gap-[50px] mt-[100px]'>
                        <div data-aos="fade-right">
                            <h3 className='imageHeadingOne text-[30px] lg:text-[35px]'>MANAGEMENT SYSTEM IMPLEMENTATION</h3>
                            <p className='imageHeadingPara lg:text-[22px]'>Value stream mapping and rapid strategy deployment to achieve project and business goals.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                        <img src="https://i.ibb.co/nDZdgJS/counseling-Two.webp" data-aos="fade-left" alt="Our Service List One" className='lg:w-[700px] imageOne' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-[20px] lg:gap-[50px] mt-[100px]'>
                        <img src="https://i.ibb.co/3fHFqPZ/plan-planning-strategy-bysiness-ideas-concept-min.webp" data-aos="fade-right" alt="Our Service List One" className='lg:w-[700px] imageOne' />
                        <div data-aos="fade-left">
                            <h3 className='imageHeadingOne text-[30px] lg:text-[35px]'>TRAINING</h3>
                            <p className='imageHeadingPara lg:text-[22px]'>Build customized training modules for organizations for soft skills, time management,lean, six sigma, kaizen, and more.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between  gap-[20px] lg:gap-[50px] mt-[100px]'>
                        <div data-aos="fade-right">
                            <h3 className='imageHeadingOne leading-[45px] text-[30px] lg:text-[35px]'>COACHING & MENTORING</h3>
                            <p className='imageHeadingPara lg:text-[22px]'>One-on-one life coaching for C-level professionals that enhance personal development and professional salability.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                        <img src="https://i.ibb.co/bXCvwQj/meeting-presentation-planning-graphic-word-min.webp" data-aos="fade-left" alt="Our Service List One" className='lg:w-[700px] imageOne' />
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default OurServices;

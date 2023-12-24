import React from "react";
import "./OurProjects.css";
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
import { projectData } from "../../data/projectsData";

const OurProjects = () => {
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
                    projectData?.map(project => 
                        <SwiperSlide>
                    <div className="card glass relative">
                    <figure><img src={project.image}  alt="car!"/></figure>
                    <div className="card-body absolute bottom-0 w-full p-5 bg-black bg-opacity-50">
                      <h2 className="card-title text-white">{project.title}</h2>
                      {/* <p>{service.description}</p> */}
                      <div className="card-actions">
                        <Link to={`/project/${project.id}`}><Button title={"Detail"} className=""/></Link>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  )
                }

        </Swiper>
        
      </div>
    </div>
  );
};

export default OurProjects;

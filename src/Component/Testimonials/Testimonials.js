import React, { useEffect, useState } from 'react';
import "./Testinonials.css"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Testimonials = () => {
    
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1500) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
             <div className='container mx-auto p-10'>
            <h1 className='text-[35px] lg:text-[50px] text-center font-bold text-[#002060] leading-9 lg:leading-[60px]'>What Client Says <br /> About Us</h1>
            <div className='mt-[50px]'>
                <Swiper
                    // install Swiper modules
                    spaceBetween={50}
                    slidesPerView={slidesPerView} // Set slidesPerView to 1 for mobile devices
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                   
                        <SwiperSlide>
                            <div className='testimonialContainer'>
                        <div className='flex items-center gap-[8px] mb-[10px]'>
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                        </div>
                        <p className='mt-[20px] mb-[20px] clamped-text'>Mind Woks conducted 2 training sessions on Japanese 5S for the employees of our corporate office and 03 power plants in Bangladesh. I am pleased that those employees got together and implemented...<Link to="/testimonial"><span className='text-[#002060] font-medium'>See More</span></Link></p>
                        <div className='flex items-start gap-[12px] mt-[60px]'>
                            <img src="https://i.ibb.co/tzDkhYW/client-Two.jpg" className='clientImage' alt="Mind Works Testimonials" />
                            <div>
                                <h4 className='font-bold text-[#002060] text-[16px]'>Gamini Sarath</h4>
                                <p>Country Director, Lakdhanavi Ltd, Bangladesh Branch</p>
                            </div>
                        </div>
                            </div>
                        </SwiperSlide>
                    <SwiperSlide>
                        <div className='testimonialContainer'>
                            <div className='flex items-center gap-[8px] mb-[10px]'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                            </div>
                            <p className='mt-[20px] mb-[20px]  clamped-text'>When things come towards breaking the ice, Mind Works delivers perfectly!! We’ve worked with them in shaping up change-making minds within the leaders of A&E, our organization. If someone is thinking to implement Continuous...<Link to="/testimonial"><span className='text-[#002060] font-medium'>See More</span></Link></p>
                            <div className='flex items-start gap-[12px] mt-[60px]'>
                                <img src="https://i.ibb.co/44cHZQc/client-Three.jpg" className='clientImage' alt="Mind Works Testimonials" />
                                <div>
                                    <h4 className='font-bold text-[#002060] text-[16px]'>Khan Mohd. Ibrahim</h4>
                                    <p>PMP | Manager, Process Improvement & IE | American & Efird (Bangladesh) Ltd.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                        <SwiperSlide>
                            <div className='testimonialContainer'>
                        <div className='flex items-start gap-[8px] mb-[10px]'>
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                        </div>
                        <p className='mt-[20px] mb-[20px] clamped-text'>What differentiate Mind Works is the focus on helping you achieve your business goals by working at the “Shop floor” and learning by the hands-on use of the lean, six sigma and people management and motivational tools...<Link to="/testimonial"><span className='text-[#002060] font-medium'>See More</span></Link></p>
                        <div className='flex items-center gap-[12px] mt-[60px]'>
                            <img src="https://i.ibb.co/QMJ7TRX/client-Four.jpg" className='clientImage' alt="Mind Works Testimonials" />
                            <div>
                                <h4 className='font-bold text-[#002060] text-[16px]'>Mr. Tarun Kumar Mistry</h4>
                                <p>GM and Operations Head of Alim Knit BD Ltd.</p>
                            </div>
                        </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <div className='testimonialContainer'>
                        <div className='flex items-start gap-[8px] mb-[10px]'>
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                        </div>
                        <p className='mt-[10px] mb-[20px]  clamped-text'>Minds Works has conducted several Session for the Skill and Efficiency Development of Faculty members, staff and students of BGMEA University of Fashion & Technology on the areas of Personal Productivity, Time Management...<Link to="/testimonial"><span className='text-[#002060] font-medium'>See More</span></Link></p>
                        <div className='flex items-center gap-[12px] mt-[60px]'>
                            <img src="https://i.ibb.co/TM38p0g/client-Five.jpg" className='clientImage' alt="Mind Works Testimonials" />
                            <div>
                                <h4 className='font-bold text-[#002060] text-[16px]'>Prof. Dr. Engr. Ayub Nabi Khan</h4>
                                <p>Commonwealth Scholar, Pro Vice Chancellor, BUFT</p>
                            </div>
                        </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                  <Link to="/testimonial"><div className='flex items-center text-[25px] font-bold cursor-pointer justify-center'><span className='text-[#002060] font-medium'>See All</span></div></Link>
            </div>
        </div>
       </div>
    );
};

export default Testimonials;
import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaCircle,
    FaLocationArrow,
    FaPhoneAlt,
    FaMailBulk,
    FaClock
} from "react-icons/fa";
import "./Footer.css"
import SubFooter from './SubFooter';
import {Link} from 'react-router-dom';
import footerLogo from "../../../assets/navLogo-01.png"
import {services} from "../../../data/services";

const Footer = () => {
    return (
        <div className=''>
            <div className='container mx-auto p-10'>
                <div className='grid justify-around lg:grid-cols-3 gap-20'>
                    <div className='flex flex-col'>
                        <Link to="/"><img src="https://i.ibb.co/cwRJShV/logo.png" className='w-[250px]'
                                          alt="I2I Footer Logo"/></Link>
                        <p className='mt-[20px]'>i2i GATEWAY is an MEP solution-based consulting firm which identifies
                            critical solution for mechanical, electrical, plumbing and fire systems like Power,
                            Lighting, Lightning, Security, Networking, HVAC, Automation, BMS etc. to improve the
                            building’s functionality.</p>
                        <div className='flex items-center gap-[15px] mt-[20px]'>
                            <a href="" target='_blank'><FaFacebookF className='text-[30px]'/></a>
                            <a href="" target='_blank'><FaTwitter className='text-[30px]'/></a>
                            <a href='' target='_blank'><FaLinkedinIn className='text-[30px]'/></a>
                        </div>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[100px]'>
                        <div>
                            <h1 className='text-[#002060] text-[16px] 2xl:text-[18px] mindWorksHead mb-[20px]'>Our
                                Solutions</h1>
                            {
                                services.map(el =>

                                    <Link className=' bangladeshHead text-[#002060] mb-[8px] block' key={el.id}
                                          to={`/service/${el.id}`}>{el.name}</Link>
                                )
                            }

                        </div>
                        <div>
                            <h1 className='text-[#002060] text-[16px] 2xl:text-[18px] mindWorksHead mb-[20px]'>Quick
                                Links</h1>
                            <Link className=' bangladeshHead text-[#002060] mb-[8px] block' to={'/about'}>About
                                Us</Link>
                            <Link className=' bangladeshHead text-[#002060] mb-[8px] block'
                                  to={'/portfolio'}>Projects</Link>
                            <Link className=' bangladeshHead text-[#002060] mb-[8px] block'
                                  to={'/contact'}>Contact</Link>

                        </div>

                    </div>
                    <div>
                        <h1 className='text-[#002060] text-[16px] 2xl:text-[18px] mindWorksHead mb-[20px]'>Get In
                            Touch</h1>
                        <p className='mb-[10px] flex items-center gap-[12px]'><FaLocationArrow
                            className='text-[20px]'/> House-43, Road-6, Block-D, Mirpur-12, Dhaka-1216</p>
                        <p className='mb-[10px] flex items-center gap-[12px]'><FaPhoneAlt className='text-[14px]'/>+880
                            1815-098035</p>
                        <p className='mb-[10px] flex items-center gap-[12px]'><FaMailBulk className='text-[14px]'/>Info@I2igateway.com
                        </p>
                        <p className='mb-[10px] flex items-center gap-[12px]'><FaClock className='text-[14px]'/>Sat -
                            Thu : 9am to 6pm</p>


                    </div>
                </div>
            </div>
            <SubFooter/>
        </div>
    );
};

export default Footer;
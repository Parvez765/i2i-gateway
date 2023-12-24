import React from 'react';
import "./Structure.css"
import { FaChevronCircleRight } from "react-icons/fa";
import Button from '../Button';

const Structure = () => {
    return (
        <div className='serviceBg pb-[40px]'>
           
            <div className='container mx-auto flex gap-[32px] items-center'>
                <div>
                    <figure>
                        <img src="https://i.ibb.co/YfNjvjF/electricity.jpg" alt="Energy Images" className='lg:w-[800px]'/>
                    </figure>
                </div>
                <div className='flex flex-col 2xl:flex-row gap-[75px] 2xl:gap-[150px]'>
                    <div>
                <h1 className='ourServiceText text-center 2xl:text-left lg:mb-[16px] text-[35px] lg:text-[50px] leading-[50px] 2xl:mb-[16px]'>What is I2I?</h1>
                        <p className='text-center 2xl:text-left 2xl:w-[600px] px-[80px] 2xl:p-[0px]'>i2i GATEWAY is an MEP solution-based consulting firm which identifies critical solution for mechanical, electrical, plumbing and fire systems like Power, Lighting, Lightning, Security, Networking, HVAC, Automation, BMS etc. to improve the building’s functionality. Energy & the environment are designed for sustainability to ensure optimize design, power savings and cost reduction.</p>
                       <Button title={"About Us"}/>
                    </div>
                   

                </div>
            </div>
        </div>
    );
};

export default Structure;
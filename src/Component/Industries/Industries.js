import React from 'react';
import "./Industries.css"
import {FaCheck} from 'react-icons/fa';
import industries from "../../data/industries"

const Industries = () => {
    return (
        <div className='container mx-auto p-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[140px]'>
                <div>
                    <img src="https://i.ibb.co/9gVh7bN/african-business-male-people-shaking-hands-min.webp"
                         className='handShake' alt="Mind Works Industries Corporate HandShake"/>
                </div>
                <div>
                    <h1 className='text-[35px] lg:text-[50px] font-bold text-[#002060] leading-[50px] mt-[50px] lg:mt-[0]'>Industries
                        We Serve</h1>
                    <div className='mt-[20px] grid grid-cols-2'>
                        {
                            industries?.map((ind, index) =>
                                <div className='flex items-center gap-[10px] mt-[15px]' key={index}>
                                    <img src="https://i.ibb.co/7kbQ8bj/correct.png" className='w-[25px]'
                                         alt="Mind Works Right Mark"/>
                                    <h1 className='text-[12px] 2xl:text-[22px] font-medium text-[#002060]'>{ind.name}</h1>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industries;
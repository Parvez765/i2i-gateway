import React from 'react';
import "./Counter.css"
import CountUp from 'react-countup';
import SectionHeading from '../SectionHeading/SectionHeading';


const Counter = () => {
    return (
        <div className='bgContainer'>
            <div className='container mx-auto'>
                <SectionHeading title={"Our Achievements"} customStyle={"text-white"}/>

            </div>
            <section>
                <div
                    className='mt-[50px] mb-[50px] grid lg:grid-cols-4 md:grid-cols-2 justify-items-center text-center'>
                    <div><CountUp end={34} duration={8} className='counter'/>
                        <p className='text-[20px] 2xl:text-[30px] -mt-[16px] font-medium text-white'>Project
                            Completed</p>
                    </div>
                    <div><CountUp end={8} duration={8} className='counter' formattingFn={(value) => `${value}+`}/>
                        <p className='text-[20px] 2xl:text-[30px] -mt-[16px] font-medium text-white'>Years of
                            Experience</p>
                    </div>
                    <div><CountUp end={98} duration={8} className='counter' formattingFn={(value) => `${value}%`}/>
                        <p className='text-[20px] 2xl:text-[30px] -mt-[16px] font-medium text-white'>Client Satisfaction
                            Rate</p>
                    </div>
                    <div><CountUp end={40} duration={8} className='counter' formattingFn={(value) => `${value}+`}/>
                        <p className='text-[20px] 2xl:text-[30px] -mt-[16px] font-medium text-white'>Energy Savings
                            Generated Per Project</p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Counter;
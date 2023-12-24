import React from 'react';
import "./Counter.css"
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className='bgContainer'>
            <div className='container mx-auto'>
                <h1 className="text-center seedText text-[35px] lg:text-[50px] text-white leading-[60px] mb-[12px]">Our Achievements Through <br/>Lean Transformation</h1>
                <p className='lg:w-[850px] block mx-auto text-center font-medium text-white'>Our humble yet expert team members, specialise in Strategic, Tactical and Operational Leadership, clubbed with General Management and Executive Coaching background. We use a pragmatic systemic approach to analyse situations and facilitate to build implementable solutions. Some of the key achievements in numbers as below.</p>
            </div>
           <section className='container mx-auto'>
                <div className='mt-[50px] mb-[50px] grid lg:grid-cols-3 justify-items-center text-center'>
                    <div> <CountUp end={38} duration={8} className='counter' formattingFn={(value) => `${value}%`}/>
                    <p className='text-[20px] 2xl:text-[30px] -mt-[16px] font-medium text-white'>Defect Reduction</p>
                    </div>
                    <div> <CountUp end={35} duration={8} className='counter' formattingFn={(value) => `${value}%`}/>
                    <p className='text-[20px] 2xl:text-[30px] -mt-[16px] font-medium text-white'>Efficiency Improvement</p>
                    </div>
                    <div> <CountUp end={25} duration={8} className='counter' formattingFn={(value) => `${value}%`}/>
                    <p className='text-[20px] 2xl:text-[30px] -mt-[16px] font-medium text-white'>Lead Time reduction</p>
                    </div>
                </div>
           </section>
         </div>
    );
};

export default Counter;
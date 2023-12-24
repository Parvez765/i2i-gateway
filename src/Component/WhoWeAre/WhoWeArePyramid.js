import React from 'react';
import "./WhoWeArePyramid.css"

const WhoWeArePyramid = () => {
    return (
        <div className='mt-[30px]' data-aos="fade-up">
            <div className='servicesBg'>
           
           <div className='container mx-auto'>
            
               <div className='flex lg:ml-[150px] justify-center lg:justify-start lg:items-start'>
                  
                   <div className='flex flex-col' data-aos="zoom-in-left">
                       <div className='flex flex-col-reverse items-center lg:items-center lg:flex-row gap-[5px] lg:gap-[10px]'>
                           <div className='servicePara  lg:w-[350px] mb-[20px]'>
                               <p className='justify-center text-center lg:text-right lg:justify-end block mx-auto lg:w-[400px]'>Assess Current State <br />
                                   Identify Improvement Opportunities <br />
                                   Strategy/Policy Deployment</p>
                           </div>
                           <h1 className='textOne text-[35px] lg:text-[40px] textContainer text-[#002060] text-center mb-[10px] '>Strategic</h1>
                       </div>
                       <div className='flex flex-col-reverse items-center lg:items-center lg:flex-row  gap-[5px] lg:gap-[10px]'>
                           <div className='servicePara  w-[250px] lg:w-[350px] mb-[20px]'>
                               <p className='justify-center text-center lg:text-right lg:justify-end block mx-auto lg:w-[400px]'>Training <br />
                                   Culture of Continuous Improvement <br />
                                   TOP : Takt - Flow - Pull</p>
                           </div>
                           <h1 className='textOne text-[35px] lg:text-[40px] textContainer text-[#002060] text-center mb-[10px] mt-[15px]'>Tactical</h1>
                       </div>
                       <div className='flex flex-col-reverse items-center lg:items-center lg:flex-row  gap-[5px] lg:gap-[10px]'>
                           <div className='servicePara w-[250px] lg:w-[350px] mb-[20px]'>
                               <p className='justify-center text-center lg:text-right lg:justify-end lg:w-[400px] block mx-auto'>Shop Floor Kaizen <br />
                                   Business Process Kaizen <br />
                                   Sustainment <br />
                                   SQDE</p>
                           </div>
                           <h1 className='textOne text-[35px] lg:text-[40px] textContainer text-[#002060] text-center mb-[10px] mt-[15px]'>Operational</h1>
                       </div>
                   </div>

               </div>
           </div>
       </div> 
        </div>
    );
};

export default WhoWeArePyramid;
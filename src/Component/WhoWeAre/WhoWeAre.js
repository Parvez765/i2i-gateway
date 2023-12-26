import React from 'react';
import FlipCard from '../FlipCard/FlipCard';
import WhoWeArePyramid from './WhoWeArePyramid';
import SectionHeading from '../SectionHeading/SectionHeading';



const WhoWeAre = () => {
    return (
        <div className='container mx-auto'>
           <div className='px-6 lg:px-0'>
             <SectionHeading title={"About I2I Gateway"} subtitle={"Empowering Industries with Premier MEP & FIRE Solutions"}/>
             <div className='flex flex-col lg:flex-row justify-center items-center gap-[24px]'>
                <div>
                    <figure><img src="https://i.ibb.co/jkwBh39/about-image.jpg" alt="I2I Gateway About Images" className='w-full rounded-lg aboutImages'/></figure>
                </div>
                <div>
                    <p className='text-[18px]'>I2I Gateway stands as a premier consultancy firm specializing in professional mechanical, electrical, and plumbing (MEP & FIRE) services. Established with a clear focus on delivering 360-degree solutions, we cater to the rapidly evolving industrial and commercial sectors in Bangladesh. <br/><br/> Our comprehensive suite of services spans from feasibility studies and risk analysis to engineering planning, project management, and MEP project oversight. With a dedicated team committed to high-tech modeling and world-class solutions, we prioritize client satisfaction by offering expertise, development, and operational skills in an efficient and cost-effective manner. </p>

                    <p className='text-[18px] mt-[20px] lg:hidden 2xl:block'>At I2I Gateway, we pride ourselves on offering a wide spectrum of professional services that encompass the entire project lifecycle. From conducting in-depth feasibility studies and risk analysis to engineering planning and concept development, our expertise extends to crafting construction-level design solutions that align with your vision and objectives. Moreover, our portfolio includes project management, procurement support, construction monitoring, supervision, inspection, and expediting of MEP projects, catering to a diverse clientele across industries.</p>
                </div>
             </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
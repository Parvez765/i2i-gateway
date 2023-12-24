import React from 'react';
import FlipCard from '../FlipCard/FlipCard';
import WhoWeArePyramid from './WhoWeArePyramid';



const WhoWeAre = () => {
    return (
        <div className='' data-aos="fade-right">
           <div className='container mx-auto'>
            <h1 className='text-center text-[35px] lg:text-[50px] text-[#002060] font-bold p-8 lg:pt-10'>The MindWork Ways</h1>
                <p className='lg:mt-[30px] mb-[30px] text-center lg:text-[22px] lg:w-[1400px] p-8 lg:p-0 block mx-auto'>Mindworks is an organization that strives to achieve excellence through people transformation. We help companies achieve operational excellence through continuous improvement. The Minworks Way is to work with your organization to help you achieve lean operations and build a culture of continuous improvement.

                    Mindworks’ core philosophy is that in business, there is no one-size-fits-all solution. Each problem is different and hence requires a totally customized solution. With this core value, Mindworks provides customized solutions to help organizations improve productivity and efficiency, reduce defect rate and operational costs, and improve the overall profitability of the company. Consulting and training solutions are designed to achieve long-term sustainability.</p>
           </div>

            {/* Strategic Idea */}
           <div className='mt-[50px]'>
            <WhoWeArePyramid/>
           </div>
            <p className='mt-[25px] lg:mt-[95px] text-center lg:text-[22px] lg:w-[1400px] p-8 lg:p-0 block mx-auto'>We believe in bringing about change through process and people transformation.We work with organizations to improve their value chain processes and making them lean. Our strategic, tactical, and operational approach aims to drive change across the value chain which ensures a high success rate in business process improvement. Our customized training solutions are designed to teach people by doing, inspiring them to change for their own good, and for the betterment of the company.</p>
            <FlipCard/>
            <p className='mb-[50px] text-center lg:text-[22px] lg:w-[1400px] p-8 lg:p-0 block mx-auto'>With international operations and offices in India, Bangladesh and Vietnam, Mindworks offers localized business solutions that cater to the market demands of South-East Asian countries.</p>
        </div>
    );
};

export default WhoWeAre;
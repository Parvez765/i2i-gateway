import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { whatWeDo } from '../../data/whatWeDo';

const WhatWeDo = () => {
    return (
        <div className='container mx-auto'>
            <SectionHeading title={"What We Do"}/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[24px] mt-[16px] mb-[16px]'>
                {
                    whatWeDo?.map((element, id) => <div key={element.id}>
                        <figure><img src={element.img} alt="What We Do Images" className='w-[150px] block mx-auto'/></figure>
                        <div>
                            <h2 className='text-center text-[22px] font-medium mt-[8px]'>{element.name}</h2>
                            <p className='text-center'>{element.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WhatWeDo;
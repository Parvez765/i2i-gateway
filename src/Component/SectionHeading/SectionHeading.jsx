import React from 'react';
import './SectionHeading.css'

const SectionHeading = ({title, subtitle="", customStyle}) => {
    return (
        <div className='container mx-auto text-center sectionHeading my-16'>
            <h1 className={`mb-[16px] block mx-auto text-[26px] lg:text-[30px] leading-[20px] ${customStyle ? customStyle : "text-black"}`}>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default SectionHeading;
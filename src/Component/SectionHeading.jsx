import React from 'react';

const SectionHeading = ({title}) => {
    return (
        <div className='text-center'>
            <h1 className='serviceHead mb-[16px] block mx-auto text-[26px] lg:text-[30px] leading-[50px]'>{title}</h1>
        </div>
    );
};

export default SectionHeading;
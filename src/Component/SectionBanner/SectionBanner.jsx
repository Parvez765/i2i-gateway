import React from 'react';

const SectionBanner = ({backgroundImage, title}) => {
    return (
        <div>
             <div className='text-white text-[48px] font-bold flex items-center justify-center' style={{ backgroundImage:`url(${backgroundImage})`, height: "60vh"}}><h2>{title}</h2></div>
        </div>
    );
};

export default SectionBanner;
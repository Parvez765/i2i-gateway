import React from 'react';

const SubFooter = () => {
    return (
        <div className='bg-[#002060] p-3'>
            <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center text-white'>
                    <p className='text-[10px] lg:text-[16px] mb-[8px] lg:mb-[0px]'>© Copyright MindWorksBd | All Rights Reserved.</p>
                    <p className='text-[10px] lg:text-[16px]'>Website developed by <a href="https://www.facebook.com/pervez.me/">Md. Parvez Hossain</a></p>
              </div> 
        </div>
    );
};

export default SubFooter;
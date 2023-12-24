import React from 'react';
import programmes  from '../../data/programmes';

const Programmes = () => {
    return (
        <div className='container mx-auto p-10'>
            <h1 className='text-[35px] lg:text-[50px] text-[#002060] font-bold text-center'>Our Programmes</h1>
            <div className='grid lg:grid-cols-3 gap-[50px] mt-[70px]'>
                {
                    programmes?.map(programme => <div>
                        <img src={programme.img} alt="Mind Works Programme" className='lg:h-[350px] object-cover rounded-lg'/>
                        <p className='text-center font-bold mt-[12px] text-[22px]'>{programme.name}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Programmes;
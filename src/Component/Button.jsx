import React from 'react';

const Button = ({title}) => {
    return (
        <div className='flex justify-center lg:justify-start'>
            <button className='bg-blue-500 px-6 py-3 text-white mt-[16px] customButton'>{title}</button>
        </div>
    );
};

export default Button;
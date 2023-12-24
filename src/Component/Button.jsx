import React from 'react';

const Button = ({title}) => {
    return (
        <button className='bg-blue-500 px-6 py-3 text-white mt-[16px] customButton'>{title}</button>
    );
};

export default Button;
import React from 'react';
import "./MSI.css"
import msi from '../../data/msi';

const MSI = () => {
    return (
        <div className='msiBackground p-[15px] lg:p-[60px]'>
           <div className='container mx-auto'>
                <h1 className='text-[35px] lg:text-[50px] mb-[30px] text-white text-center font-bold leading-[40px] lg:leading-[60px]'>MSI - MANAGEMENT<br/> SYSTEM IMPLEMENTATION</h1>
                <p className='text-center lg:text-[22px] text-white lg:w-[800px] block mx-auto'>Management System Implementation is a focussed service offering that entails working closely with the top management of your company to develop and implement company-level objectives and strategies. The solution is an advisory role which encompasses conducting extensive assessment of the current state of the organization, making reports and setting future ideal targets.</p>

                <div>
                    <p className='mt-[50px] lg:text-[22px] text-white text-center'>The customized Mindworks MSI solutions include thorough analysis of:</p>
                    <div className='mt-[30px] flex flex-col lg:flex-row items-center justify-center gap-[30px]'>
                        {
                            msi?.map(ms =>
                             <div className='circle w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]'>
                                <h2 className='text-white lg:text-[22px] font-bold text-center'>{ms.title}</h2>
                            </div>)
                        }
                    </div>
                </div>
           </div>
        </div>
    );
};

export default MSI;
import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import fssd from '../../assets/clients/fssd.png'
import dife from '../../assets/clients/dife.png'
import usgbc from '../../assets/clients/usgbc.png'
import rsc from '../../assets/clients/rsc.png'

const ApprovedBy = () => {
    return (
        <div>
            <SectionHeading title={"We are approved by"}/>
            <div className='container mx-auto grid lg:grid-cols-4 sm:grid-cols-2'>
                <div>
                    <img src={fssd} alt="" />
                </div>
                <div>
                    <img src={dife} alt="" />
                </div>
                <div>
                    <img src={usgbc} alt="" />
                </div>
                <div>
                    <img src={rsc} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ApprovedBy;
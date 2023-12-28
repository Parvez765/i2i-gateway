import React from 'react';
import { useLoaderData } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';

const SinglePortfolio = () => {
    const projectDetails = useLoaderData()
    console.log(projectDetails);
    return (

        <>
            <div className='mt-[16px] mb-[16px]' style={{ height: "80vh", backgroundImage: `url(https://i.ibb.co/PwkYNPL/portfolio.png)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }} />
            <div className='container mx-auto'>
                <SectionHeading title={projectDetails.title} />
                <div>
                    <h4 className='text-center -mt-[50px]'>{projectDetails.description}</h4>
                </div>
            </div>
        </>

    );
};

export default SinglePortfolio;
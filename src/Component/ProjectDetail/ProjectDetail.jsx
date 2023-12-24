import React from 'react';
import { useLoaderData } from 'react-router';
import { services } from '../../data/services';
import Button from '../Button';
import SectionHeading from '../SectionHeading';


const ProjectDetail = () => {
    const projectDetails = useLoaderData()

    console.log(projectDetails.content);
    return (
        <>
            {/* <div className='bg-blue-800'>
                <h2 className='text-[36px] text-center font-medium mb-[16px] py-6 text-white'>{projectDetails.name}</h2>
            </div> */}
            <div className='container mx-auto'>
                <div>
                   <div className='mt-[16px] mb-[16px]' style={{height:"80vh", backgroundImage:`url(${projectDetails.image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundAttachment:"fixed"}}/>
                        
                  
                    <div>
                       <SectionHeading title={projectDetails.title}/>
                       
                       <h4 className='font-bold my-8 text-[22px]'>Detail about {projectDetails.title}:</h4>
                        <p className='text-justify'>{projectDetails.description}</p>
                        <hr className='my-8' />
                    </div>
                </div>
            </div>
        </>

    );
};

export default ProjectDetail;
import React from 'react';
import { useLoaderData } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';


const SingleServiceDetail = () => {
    const serviceDetails = useLoaderData()

    console.log(serviceDetails.content);
    return (
        <>
            {/* <div className='bg-blue-800'>
                <h2 className='text-[36px] text-center font-medium mb-[16px] py-6 text-white'>{serviceDetails.name}</h2>
            </div> */}
            <div className='container mx-auto'>
                <div>
                   <div className='mt-[16px] mb-[16px]' style={{height:"80vh", backgroundImage:`url(${serviceDetails.image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundAttachment:"fixed"}}/>
                        
                  
                    <div>
                       <SectionHeading title={serviceDetails.name}/>
                       <div className='mt-[16px] mb-[16px] grid grid-cols-2 gap-5'>
                        {
                            serviceDetails.content?.map(detail => <div className='bg-slate-200 rounded-lg cursor-pointer hover:bg-black hover:text-white flex items-center p-5 text-center'>
                                <p>{detail}</p>
                            </div>)
                        }
                       </div>
                       <h4 className='font-bold my-8 text-[22px]'>Detail about {serviceDetails.name}:</h4>
                        <p className='text-justify'>{serviceDetails.description}</p>
                        <hr className='my-8' />
                    </div>
                </div>
            </div>
        </>

    );
};

export default SingleServiceDetail;
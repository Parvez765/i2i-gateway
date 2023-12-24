import React from 'react';
import "./USP.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SectionHeading from '../SectionHeading';
import { services } from '../../data/services';
import Button from '../Button';
import { Link } from 'react-router-dom';
// ..
AOS.init();


const USP = () => {
    return (
        
        <div className='container mx-auto p-10'>
          <SectionHeading title={"Services We Offer"}/>
             <p className='text-center mb-[24px] lg:w-[850px] block mx-auto'>We provide contracting services for all Electrical, HVAC, Mechanical & Plumbing works in projects. It includes bids preparation, planning & execution of works, coordination with all players etc. A professional, experienced, trained & educated workforce is deployed to carry out each job.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]'>
                {
                    services?.map(service => <div className="card glass">
                    <figure><img src={service.image}  alt="car!"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{service.name}</h2>
                      <p className='serviceDescription'>{service.description}</p>
                      <div className="card-actions">
                        <Link to={`/service/${service.id}`}><Button title={service.buttonText}/></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default USP;
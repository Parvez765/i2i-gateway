import React from 'react';
import "./OurServices.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SectionHeading from '../SectionHeading/SectionHeading';
import { services } from '../../data/services';
import Button from '../Button';
import { Link } from 'react-router-dom';
// ..
AOS.init();


const OurServices = () => {
    return (
        
        <div className='container mx-auto p-10'>
          <SectionHeading title={"Services We Offer"} subtitle={"We provide contracting services for all Electrical, HVAC, Mechanical & Plumbing works in projects."}/>
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

export default OurServices;
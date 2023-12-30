import React from 'react';
import { services } from '../../data/services';
import Button from '../../Component/Button';
import { Link } from 'react-router-dom';
import SectionBanner from '../../Component/SectionBanner/SectionBanner';

const Solutions = () => {
    return (
        <div>
          <SectionBanner backgroundImage={"https://i.ibb.co/yW2pRb7/service.png"} title={"Our Solutions"}/>
            {/* <div className='text-white text-[48px] font-bold flex items-center justify-center' style={{backgroundImage:`url(${serviceBg})`, height: "60vh"}}><h2>Our Solutions</h2></div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] container mx-auto mt-16'>
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

export default Solutions;
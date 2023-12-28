import React from 'react';
import SectionBanner from '../../Component/SectionBanner/SectionBanner';
import { projectData } from '../../data/projectData';
import { Link } from 'react-router-dom';
import Button from '../../Component/Button';

const Portfolio = () => {
    return (
        <div>
            <SectionBanner backgroundImage={"https://i.ibb.co/PwkYNPL/portfolio.png"} title={"Our Portfolio"}/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] container mx-auto mt-16'>
                {
                    projectData?.map(service => <div className="card glass">
                    <figure><img src={service.image}  alt="car!"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{service.name}</h2>
                      <p className='serviceDescription'>{service.description}</p>
                      <div className="card-actions">
                        <Link to={`/portfolio/${service.id}`}><Button title={"See More"}/></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Portfolio;
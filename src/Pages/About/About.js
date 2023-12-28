import React from 'react';
import WhoWeAre from '../../Component/WhoWeAre/WhoWeAre';
import KeyConsultants from '../../Component/KeyConsultants/KeyConsultants';
import FAQ from '../../Component/FAQ/FAQ';
import WhyChooseUs from '../../Component/WhyChooseUs/WhyChooseUs';
import AboutBanner from '../../Component/AboutBanner/AboutBanner';

const About = () => {
    return (
        < >
            <AboutBanner/>
           <div className='container mx-auto'>
           <WhoWeAre/>
            <FAQ/>
            <WhyChooseUs/>
           </div>
        </>
    );
};

export default About;
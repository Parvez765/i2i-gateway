import React from 'react';
import HomeComponent from '../../Component/HomeComponent/HomeComponent';
import OurServices from '../../Component/OurServices/OurServices';
import Structure from '../../Component/Structure/Structure';
import OurProjects from '../../Component/OurProjects/OurProjects';
import Industries from '../../Component/Industries/Industries';
import ClientsLogo from '../../Component/ClientsLogo/ClientsLogo';
import Counter from '../../Component/Counter/Counter';
import WhatWeDo from '../../Component/WhatWeDo/WhatWeDo';
import ApprovedBy from '../../Component/ApprovedBy/ApprovedBy';

const HomePage = () => {
    return (
        <div>
            <HomeComponent/>
            <WhatWeDo/>
            <OurServices/>
            <Structure/>
            <OurProjects/>
            <Industries/>
            <Counter/>
            <ClientsLogo/>
            <ApprovedBy/>
        </div>
    );
};

export default HomePage;
import React from 'react';
import Navbar from '../Component/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Shared/Footer/Footer';
import TopNav from '../Component/Shared/TopNav/TopNav';

const Main = () => {
    return (
        <div>
            <TopNav/>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;
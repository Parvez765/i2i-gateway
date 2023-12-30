import React from "react";
import Navbar from "../Component/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Shared/Footer/Footer";
import TopNav from "../Component/Shared/TopNav/TopNav";

const Main = () => {
  return (
    <div>
      <div className="fixed top-0 z-50 w-full">
        <TopNav />
        <Navbar />
      </div>
      <div>

      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;

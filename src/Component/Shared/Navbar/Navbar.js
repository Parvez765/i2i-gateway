import React, { useState } from "react";
import "./Navbar.css";
import {
  FaAngleDown,
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegMoon,
  FaShareSquare,
  FaTwitter,
} from "react-icons/fa";
import {GrClose} from "react-icons/gr"
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [cross, setCross] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [activeAboutDropdown, setActiveAboutDropdown] = useState(null);
  const [activeServicesDropdown, setActiveServicesDropdown] = useState(null);
  const [activeAboutDropdown, setActiveAboutDropdown] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnterServices = (dropdown) => {
    setActiveServicesDropdown(dropdown);
  };


  const handleMouseEnterAbout = (dropdown) => {
    setActiveAboutDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveServicesDropdown(null);
    setActiveAboutDropdown(null);
  };

  const handleShareClick = () => {
    setCross(true);
  };

  const handleDrawerToggle = () => {
    setCross(!cross);
  };

  return (
  
       <nav className="navbar">
      <div className="container mx-auto navContainer">
        <div className="">
          <Link to="/">
            
            <img
              src="https://i.ibb.co/cwRJShV/logo.png"
              alt="I2I Gateway Navbar Logo"
              className="w-[120px] lg:w-[250px]"
            />
          </Link>
        </div>

        <div className="hidden lg:block">
          <div
            className={`navbar-menu ${isOpen ? "open" : ""}`}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="navbar-nav ">
             <Link to="/">
                <li className="nav-link px-10">
                    Home
                </li>
              </Link>
              <li
                className={`nav-item dropdown ${
                  activeAboutDropdown === "about" ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnterAbout("about")}
              >
                <button className="dropdown-toggle serviceToggle flex items-center gap-[6px]">
                  About Us <FaAngleDown />
                </button>
                <ul
                  className={`dropdown-menu ${
                    activeAboutDropdown === "about" ? "open" : ""
                  }`}
                >
                  <Link to="/consulting">
                    <li className="nav-item">
                      <a href="#about1" className="nav-links">
                       Our Team
                      </a>
                    </li>
                  </Link>
                  <Link to="/msi">
                    <li className="nav-item mt-[10px]">
                      <a href="#about3" className="nav-links">
                        Testimonials
                      </a>
                    </li>
                  </Link>
                  <Link to="/training">
                    <li className="nav-item mt-[10px]">
                      <a href="#about3" className="nav-links">
                        FAQ
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>
              <li
                className={`nav-item dropdown ${
                  activeServicesDropdown === "services" ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnterServices("services")}
              >
                <button className="dropdown-toggle serviceToggle flex items-center gap-[6px]">
                  About Us <FaAngleDown />
                </button>
                <ul
                  className={`dropdown-menu ${
                    activeServicesDropdown === "services" ? "open" : ""
                  }`}
                >
                  <Link to="/consulting">
                    <li className="nav-item">
                      <a href="#service1" className="nav-links">
                       Our Team
                      </a>
                    </li>
                  </Link>
                  <Link to="/msi">
                    <li className="nav-item mt-[10px]">
                      <a href="#service3" className="nav-links">
                        Testimonials
                      </a>
                    </li>
                  </Link>
                  <Link to="/training">
                    <li className="nav-item mt-[10px]">
                      <a href="#service3" className="nav-links">
                        FAQ
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>
         
              

              {/* <li
                className={`nav-item dropdown ${
                  activeAboutDropdown === "about" ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnterAbout("about")}
              >
                <button className="dropdown-toggle serviceToggle flex items-center gap-[6px]">
                  About Us <FaAngleDown />
                </button>
                <ul
                  className={`dropdown-menu ${
                    activeAboutDropdown === "about" ? "open" : ""
                  }`}
                >
                  <Link to="/whoweare">
                    <li className="nav-item">
                      <a href="#about2" className="nav-links">
                        Who We Are
                      </a>
                    </li>
                  </Link>
                  <Link to="/testimonial">
                    <li className="nav-item mt-[10px]">
                      <a href="#about1" className="nav-links">
                        Testimonial
                      </a>
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li className="nav-item mt-[10px]">
                      <a href="#about1" className="nav-links">
                        Contact
                      </a>
                    </li>
                  </Link>
                </ul>
              </li> */}
              {/* <Link to="/blog">
                <li
                  className={`nav-item ${
                    activeServicesDropdown === "contact" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnterAbout("contact")}
                >
                  <a className="nav-link">Blog</a>
                </li>
              </Link> */}
              {/* <Link to="/programme">
                <li
                  className={`nav-item ${
                    activeServicesDropdown === "contact" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnterAbout("contact")}
                >
                  <a className="nav-link">Programmes</a>
                </li>
              </Link> */}
            </ul>
            {/* <Link to="/contact">
              <div className="ml-[16px]">
                <button className="appoinmentBtn lg:text-[22px]">Schedule a call</button>
              </div>
            </Link> */}
          </div>
        </div>

       
      </div>
      {/* Drawer Section */}
      <div className="block lg:hidden">
        {cross ? (
          <div className="block 2xl:hidden" onClick={handleDrawerToggle}>
          <FaBars className="text-[white] text-[22px]" />
        </div>
        ) : (
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button">
                <FaBars
                  onClick={() => setCross(cross)}
                  className="text-[white] text-[22px]"
                />
              </label>
            </div>
            {!cross && (
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <div className="">
                    <GrClose
                      className="text-[black] text-[22px] mb-[30px]"
                      onClick={handleShareClick}
                    />
                  </div>
                  <li>
                    <details>
                      <summary className="nav-links">Services</summary>
                      <ul className="p-2">
                        <Link to="/consulting">
                          <li className="nav-links">
                            <a>Consulting</a>
                          </li>
                        </Link>
                        <Link to="/msi">
                          <li className="nav-links">
                            <a>Msi</a>
                          </li>
                        </Link>
                        <Link to="/training">
                          <li className="nav-links">
                            <a>Training</a>
                          </li>
                        </Link>
                      </ul>
                    </details>
                  </li>
                  <Link to="/seed">
                    <li className="nav-links">
                      <a>SEED</a>
                    </li>
                  </Link>
                  <Link to="/leantransformation">
                    <li className="nav-links">
                      <a>Lean Transformation</a>
                    </li>
                  </Link>
                  <li>
                    <details>
                      <summary className="nav-links">About Us</summary>
                      <ul className="p-2">
                        <Link to="/whoweare">
                          <li className="nav-item">
                            <a href="#about2" className="nav-links">
                              Who We Are
                            </a>
                          </li>
                        </Link>
                        <Link to="/testimonial">
                          <li className="nav-item mt-[10px]">
                            <a href="#about1" className="nav-links">
                              Testimonial
                            </a>
                          </li>
                        </Link>
                        <Link to="/contact">
                          <li className="nav-links">
                            <a>Contact</a>
                          </li>
                        </Link>
                      </ul>
                    </details>
                  </li>
                  <Link to="/programme">
                    <li className="nav-links">
                      <a>Programmes</a>
                    </li>
                  </Link>
                  <Link to="/blog">
                    <li className="nav-links">
                      <a>Blog</a>
                    </li>
                  </Link>
                  <Link to="/contact">
                    <div className="mt-[20px]">
                      <button className="appoinmentMobileBtn">
                        Schedule a call
                      </button>
                    </div>
                  </Link>
                  <div className="flex items-center gap-[16px] mt-[20px] ml-[5px]">
                   <a href="https://www.facebook.com/mindworksbangladesh" target="_blank"> <FaFacebook className="text-black text-[22px]" /></a>
                  <a href="https://twitter.com/MindWorks16" target="_blank"><FaTwitter className="text-black  text-[22px]" /></a>
                  <a href="https://www.linkedin.com/company/mind-works-bangladesh/" target="_blank"><FaLinkedin className="text-black  text-[22px]" /></a>
                    {/* <FaInstagram className="text-black  text-[22px]" /> */}
                  </div>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
 
  );
};

export default NavBar;

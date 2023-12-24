import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Contact from "../Pages/HomePage/Contact/Contact";
import TestimonialPage from "../Pages/TestimonialPage/TestimonialPage";
import About from "../Pages/About/About";
import LeanTransformationPage from "../Pages/LeanTransformationPage/LeanTransformationPage";
import Seed from "../Pages/Seed/Seed";
import Consulting from "../Component/Consulting/Consulting";
import MSI from "../Component/MSI/MSI";
import Training from "../Component/Training/Training";
import BlogPage from "../Pages/BlogPage/BlogPage";
import SingleBlogPage from "../Component/Blog/SingleBlogPage";
import blogs from '../data/blogs';
import Programme from "../Pages/Programme/Programme";
import SingleServiceDetail from "../Component/SingleServiceDetail/SingleServiceDetail";
import { services } from "../data/services";
import Solutions from "../Pages/Solutions/Solutions";
import ProjectDetail from "../Component/ProjectDetail/ProjectDetail";
import { projectData } from "../data/projectsData";



export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <HomePage/>
            },
            {
                path: "/contact", element: <Contact/>
            },
            {
                path: "/testimonial", element: <TestimonialPage/>
            },
            {
                path: "/whoweare", element: <About/>
            },
            {
                path : "/leantransformation", element: <LeanTransformationPage/>
            },
            {
                path : '/seed', element: <Seed/>
            },
            {
                path: "/consulting", element: <Consulting/>
            },
            {
                path: "/msi", element: <MSI/>
            },
            {
                path: "/training", element : <Training/>
            },
            {
                path : "/blog", element : <BlogPage/>
            },
            {
                path : "/programme", element : <Programme/>
            },
            {
                path : "/blog/:id",
                element : <SingleBlogPage/>,
                loader : ({params}) => {
                  const blogSingle = blogs?.find((blog) => blog?.id === parseInt(params?.id));
                  return blogSingle
                }
            },
            {
                path : "/service/:id",
                element : <SingleServiceDetail/>,
                loader : ({params}) => {
                    const serviceDetail = services?.find((service) => service?.id === parseInt(params?.id))
                    return serviceDetail
                }
            },
            {
                path : "/project/:id",
                element : <ProjectDetail/>,
                loader: ({params}) => {
                    const projectDetail = projectData?.find(project => project?.id === parseInt(params?.id))
                    return projectDetail
                }
            },
            {
                path : "/solutions",
                element : <Solutions/>
            }
        ]
    }
])
import React from "react";
import blogs from "../../data/blogs";
import SingleBlogPage from "./SingleBlogPage";
import { Link } from "react-router-dom";


const Blog = () => {
 return (
    <div className="container mx-auto mt-[25px] lg:mt-[50px] mb-[50px] p-8">
      <h1 className=" text-[35px] lg:text-[50px] text-center font-bold text-[#002060]">
        Latest Blog Post
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] mt-[50px]">
        {blogs?.map((blog) => (
            <div className="blogContainer lg:p-[10px]">
               <Link to={`/blog/${blog.id}`}><img src={blog?.img} alt="Mind works Blog Page" className="blogImage"/>
              <h2 className="text-[35px] mt-[10px] mb-[10px] font-bold">{blog?.title}</h2>
              <p>{blog?.detailsOne.slice(0, 245)}</p>
             
             </Link>
            </div>
         ))}
      </div>
    </div>
  );
};

export default Blog;

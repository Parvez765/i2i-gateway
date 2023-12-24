import React, { useState } from "react";
import "./Blog.css";
import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  // console.log(blog);

  const blogData = useLoaderData()

  console.log(blogData);

  return (
    <div className="blogPost p-4 mt-[50px] mb-[50px]">
      <img src={blogData?.img} alt="Mind Works Blog Section" className="border rounded-lg blogSingleImage lg:w-[800px] block mx-auto"/>
      <div className="text-center">
        <h2 className="text-[35px] mt-[10px] mb-[10px] font-bold">{blogData?.title}</h2>
        <div className="text-left">
          <p className="lg:w-[1000px] block mx-auto">{blogData?.detailsOne}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsTwo}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsThree}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsFour}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsFive}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsSix}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsSeven}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsEight}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsNine}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsTen}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsEleven ? blogData?.detailsEleven : null}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsTwelve ? blogData?.detailsTwelve : null}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsThirteen ? blogData?.detailsThirteen : null}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsThirteen ? blogData?.detailsFourteen : null}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsThirteen ? blogData?.detailsFifteen : null}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsThirteen ? blogData?.detailsSixteen : null}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsThirteen ? blogData?.detailsSeventeen : null}</p>
          <p className="lg:w-[1000px] block mx-auto mt-[16px]">{blogData?.detailsThirteen ? blogData?.detailsEighteen: null}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;

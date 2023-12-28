import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import whyChooseUsImage from '../../assets/whychooseus.png'

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      id: 1,
      heading:
        "i2i GATEWAY: Empowering Industries with Premier MEP & FIRE Solutions",
      description:
        "Established with a visionary pursuit, i2i GATEWAY stands tall as a beacon in Bangladesh’s industrial and commercial landscape. We offer a holistic suite of 360-degree solutions to cater to the burgeoning needs of diverse sectors.",
      image: "",
    },
   
    {
      id: 2,
      heading:
        "Unrivaled Expertise and Commitment:",
      description:
        "Our dedicated teams of planners, designers, and engineers are the cornerstone of our commitment to client organizations. Armed with advanced technological tools and unwavering dedication, we ensure high-tech modeling and world-class MEP solutions.",
      image: "",
    },
    {
      id: 3,
      heading:
        "Tailored Solutions for Complex Challenges:",
      description:
        "No challenge is too complex for our adept teams at i2i GATEWAY. We believe in crafting bespoke solutions that address the immediate requirements also foresee future needs. Our holistic approach ensures that every project receives meticulous attention, allowing us to aligning seamlessly with your goals.",
      image: "",
    },
    {
      id: 4,
      heading:
        "Empowering Your Vision, Enhancing Operations:",
      description:
      `With i2i GATEWAY as your partner, expect a fusion of innovation, expertise, and operational excellence. We are not merely service providers; we are collaborators in your journey towards success. Our commitment lies in empowering your vision, enhancing operations to the growth and efficiency of your endeavors.`,
      image: "",
    },
  ];
  return (
    <div>
      <SectionHeading title={"Why choose us"} />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        {whyChooseUs.map((el) => (
          <div className="card shadow-lg p-5 lg:p-16 relative" key={el.id}>
            <h1 className="absolute top-[-100px] left-0 text-[350px] opacity-10 color-[#00247E]">{el.id}</h1>
            <img src={whyChooseUsImage} alt="" className="absolute bottom-0 right-0 opacity-20 " height={200} width={200} />
            <div className="bg-[#00247E70] lg:h-[240px] z-10 p-5 lg:p-10 bg-opacity-50 rounded-lg shadow-lg text-white">
                <h2 className="font-bold text-[18px] lg:text-[20px] mb-[16px]">
                {el.heading}
                </h2>
                <p>
                {el.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

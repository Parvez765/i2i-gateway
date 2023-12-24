import React from "react";
import training from "../../data/training";
import skills from "../../data/softSkills";
import sales from "../../data/sales";
import "./Training.css"

const Training = () => {
  return (
    <div className="bg-[#ECECEE]">
      <div className="container mx-auto p-10">
        <h1 className="text-center text-[35px] lg:text-[50px] text-[#002266] font-bold">
          Training
        </h1>
        <p className="text-center lg:text-[22px] lg:w-[850px] mt-[15px] block mx-auto">
          Mindworks offers training in key business functions that are integral
          for business growth and success. Every business problem is unique and
          hence, we tailor the training solutions to cater to unique business
          problems you may be facing. Our approach to training sessions is
          customized and personalized depending on your company, trainees, and
          the business objective of training.
        </p>
        <div className="text-center mt-[30px]">
        <h1 className="text-[35px] text-[#002266] font-bold leading-[40px]">
                Management Systems and <br/> Efficiency Improvement
              </h1>
              <p className="mt-[20px] lg:text-[22px] mb-[20px]  lg:w-[850px] block mx-auto">
                {" "}
                We offer training solutions that improve manufacturing processes
                through the implementation of Lean Practices, Six Sigma, 5S
                methodologies, and more. The focus of these training modules is
                on achieving continuous improvement and enabling organizations
                to build a team that can sustain continuous growth.
              </p>
        </div>
        <div>
          <p className="text-center mt-[50px] lg:text-[22px] text-[#002266] font-bold">
            Below are a few of the functions we offer training modules in:
          </p>
          <div className="" data-aos="fade-up">
            <div className="mt-[50px] mb-[50px]">
              <img
                src="https://i.ibb.co/mFpG0qd/imageone.jpg"
                className="rounded-lg block mx-auto"
                alt="Mind Works Training Modules"
              />
            </div>
            <div>

              <div className="grid lg:grid-cols-2 justify-center items-center gap-[15px] cursor-pointer">
                {training?.map((tr) => (
                  <div className="mt-[20px]">
                    <div className="flex items-center gap-[15px]">
                      <img
                        src={tr.img}
                        className="w-[25px]"
                        alt="Mind Works Right Mark"
                      />
                      <p className="text-[12px] 2xl:text-[22px] font-medium text-[#002060] trainingName">
                        {tr.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[100px] mb-[50px]">
              <img
                src="https://i.ibb.co/w0zMmYY/consulting-3055704-1280.jpg"
                className="rounded-lg block mx-auto"
                alt="Mind Works Training Modules"
              />
            </div>
            <div>
              <h1 className="text-[35px] text-[#002266] font-bold leading-[40px]">
                Personal and Soft Skills
              </h1>
              <p className="mt-[20px] lg:text-[22px] mb-[20px]">
                {" "}
                One of the most crucial aspects for businesses is employee
                development, soft skills, and personality development.
                Communication etiquette is important at all levels management –
                junior, mid, and senior level. Soft Skill training modules are
                designed considering the current state of skill sets and
                seniority in the company. With over 20 years of experience, our
                key consultants are experts that can help your organisation hone
                employee personalities and communication skills.
              </p>
              <div className="grid lg:grid-cols-2 justify-center items-center gap-[15px]">
                {skills?.map((tr) => (
                  <div className="mt-[20px]">
                    <div className="flex items-center gap-[15px]">
                      <img
                        src={tr.img}
                        className="w-[25px]"
                        alt="Mind Works Right Mark"
                      />
                      <p className="text-[12px] 2xl:text-[22px] font-medium text-[#002060]">
                        {tr.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[100px] mb-[50px]">
              <img
                src="https://i.ibb.co/mcKSNdP/accounts-1238828-1280.jpg"
                className="rounded-lg block mx-auto"
                alt="Mind Works Training Modules"
              />
            </div>
            <div>
              <h1 className="text-[35px] text-[#002266] font-bold leading-[40px] mb-[20px]">
                Sales Management Training
              </h1>
              {/* <p className='mt-[20px] text-center lg:text-[22px] mb-[20px]'> One of the most crucial aspects for businesses is employee development, soft skills, and personality development. Communication etiquette is important at all levels management – junior, mid, and senior level. Soft Skill training modules are designed considering the current state of skill sets and seniority in the company. With over 20 years of experience, our key consultants are experts that can help your organisation hone employee personalities and communication skills.</p> */}
              <div className="grid lg:grid-cols-2 justify-center items-center gap-[15px]">
                {sales?.map((tr) => (
                  <div className="mt-[20px]">
                    <div className="flex items-center gap-[15px]">
                      <img
                        src={tr.img}
                        className="w-[25px]"
                        alt="Mind Works Right Mark"
                      />
                      <p className="text-[12px] 2xl:text-[22px] font-medium text-[#002060]">
                        {tr.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[100px] mb-[50px]">
              <img
                src="https://i.ibb.co/02kkb7N/business-4677631-1280.jpg"
                className="rounded-lg block mx-auto"
                alt="Mind Works Training Modules"
              />
            </div>
            <div>
              <h1 className="text-[35px] text-[#002266] font-bold leading-[40px] mb-[20px]">
                HR Management Training
              </h1>
              {/* <p className='mt-[20px] text-center lg:text-[22px] mb-[20px]'> One of the most crucial aspects for businesses is employee development, soft skills, and personality development. Communication etiquette is important at all levels management – junior, mid, and senior level. Soft Skill training modules are designed considering the current state of skill sets and seniority in the company. With over 20 years of experience, our key consultants are experts that can help your organisation hone employee personalities and communication skills.</p> */}
              <div className="grid lg:grid-cols-2 justify-center items-center gap-[15px]">
                {sales?.map((tr) => (
                  <div className="mt-[20px]">
                    <div className="flex items-center gap-[15px]">
                      <img
                        src={tr.img}
                        className="w-[25px]"
                        alt="Mind Works Right Mark"
                      />
                      <p className="text-[12px] 2xl:text-[22px] font-medium text-[#002060]">
                        {tr.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;

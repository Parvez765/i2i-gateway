import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { faqData } from "../../data/FAQ";

const FAQ = () => {
  return (
    <div>
      <SectionHeading title={"Frequently asked questions"} />
      <>
      {
faqData?.map(el=>
    <div className="collapse collapse-arrow bg-base-200 mb-2" key={el.id}>
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          {el.question}
        </div>
        <div className="collapse-content">
          <p>{el.answer}</p>
        </div>
      </div>
              )
    }
      </>


    </div>
  );
};

export default FAQ;

import React, { useState } from 'react';
import "./Consulting.css"


const Consulting = () => {

    const [isCardOneFlipped, setCardOneFlipped] = useState(false);
    const [isCardTwoFlipped, setCardTwoFlipped] = useState(false);
    const [isCardThreeFlipped, setCardThreeFlipped] = useState(false);

    const handleCardOneFlip = () => {
        setCardOneFlipped(!isCardOneFlipped);
    };

    const handleCardTwoFlip = () => {
        setCardTwoFlipped(!isCardTwoFlipped);
    };

    const handleCardThreeFlip = () => {
        setCardThreeFlipped(!isCardThreeFlipped);
    };

    return (
        <div className='container mx-auto p-10'>
            <h1 className='text-[35px] lg:text-[50px] text-[#002060] font-bold text-center'>Consulting</h1>
            <p className='mt-[30px] mb-[30px] lg:text-[22px] text-center'>Every business need has unique problems and we can help you ascertain the solution that is best suited for your company’s success and growth. The first step to treatment is diagnosis; through a current state mapping and consulting assessment, you will be able to understand in depth the solution your business needs to transform. Depending on the result of the current state mapping, our consultants will work closely with you to assess the nature and duration of consulting that will help you meet business goals.</p>
            <div>
                <div className="flex flex-col lg:flex-row lg:gap-[30px] -mt-[30px]">
                    {/* Card One */}
                    <div
                        className={`flip-card lg:w-[750px] block mx-auto mt-[80px] lg:mb-[80px] ${isCardOneFlipped ? 'flipped' : ''
                            }`}
                        onMouseEnter={handleCardOneFlip}
                        onMouseLeave={handleCardOneFlip}
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2 className="text-[35px] flex justify-center items-center p-4 font-bold h-[400px] leading-10 text-[white]">
                                    Long-Term Business Transformation 3-5 Years
                                </h2>
                            </div>
                            <div className="flip-card-back">
                                <p className="p-4 flex justify-center items-center h-[400px] lg:text-[22px]">
                                    Medium Intensity, broad based business improvement focus
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card Two */}
                    <div
                        className={`flip-card lg:w-[750px] block mx-auto mt-[15px] lg:mt-[80px] lg:mb-[80px] ${isCardTwoFlipped ? 'flipped' : ''
                            }`}
                        onMouseEnter={handleCardTwoFlip}
                        onMouseLeave={handleCardTwoFlip}
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2 className="text-[35px] flex justify-center items-center p-4 font-bold h-[400px] leading-10">
                                    Rapid Transformation 12-18 Months
                                </h2>
                            </div>
                            <div className="flip-card-back">
                                <p className="p-4 flex justify-center items-center h-[400px] lg:text-[22px]">
                                    High Intensity operations or business process/transactional focus
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card Three */}
                    <div
                        className={`flip-card lg:w-[750px] block mx-auto mt-[15px] lg:mt-[80px] mb-[80px] ${isCardThreeFlipped ? 'flipped' : ''
                            }`}
                        onMouseEnter={handleCardThreeFlip}
                        onMouseLeave={handleCardThreeFlip}
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2 className="text-[35px] flex justify-center items-center p-4 font-bold h-[400px] leading-10">
                                    Targeted Transformation 90-180 Days
                                </h2>
                            </div>
                            <div className="flip-card-back">
                                <p className="p-4 flex justify-center items-center h-[400px] lg:text-[22px]">
                                    Address a very specific business issue
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='mb-[30px] lg:text-[22px] text-center'>Quick solutions are temporary solutions. The Mindworks Way is to empower your company to become self-sustaining. By developing long-term solutions and intensive training sessions, our goal remains to help you build teams that can carry forward the process of continuous improvement.</p>
        </div>
    );
};

export default Consulting;
import React, { useState } from 'react';
import "./FlipCard.css"

const FlipCard = () => {
    const [isCardOneFlipped, setIsCardOneFlipped] = useState(false);
    const [isCardTwoFlipped, setIsCardTwoFlipped] = useState(false);
  
    const handleCardOneFlip = () => {
      setIsCardOneFlipped(!isCardOneFlipped);
    };
  
    const handleCardTwoFlip = () => {
      setIsCardTwoFlipped(!isCardTwoFlipped);
    };
  
    return (
      <div className='flex flex-col lg:flex-row'>
        {/* Card One */}
        <div
          className={`flip-card lg:w-[750px] block mx-auto  mt-[80px] mb-[30px] lg:mb-[80px] ${isCardOneFlipped ? 'flipped' : ''}`}
          onMouseEnter={handleCardOneFlip}
          onMouseLeave={handleCardOneFlip}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2 className="text-[35px] flex justify-center items-center p-4 font-bold h-[400px] leading-10">People Transformation</h2>
            </div>
            <div className="flip-card-back">
              <p className="p-4 flex justify-center items-center h-[400px] lg:text-[22px]">Improving personal and professional skills of the workforce in order to drive change in the company. This can be achieved by helping employees to learn by doing</p>
            </div>
          </div>
        </div>
  
        {/* Card Two */}
        <div
          className={`flip-card lg:w-[750px] block mx-auto lg:mt-[80px] mb-[30px] lg:mb-[80px] ${isCardTwoFlipped ? 'flipped' : ''}`}
          onMouseEnter={handleCardTwoFlip}
          onMouseLeave={handleCardTwoFlip}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2 className="text-[35px] flex justify-center items-center p-4 font-bold h-[400px] leading-10">Process Transformation</h2>
            </div>
            <div className="flip-card-back">
              <p className="p-4 flex justify-center items-center h-[400px] lg:text-[22px]">Implementation of Lean Six Sigma and Kaizen to reduce unnecessary processes and improve value addition at each level of operation.</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FlipCard;
import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./SEED.css"

const SEED = () => {
  const [progressValues, setProgressValues] = useState({
    'Production Increase': 0,
    'Cost Reduction': 0,
    'Defect Rate Reduction': 0,
    'Over Time Hour Reduction': 0,
  });

  const progressConfig = [
    {
      label: 'Production Increase',
      percent: 36,
      colorSlice: '#E91E63',
      fontColor: '#F50057',
      fontSize: '30px',
      fontWeight: 800,
    },
    {
      label: 'Cost Reduction',
      percent: 30,
      colorSlice: '#2196F3',
      fontColor: '#1976D2',
      fontSize: '30px',
      fontWeight: 800,
    },
    {
      label: 'Defect Rate Reduction',
      percent: 38,
      colorSlice: '#4CAF50',
      fontColor: '#388E3C',
      fontSize: '30px',
      fontWeight: 800,
    },
    {
      label: 'Over Time Hour Reduction',
      percent: 44,
      colorSlice: '#FF9800',
      fontColor: '#F57C00',
      fontSize: '30px',
      fontWeight: 800,
    },
  ];

  const progressSectionRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = progressSectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
          animateProgress();
        } else {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
          }
        }
      }
    };

    const animateProgress = () => {
      setProgressValues((prevValues) => {
        return {
          'Production Increase': 0,
          'Cost Reduction': 0,
          'Defect Rate Reduction': 0,
          'Over Time Hour Reduction': 0,
        };
      });

      const startTimestamp = performance.now();

      const animationStep = (timestamp) => {
        const progress = timestamp - startTimestamp;
        const duration = 1000; // Animation duration in milliseconds

        setProgressValues((prevValues) => {
          return {
            'Production Increase': Math.min((progress / duration) * progressConfig[0].percent, progressConfig[0].percent),
            'Cost Reduction': Math.min((progress / duration) * progressConfig[1].percent, progressConfig[1].percent),
            'Defect Rate Reduction': Math.min((progress / duration) * progressConfig[2].percent, progressConfig[2].percent),
            'Over Time Hour Reduction': Math.min((progress / duration) * progressConfig[3].percent, progressConfig[3].percent),
          };
        });

        if (progress < duration) {
          animationRef.current = requestAnimationFrame(animationStep);
        }
      };

      animationRef.current = requestAnimationFrame(animationStep);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  return (
    <div className='bg-[#002060]'>
      <div className="container mx-auto" data-aos="fade-up">
        <div className="p-10">
          <h1 className="text-center seedText text-[35px] lg:text-[50px] text-white ">SEED</h1>
          <p className="lg:w-[850px] block mx-auto text-center font-medium text-white">
            SEED is Sustainable Efficiency and Employee Development. It is our specialized solution offering to help businesses enhance the 4 Ps – Processes, People, Product, and Purpose. We offer customized strategies to organizations to help them achieve enhanced productivity and reduced costs. We have successfully transformed businesses across industries to achieve operational excellence with SEED.
          </p>
          <div ref={progressSectionRef} className="flex flex-col items-center lg:flex-row justify-between mt-[50px] mb-[50px]">
            {progressConfig.map((config, index) => (
              <div key={index} className="relative">
                <div style={{ width: '250px', height: '250px' }}>
                  <CircularProgressbar
                    value={progressValues[config.label]}
                    text={`${Math.round(progressValues[config.label])}%`}
                    styles={buildStyles({
                      pathColor: config.colorSlice,
                      textColor: config.fontColor,
                      textSize: config.fontSize,
                      fontWeight: config.fontWeight,
                    })}
                  />
                </div>
                <p className="text-center clircleHeading mt-[10px] mb-[80px] lg:mb-[0] text-white">{config.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEED;

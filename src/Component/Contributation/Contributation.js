import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Contributation.css"

const Contrabution = () => {
    const [progressValues, setProgressValues] = useState({
        'Professional Training': 0,
        'Training Seasons': 0,
        'Training Hours': 0,
    });

    const progressConfig = [
        {
            label: 'Professional Training',
            percent: 65, // Adjust the percentage as needed
            value: '30,000+',
            colorSlice: '#E91E63',
            fontColor: '#F50057',
            fontSize: '30px',
            fontWeight: 800,
        },
        {
            label: 'Training Seasons',
            percent: 50, // Adjust the percentage as needed
            value: '2,000+',
            colorSlice: '#2196F3',
            fontColor: '#1976D2',
            fontSize: '30px',
            fontWeight: 800,
        },
        {
            label: 'Training Hours',
            percent: 85, // Adjust the percentage as needed
            value: '60,000+',
            colorSlice: '#4CAF50',
            fontColor: '#388E3C',
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
                    'Professional Training': 0,
                    'Training Seasons': 0,
                    'Training Hours': 0,
                };
            });

            const startTimestamp = performance.now();

            const animationStep = (timestamp) => {
                const progress = timestamp - startTimestamp;
                const duration = 1000; // Animation duration in milliseconds

                setProgressValues((prevValues) => {
                    return {
                        'Professional Training': Math.min((progress / duration) * progressConfig[0].percent, progressConfig[0].percent),
                        'Training Seasons': Math.min((progress / duration) * progressConfig[1].percent, progressConfig[1].percent),
                        'Training Hours': Math.min((progress / duration) * progressConfig[2].percent, progressConfig[2].percent),
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
        <div className='trainingBg'>
            <div className="container mx-auto" data-aos="fade-up">
                <div className="p-10">
                    <h1 className="text-center seedText text-[35px] lg:text-[50px] text-white ">Contribution To <br />
                        Training Industry</h1>

                    <div ref={progressSectionRef} className="flex flex-col items-center lg:flex-row justify-between mt-[50px] mb-[50px]">
                        {progressConfig.map((config, index) => (
                            <div key={index} className="relative">
                                <div style={{ width: '300px', height: '300px' }}>
                                    <CircularProgressbar
                                        value={progressValues[config.label]}
                                        text={config.value}
                                        styles={buildStyles({
                                            pathColor: config.colorSlice,
                                            textColor: config.fontColor,
                                            textSize: '20px', // Adjust the font size here
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
    )
};

export default Contrabution;

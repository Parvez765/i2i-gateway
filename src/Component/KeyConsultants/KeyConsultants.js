import React from 'react';
import "./KeyConsultants.css"

const KeyConsultants = () => {
    return (
        <div className='container mx-auto px-8 lg:p-0'>
            <h1 className='text-center text-[35px] lg:text-[50px] text-[#002060] font-bold p-4 lg:pt-10 pb-10'>KeyConsultants</h1>
            <div className='' >
                <div className='flex flex-col justify-center items-center' data-aos="fade-right">
                    <img src="https://i.ibb.co/kcSbQt9/Vineet-Sethi.jpg" alt="Mind Works Owner Introduction" />
                    <p className='lg:w-[1400px] lg:text-[22px] text-center mt-[70px] mb-[70px]'>
                        Vineet Sethi is a renowned business coach and CI consultant with over two decades of experience in operational excellence. He has worked with companies across industries around the globe to help them achieve continuous improvement and build a culture of winning and success. An industry leader in driving change, Vineet has worked with teams across the entire value chain to align the objectives of the company to each individual team. A garment industry maestro, he now works with organizations across industries to provide customized solutions through strategy development and deployment.



                        Over the years, apart from technical knowledge, he has also brought in the principles of Psychology in business. He is a certified NLP Coach which enables him to program a person’s mind to inculcate positive behaviour patterns. Vineet is a master trainer and is known for bringing each training session to life through innovative teaching methodologies.
                    </p>
                </div>
                
                <div className='flex flex-col justify-center items-center' data-aos="fade-right">
                    <img src="https://i.ibb.co/KGmYC7N/Naijur-Rahman-2-300x300.jpg" className='clientImages' alt="Mind Works Owner Introduction" />
                    <p className='lg:w-[1400px] lg:text-[22px] text-center mt-[70px] mb-[70px]'>
                        Naijur Rahman is a seasoned operational excellence consultant. He is one of the most well-known trainers in Bangladesh in the Continuous Improvement and Lean Six Sigma field. His expertise lies in improving the productivity and efficiency of business processes through the application of new-age solutions and people management. In over 16 years of work experience of holding senior positions, Naijur has not only gone extensive training in lean management but has learnt the industry best practices through experience. As the Country Chief of Mindworks, Naijur now delivers his knowledge and expertise to organizations in helping them achieve operational excellence and continuous improvement.

                        Naijur is an avid speaker and is a renowned motivational speaker in Bangladesh. His love for teaching is translated into enriching training sessions and inspiring motivational talks that build personal excellence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KeyConsultants;
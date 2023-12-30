import React from 'react';
import SectionHeading from '../../Component/SectionHeading/SectionHeading';
import banner from "../../assets/banner/about.png"
import SectionBanner from '../../Component/SectionBanner/SectionBanner';
import GalleryImage from '../../Component/GalleryImage/GalleryImage';

const Gallery = () => {
    return (
       <div>
        <SectionBanner backgroundImage={banner} title={"Gallery"}/>
        <SectionHeading title={"Our Gallery"}/>
        <GalleryImage/>
       </div>
    );
};

export default Gallery;
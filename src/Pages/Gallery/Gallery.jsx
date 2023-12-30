import React from 'react';
import galleryImageOne from "../../assets/gallery/imgOne.jpg"
import galleryImageTwo from "../../assets/gallery/imgTwo.jpg"
import galleryImageThree from "../../assets/gallery/imgThree.jpg"
import galleryImageFour from "../../assets/gallery/imgFour.jpg"
import galleryImageFive from "../../assets/gallery/imgFive.jpg"
import galleryImageSix from "../../assets/gallery/imgSix.jpg"
import galleryImageSeven from "../../assets/gallery/imgSeven.jpg"
import galleryImageEight from "../../assets/gallery/imgEight.jpg"
import galleryImageNine from "../../assets/gallery/imgNine.jpg"
import galleryImageTen from "../../assets/gallery/imgTen.jpg"
import galleryImageEleven from "../../assets/gallery/imgEleven.jpg"
import galleryImageTwelve from "../../assets/gallery/imgTwelve.jpg"
import SectionBanner from '../../Component/SectionBanner/SectionBanner';
import banner from "../../assets/banner/about.png"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import SectionHeading from '../../Component/SectionHeading/SectionHeading';

const galleryImageData = [
    {
        id : 1,
        img : galleryImageOne
    },
    {
        id : 2,
        img : galleryImageTwo
    },
    {
        id : 3,
        img : galleryImageThree
    },
    {
        id : 4,
        img : galleryImageFour
    },
    {
        id : 5,
        img : galleryImageFive
    },
    {
        id : 6,
        img : galleryImageSix
    },
    {
        id : 7,
        img : galleryImageSeven
    },
    {
        id : 8,
        img : galleryImageEight
    },
    {
        id : 9,
        img : galleryImageNine
    },
    {
        id : 10,
        img : galleryImageTen
    },
    {
        id : 11,
        img : galleryImageEleven
    },
    {
        id : 12,
        img : galleryImageTwelve
    }
]

const Gallery = () => {
    return (
       <div>
        <SectionBanner backgroundImage={banner} title={"Gallery"}/>
                <SectionHeading title={"Our Gallery"}/>
            <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[20px] mt-[16px]'>
                {
                    galleryImageData?.map(galleryImage => <>
                        {
                        <PhotoProvider key={galleryImage.id}>
                            <PhotoView src={galleryImage.img}>
                                <img src={galleryImage.img} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    }
                    </>)
                }
            </div>
       </div>
    );
};

export default Gallery;
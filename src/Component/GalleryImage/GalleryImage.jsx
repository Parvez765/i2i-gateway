import React from 'react';
import { galleryData } from '../../data/galleryData';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const GalleryImage = () => {
    return (
        <div>
             <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[20px] mt-[16px]'>
                {
                    galleryData?.map(galleryImage => <>
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

export default GalleryImage;
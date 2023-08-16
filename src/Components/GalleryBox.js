import React from 'react';
import galerybox from './gallerybox.scss'
const GalleryBox = ({ imageUrl, title }) => {
    return (
        <div className="gallery-box">
            <img src={imageUrl} alt={title} />
            <p className={'gallery-text'}>{title}</p>
        </div>
    );
};

export default GalleryBox;

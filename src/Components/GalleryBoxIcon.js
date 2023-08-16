import React from 'react';
import './gallerybox.scss';

const GalleryBox = ({ icon, title }) => {
    return (
        <div className="gallery-box">
                <span>{icon}</span>
            <p className="gallery-text">{title}</p>
        </div>
    );
};

export default GalleryBox;

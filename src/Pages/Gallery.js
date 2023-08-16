import React from 'react';
import GalleryBoxIcon from '../Components/GalleryBoxIcon';
import { FaDollarSign, FaProductHunt } from 'react-icons/fa';
import gallery from './gallery.scss'
import {MdHighQuality} from "react-icons/md";
import {TbTruckDelivery} from "react-icons/tb";
import {BsPersonCheck} from "react-icons/bs";
import {GrSecure} from "react-icons/gr";
import {useNavigate} from "react-router-dom";

const Gallery = () => {

    const navigate = useNavigate();

    const galleryItems = [
        { icon: <FaDollarSign />, title: 'Best Prices', id: 1 },
        { icon: <MdHighQuality />, title: 'Proven Quality', id: 2 },
        { icon: <TbTruckDelivery />, title: 'Fast Delivery', id: 3 },
        { icon: <BsPersonCheck />, title: 'Kind Attitude', id: 4 },
        { icon: <FaProductHunt />, title: 'Wide Variety', id: 5 },
        { icon: <GrSecure />, title: 'Secure Shopping', id: 6 }
    ];

    return (
        <div className="gallery-container" onClick={() => navigate('/')}>
            {galleryItems.map((item) => (
                <GalleryBoxIcon key={item.id} icon={item.icon} title={item.title} />
            ))}
        </div>
    );
};

export default Gallery;

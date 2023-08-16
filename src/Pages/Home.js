import React from 'react';
import home from './home.scss'
import GalleryBox from "../Components/GalleryBox";
import clothes from '../Assets/clothes.jpg'
import periphery from '../Assets/periphery.jpg'
import watches from '../Assets/watches.jpg'
import mobiles from '../Assets/mobiles.jpg'
import {useNavigate} from "react-router-dom";
const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home-container" onClick={() => navigate('/')}>
            <div className="text">
                Discover the wonders of our exceptional e-commerce platform!
            </div>
            <div className="gallery-boxes">
               <GalleryBox imageUrl={clothes}  title={'Clothes'} />
                <GalleryBox imageUrl={periphery} title={'Periphery'} />
                <GalleryBox imageUrl={watches} title={'Watches'} />
                <GalleryBox imageUrl={mobiles} title={'Mobile Phones'} />
            </div>
            <div className="text">
                Your dream purchase is just a click away!
            </div>
        </div>
    );
};

export default Home;

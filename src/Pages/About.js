import React from 'react';
import './about.scss';
import {useNavigate} from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    return (
            <div className="about-container">
                <h1 onClick={() => navigate('/')}>About Us</h1>
                <p>Welcome to  Slack E-Commerce Platform! We're your one-stop shop for quality products at
                    unbeatable prices. With a curated selection spanning various categories, we're committed
                    to delivering the best value to you.</p>
            </div>
    );
};

export default About;

import React from 'react';
import headers from './header.scss'
import logo from '../Assets/logo.jpg'

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <img  src={logo} alt={'logo'} className="logo" />
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Gallery</li>
                    <li className="nav-item">Contact us</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header

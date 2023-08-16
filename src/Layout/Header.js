import React from 'react';
import headers from './header.scss'
import logo from '../Assets/logo.jpg'
import Menu from "../Components/Menu";

const Header = () => {
    const navigateTo = (route) => {
        console.log(`Navigating to: ${route}`);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <img  src={logo} alt={'logo'} className="logo" />
                <Menu navigateTo={navigateTo} />
            </nav>
        </header>
    );
};

export default Header

import React from 'react';
import headers from './header.scss'
import logo from '../Assets/logo.jpg'
import Menu from "../Components/Menu";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <img  src={logo} alt={'logo'} className="logo" />
                <Menu />
            </nav>
        </header>
    );
};

export default Header

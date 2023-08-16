import React, {useCallback, useEffect, useMemo, useState} from 'react';
import header from '../Layout/header.scss';
import {BiMenu} from "react-icons/bi";
import {NavLink} from "react-router-dom";

const Menu = ({navigateTo}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        setIsMenuOpen(false)
    }, [isMobile]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };
    const handleMenuItemClick = (route) => {
        navigateTo(route);
    };

    const navItems = (
        <ul className="nav-list">
            <li className="nav-item">
                <NavLink to="/home"  onClick={() => handleMenuItemClick('/home')} >Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about"  onClick={() => handleMenuItemClick('/about')}>About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/gallery" onClick={() => handleMenuItemClick('/gallery')}>Gallery</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" onClick={() => handleMenuItemClick('/contact')}>Contact</NavLink>
            </li>
        </ul>
    );


    return (
        <div>
            {!isMobile ? (
                navItems
            ) : (
                <BiMenu onClick={toggleMenu} size={40} className="dropdown-icon white-icon" />
            )}
            {isMenuOpen && (
                <ul className={'nav-list'}>
                    {navItems.props.children}
                </ul>
            )}
        </div>
    );
};

export default Menu;

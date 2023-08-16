import React, {useCallback, useEffect, useMemo, useState} from 'react';
import header from '../Layout/header.scss';
import { GrMenu } from 'react-icons/gr';
import {BiMenu} from "react-icons/bi";

const Menu = () => {
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

    const navItems = (
        <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Gallery</li>
            <li className="nav-item">Contact</li>
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

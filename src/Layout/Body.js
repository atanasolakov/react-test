import React from 'react';
import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";

const Body = () => {
    return (
       <>
                <Home/>
                <Gallery />
                <ContactUs />
                <About />
       </>
    );
};

export default Body;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Layout/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import FakeStore from "./Pages/FakeStore";

const router = createBrowserRouter([
    { path: '/', element : <App /> },
    { path: '/home', element : <Home /> },
    { path: '/gallery', element : <Gallery /> },
    { path: '/contact', element : <ContactUs /> },
    { path: '/about', element : <About /> },
    { path: '/fakestore', element : <FakeStore /> },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <RouterProvider router={router} >
    <App />
      </RouterProvider>
  </React.StrictMode>
);

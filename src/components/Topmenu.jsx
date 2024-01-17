import React from 'react';
import { Link } from "react-router-dom";

const Topmenu=()=>{
    return (
            <nav className="header__nav__menu mobile-menu">
                <ul>
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <a href="/">Pages</a>
                    </li>
                        <ul className="dropdown">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/blog-details">Blog Details</Link>
                            </li>
                        </ul>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav >
    );
};

export default Topmenu;
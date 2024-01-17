import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <a href="/">
                                <img src="img/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="header__nav__option">
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
                                        <li>
                                            <Link to="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog-details">Blog Details</Link>
                                        </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header__nav__social">
                                <a href="/">
                                    <i className="fa fa-facebook"/>
                                </a>
                                <a href="/">
                                    <i className="fa fa-twitter"/>
                                </a>
                                <a href="/">
                                    <i className="fa fa-dribbble"/>
                                </a>
                                <a href="/">
                                    <i className="fa fa-instagram"/>
                                </a>
                                <a href="/">
                                    <i className="fa fa-youtube-play"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div id="mobile-menu-wrap"></div>
            </div>
        </header>
    );
};

export default Header;
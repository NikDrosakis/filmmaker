import React from "react";
const Main = () => {
    return  <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                    </div>
                </div>
                <div class="col-lg-10">
                    <div class="header__nav__option">
                        <nav class="header__nav__menu mobile-menu">
                            <ul>
                                <li class="active"><a href="./index.html">Home</a></li>
                                <li><a href="./about.html">About</a></li>
                                <li><a href="./portfolio.html">Portfolio</a></li>
                                <li><a href="./services.html">Services</a></li>
                                <li><a href="/">Pages</a>
                                    <ul class="dropdown">
                                        <li><a href="./about.html">About</a></li>
                                        <li><a href="./portfolio.html">Portfolio</a></li>
                                        <li><a href="./blog.html">Blog</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.jsx">Contact</a></li>
                            </ul>
                        </nav>
                        <div class="header__nav__social">
                            <a href="/"><i class="fa fa-facebook"></i></a>
                            <a href="/"><i class="fa fa-twitter"></i></a>
                            <a href="/"><i class="fa fa-dribbble"></i></a>
                            <a href="/"><i class="fa fa-instagram"></i></a>
                            <a href="/"><i class="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>;
};

export default Main;
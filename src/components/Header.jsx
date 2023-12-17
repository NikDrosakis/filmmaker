import React from "react";
import Topmenu from "../components/Topmenu";
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <a href="./index.html">
                                <img src="img/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="header__nav__option">
<Topmenu/>
                            <div className="header__nav__social">
                                <a href="#">
                                    <i className="fa fa-facebook"/>
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter"/>
                                </a>
                                <a href="#">
                                    <i className="fa fa-dribbble"/>
                                </a>
                                <a href="#">
                                    <i className="fa fa-instagram"/>
                                </a>
                                <a href="#">
                                    <i className="fa fa-youtube-play"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu-wrap"/>
            </div>
        </header>
    );
};

export default Header;
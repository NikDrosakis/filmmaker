import React, { useEffect } from 'react';
import mixitup from 'mixitup'

const PortfolioSection = () => {
    // Just use an useEffect hook like that
    useEffect(() => {
        mixitup(".portfolio__gallery", {
            selectors: {
                target: ".portfolio__item",
            },
            animation: {
                duration: 500
            }
        });
    }, []);
    return (
        <section className="portfolio spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="portfolio__filter">
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".branding">Branding</li>
                            <li data-filter=".digital-marketing">Digital marketing</li>
                            <li data-filter=".web">Web</li>
                            <li data-filter=".photography">Photography</li>
                            <li data-filter=" .ecommerce">eCommerce</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio__gallery">
                    <div className="col-lg-4 col-md-6 col-sm-6 mix branding">
                        <div className="portfolio__item">
                            <div className="portfolio__item__video set-bg" data-setbg="img/portfolio/portfolio-1.jpg">
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                   className="play-btn video-popup"><i
                                    className="fa fa-play"></i></a>
                            </div>
                            <div className="portfolio__item__text">
                                <h4>VIP Auto Tires & Service</h4>
                                <ul>
                                    <li>eCommerce</li>
                                    <li>Magento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mix digital-marketing">
                        <div className="portfolio__item">
                            <div className="portfolio__item__video set-bg" data-setbg="img/portfolio/portfolio-2.jpg">
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                   className="play-btn video-popup"><i
                                    className="fa fa-play"></i></a>
                            </div>
                            <div className="portfolio__item__text">
                                <h4>VIP Auto Tires & Service</h4>
                                <span>Photography</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mix web">
                        <div className="portfolio__item">
                            <div className="portfolio__item__video set-bg" data-setbg="img/portfolio/portfolio-3.jpg">
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                   className="play-btn video-popup"><i
                                    className="fa fa-play"></i></a>
                            </div>
                            <div className="portfolio__item__text">
                                <h4>VIP Auto Tires & Service</h4>
                                <ul>
                                    <li>eCommerce</li>
                                    <li>Magento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mix photography">
                        <div className="portfolio__item">
                            <div className="portfolio__item__video set-bg" data-setbg="img/portfolio/portfolio-4.jpg">
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                   className="play-btn video-popup"><i
                                    className="fa fa-play"></i></a>
                            </div>
                            <div className="portfolio__item__text">
                                <h4>VIP Auto Tires & Service</h4>
                                <ul>
                                    <li>eCommerce</li>
                                    <li>Magento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mix ecommerce">
                        <div className="portfolio__item">
                            <div className="portfolio__item__video set-bg" data-setbg="img/portfolio/portfolio-5.jpg">
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                   className="play-btn video-popup"><i
                                    className="fa fa-play"></i></a>
                            </div>
                            <div className="portfolio__item__text">
                                <h4>VIP Auto Tires & Service</h4>
                                <span>Photography</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mix branding">
                        <div className="portfolio__item">
                            <div className="portfolio__item__video set-bg" data-setbg="img/portfolio/portfolio-6.jpg">
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                   className="play-btn video-popup"><i
                                    className="fa fa-play"></i></a>
                            </div>
                            <div className="portfolio__item__text">
                                <h4>VIP Auto Tires & Service</h4>
                                <ul>
                                    <li>eCommerce</li>
                                    <li>Magento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mix web">
                        <div className="portfolio__item">
                            <div className="portfolio__item__video set-bg" data-setbg="img/portfolio/portfolio-7.jpg">
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                   className="play-btn video-popup"><i
                                    className="fa fa-play"></i></a>
                            </div>
                            <div className="portfolio__item__text">
                                <h4>VIP Auto Tires & Service</h4>
                                <ul>
                                    <li>eCommerce</li>
                                    <li>Magento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mix photography">
                        <div className="portfolio__item">
                            <div className="portfolio__item__video set-bg" data-setbg="img/portfolio/portfolio-8.jpg">
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                   className="play-btn video-popup"><i
                                    className="fa fa-play"></i></a>
                            </div>
                            <div className="portfolio__item__text">
                                <h4>VIP Auto Tires & Service</h4>
                                <span>Photography</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mix ecommerce">
                        <div className="portfolio__item">
                            <div className="portfolio__item__video set-bg" data-setbg="img/portfolio/portfolio-9.jpg">
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                   className="play-btn video-popup"><i
                                    className="fa fa-play"></i></a>
                            </div>
                            <div className="portfolio__item__text">
                                <h4>VIP Auto Tires & Service</h4>
                                <ul>
                                    <li>eCommerce</li>
                                    <li>Magento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pagination__option">
                            <a href="#" className="arrow__pagination left__arrow"><span
                                className="arrow_left"></span> Prev</a>
                            <a href="#" className="number__pagination">1</a>
                            <a href="#" className="number__pagination">2</a>
                            <a href="#" className="arrow__pagination right__arrow">Next <span
                                className="arrow_right"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};

export default PortfolioSection;
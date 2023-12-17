import React from 'react';
import OwlCarousel from 'react-owl-carousel';
const HeroSection = () => {
    const options={
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    };
    return (
    <section className="hero">
        <OwlCarousel className="owl-dots hero__slider owl-carousel">
            <div className="hero__item set-bg" data-setbg="img/hero/hero-1.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero__text">
                                <span>For website and video editing</span>
                                <h2>Videographer’s Portfolio</h2>
                                <a href="#" className="primary-btn">
                                    See more about us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
        <div className="hero__item set-bg" data-setbg="img/hero/hero-1.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero__text">
                            <span>For website and video editing</span>
                            <h2>Videographer’s Portfolio</h2>
                            <a href="#" className="primary-btn">
                                See more about us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
};
export default HeroSection;
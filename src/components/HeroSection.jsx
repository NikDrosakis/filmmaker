import React, { useEffect } from 'react';
const HeroSection = () => {
    useEffect(() => {
        // This useEffect mimics the document.ready behavior
        const dotElements = document.querySelectorAll('.hero__slider .owl-dot');
        dotElements.forEach((dot, index) => {
            const dotIndex = index + 1;
            if (dotIndex < 10) {
                dot.innerHTML = '0' + dotIndex;
            } else {
                dot.innerHTML = dotIndex;
            }
        });
    }, []); // Run this effect only once when the component mounts

    return (
    <section className="hero">
        <div className="hero__slider owl-carousel">
            <div className="hero__item set-bg" data-setbg="img/hero/hero-1.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero__text">
                                <span>For website and video editing</span>
                                <h2>Videographer’s Portfolio</h2>
                                <a href="/" className="primary-btn">
                                    See more about us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
};
export default HeroSection;
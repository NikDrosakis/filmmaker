import React from 'react';
const HeroSection = () => {
    return (
    <section className="hero">
        <div className="hero__slider owl-carousel">
            <div className="hero__item set-bg" style={{ backgroundImage:`url("/img/hero/hero-1.jpg")` }}>
                <div className="container" style={{
                    position: "absolute", top: "50px", left: "50px"
                }}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero__text">
                                <span>For a professional website and video editing</span>
                                <h2>Film Portfolio</h2>
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
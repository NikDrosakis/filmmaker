import React from "react";
const ServicesSection = () => {
    const path = window.location.pathname.split('/')[1];
return (
    <section className="services spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="services__title">
                        <div className="section-title">
                            <span>{ path }</span>
                            <h2>What We do?</h2>
                        </div>
                        <p>
                            If you hire a videographer of our team you will get a video
                            professional to make a custom video for your business and, once the
                            project is over.
                        </p>
                        <a href="/" className="primary-btn">
                            View all services
                        </a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="img/icons/si-1.png" alt=""/>
                                </div>
                                <h4>Motion graphics</h4>
                                <p>
                                    Whether you’re halfway through the editing process, or you
                                    haven’t even started, our post production services can put the
                                    finishing touches.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="img/icons/si-2.png" alt=""/>
                                </div>
                                <h4>Scriptwriting and editing</h4>
                                <p>
                                    Whether you’re halfway through the editing process, or you
                                    haven’t even started, our post production services can put the
                                    finishing touches.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="img/icons/si-3.png" alt=""/>
                                </div>
                                <h4>Video distribution</h4>
                                <p>
                                    Whether you’re halfway through the editing process, or you
                                    haven’t even started, our post production services can put the
                                    finishing touches.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="img/icons/si-4.png" alt=""/>
                                </div>
                                <h4>Video hosting</h4>
                                <p>
                                    Whether you’re halfway through the editing process, or you
                                    haven’t even started, our post production services can put the
                                    finishing touches.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

);
};

export default ServicesSection;
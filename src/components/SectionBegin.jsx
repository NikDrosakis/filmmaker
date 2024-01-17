import React from "react";
const SectionBegin = () => {
    return (
        <section className="counter">
            <div className="container">
                <div className="counter__content">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__text">
                                    <img src="img/icons/ci-1.png" alt=""/>
                                    <h2 className="counter_num">230</h2>
                                    <p>Compled Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item second__item">
                                <div className="counter__item__text">
                                    <img src="img/icons/ci-2.png" alt=""/>
                                    <h2 className="counter_num">1068</h2>
                                    <p>Happy clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item third__item">
                                <div className="counter__item__text">
                                    <img src="img/icons/ci-3.png" alt=""/>
                                    <h2 className="counter_num">230</h2>
                                    <p>Perspective clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item four__item">
                                <div className="counter__item__text">
                                    <img src="img/icons/ci-4.png" alt=""/>
                                    <h2 className="counter_num">230</h2>
                                    <p>Compled Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionBegin;
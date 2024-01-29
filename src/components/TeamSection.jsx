import React from "react";
const TeamSection = () => {
    return (
        <section className="team spad set-bg"  style={{ backgroundImage:`url("/img/team-bg.jpg")`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title team__title">
                            <span>Nice to meet</span>
                            <h2>OUR Team</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                        <div className="team__item set-bg" style={{ backgroundImage:`url("/img/team-1.jpg")`}}>
                            <div className="team__item__text">
                                <h4>AMANDA STONE</h4>
                                <p>Videographer</p>
                                <div className="team__item__social">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-dribbble"></i></a>
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                        <div className="team__item team__item--second set-bg" style={{ backgroundImage:`url("/img/team-2.jpg")`}}>
                            <div className="team__item__text">
                                <h4>AMANDA STONE</h4>
                                <p>Videographer</p>
                                <div className="team__item__social">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-dribbble"></i></a>
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                        <div className="team__item team__item--third set-bg" style={{ backgroundImage:`url("/img/team-3.jpg")`}}>
                            <div className="team__item__text">
                                <h4>AMANDA STONE</h4>
                                <p>Videographer</p>
                                <div className="team__item__social">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-dribbble"></i></a>
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                        <div className="team__item team__item--four set-bg" style={{ backgroundImage:`url("/img/team-4.jpg")`}}>
                            <div className="team__item__text">
                                <h4>AMANDA STONE</h4>
                                <p>Videographer</p>
                                <div className="team__item__social">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-dribbble"></i></a>
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 p-0">
                        <div className="team__btn">
                            <a href="/" className="primary-btn">Meet Our Team</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default TeamSection;
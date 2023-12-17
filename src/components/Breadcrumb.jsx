import React from "react";
const Breadcrumb = () => {
    return (
        <div className="breadcrumb-option spad set-bg" data-setbg="img/breadcrumb-bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>About us</h2>
                            <div className="breadcrumb__links">
                                <a href="/">Home</a>
                                <span>About</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
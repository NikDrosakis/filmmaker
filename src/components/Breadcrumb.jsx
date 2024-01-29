import React from "react";
const Breadcrumb = () => {
    const path = window.location.pathname.split('/')[1];
    return (
   <div className="breadcrumb-option spad" style={{ backgroundImage:`url("/img/breadcrumb-bg.jpg")`}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                    <h2>{ path }</h2>
                    <div className="breadcrumb__links">
                        <a href="/">Home</a>
                        <span>{path}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
    ;
};

export default Breadcrumb;
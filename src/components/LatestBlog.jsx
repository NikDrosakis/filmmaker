import React from "react";
import LatestBlogCarousel from "../components/LatestBlogCarousel";
const LatestBlog = () => {
    return (
        <section className="latest spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title center-title">
                            <span>Our Blog</span>
                            <h2>Blog Update</h2>
                        </div>
                    </div>
                </div>
<LatestBlogCarousel/>
                </div>
        </section>
    );
}
export default LatestBlog;
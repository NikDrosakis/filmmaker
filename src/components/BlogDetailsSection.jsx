import React from "react";
const BlogDetailsSection = () => {
    return (
        <div className="blog-details spad">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="blog__details__content">
                            <div className="blog__details__text">
                                <p>Videos with a wow factor are always more shareable than those without it. The wow factor
                                    is hard to define, but it generally refers to any content that makes viewers think,
                                    “Wow!” For example, consider those viral videos of athletes making insanely difficult
                                    basketball trick shots, such as shooting a basket while doing a backwards flip on a
                                    trampoline.</p>
                                <p>That’s the kind of catchy content that makes people want to share it with their friends.
                                    With a little clever marketing, you can put that wow factor to work for your business’
                                    videos.</p>
                            </div>
                            <div className="blog__details__quote">
                                <p>Create horizontal, square and vertical videos that are ready to be exported to your
                                    Instagram video stories and posts. Perfect for any social network!</p>
                                <h6>Max Desmarais</h6>
                                <i className="fa fa-quote-right"></i>
                            </div>
                            <div className="blog__details__desc">
                                <p>An average Internet user watches about 1.5 hours of online video every day. This means
                                    that video can be a powerful marketing tool for getting your message before the eyes of
                                    millions of people. However, not all videos are created equal.</p>
                                <p>Some of them are inherently more shareable on social media than others. Here’s a quick
                                    look at how to make users want to share your videos on social media.</p>
                            </div>
                            <div className="blog__details__tags">
                                <span><i className="fa fa-tag"></i> Tag:</span>
                                <a href="/">Wedding</a>
                                <a href="/">Event</a>
                                <a href="/">Couple</a>
                            </div>
                            <div className="blog__details__option">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <a href="/" className="blog__details__option__item">
                                            <h5><i className="fa fa-angle-left"></i> Previous posts</h5>
                                            <div className="blog__details__option__item__img">
                                                <img src="img/blog/prev.jpg" alt=""/>
                                            </div>
                                            <div className="blog__details__option__item__text">
                                                <h6>Looking for Music & Sounds for my new Android...</h6>
                                                <span>Nov 27, 2019</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <a href="/" className="blog__details__option__item blog__details__option__item--right">
                                            <h5>Previous posts <i className="fa fa-angle-right"></i></h5>
                                            <div className="blog__details__option__item__img">
                                                <img src="img/blog/next.jpg" alt=""/>
                                            </div>
                                            <div className="blog__details__option__item__text">
                                                <h6>Looking for Music & Sounds for my new Android...</h6>
                                                <span>Nov 27, 2019</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details__recent">
                                <h4>Recent Posts</h4>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="blog__details__recent__item">
                                            <img src="img/blog/ri-1.jpg" alt=""/>
                                            <h5>What are the steps of a body lift procedure?</h5>
                                            <span>Dec 06, 2019</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="blog__details__recent__item">
                                            <img src="img/blog/ri-2.jpg" alt=""/>
                                            <h5>What are the steps of a body lift procedure?</h5>
                                            <span>Dec 06, 2019</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="blog__details__recent__item">
                                            <img src="img/blog/ri-3.jpg" alt=""/>
                                            <h5>How to shop for a cosm surgery procedure</h5>
                                            <span>Dec 06, 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details__comment">
                                <h4>Leave a comment</h4>
                                <form action="#">
                                    <div className="input__list">
                                        <input type="text" placeholder="Name"/>
                                            <input type="text" placeholder="Email"/>
                                                <input type="text" placeholder="Website"/>
                                    </div>
                                    <textarea placeholder="Comment"></textarea>
                                    <button type="submit" className="site-btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsSection;
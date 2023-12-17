import React from 'react';
import OwlCarousel from 'react-owl-carousel';
const LatestBlogCarousel = () => {
    const options={
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    }
    return (
        <OwlCarousel className='latest__slider owl-carousel'>
            <div className="col-lg-4">
                <div className="blog__item latest__item">
                    <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                    <ul>
                        <li>Jan 03, 2020</li>
                        <li>05 Comment</li>
                    </ul>
                    <p>
                        We recently launched a new website for a Vital client and wanted to
                        share some of the cool features we were able...
                    </p>
                    <a href="#">
                        Read more <span className="arrow_right"></span>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="blog__item latest__item">
                    <h4>Bumper Ads: How to Tell a Story in 6 Seconds</h4>
                    <ul>
                        <li>Jan 03, 2020</li>
                        <li>05 Comment</li>
                    </ul>
                    <p>
                        We recently launched a new website for a Vital client and wanted to
                        share some of the cool features we were able...
                    </p>
                    <a href="#">
                        Read more <span className="arrow_right"></span>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="blog__item latest__item">
                    <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                    <ul>
                        <li>Jan 03, 2020</li>
                        <li>05 Comment</li>
                    </ul>
                    <p>
                        We recently launched a new website for a Vital client and wanted to
                        share some of the cool features we were able...
                    </p>
                    <a href="#">
                        Read more <span className="arrow_right"></span>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="blog__item latest__item">
                    <h4>Bumper Ads: How to Tell a Story in 6 Seconds</h4>
                    <ul>
                        <li>Jan 03, 2020</li>
                        <li>05 Comment</li>
                    </ul>
                    <p>
                        We recently launched a new website for a Vital client and wanted to
                        share some of the cool features we were able...
                    </p>
                    <a href="#">
                        Read more <span className="arrow_right"></span>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="blog__item latest__item">
                    <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                    <ul>
                        <li>Jan 03, 2020</li>
                        <li>05 Comment</li>
                    </ul>
                    <p>
                        We recently launched a new website for a Vital client and wanted to
                        share some of the cool features we were able...
                    </p>
                    <a href="#">
                        Read more <span className="arrow_right"></span>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="blog__item latest__item">
                    <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                    <ul>
                        <li>Jan 03, 2020</li>
                        <li>05 Comment</li>
                    </ul>
                    <p>
                        We recently launched a new website for a Vital client and wanted to
                        share some of the cool features we were able...
                    </p>
                    <a href="#">
                        Read more <span className="arrow_right"></span>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="blog__item latest__item">
                    <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                    <ul>
                        <li>Jan 03, 2020</li>
                        <li>05 Comment</li>
                    </ul>
                    <p>
                        We recently launched a new website for a Vital client and wanted to
                        share some of the cool features we were able...
                    </p>
                    <a href="#">
                        Read more <span className="arrow_right"></span>
                    </a>
                </div>
            </div>
        </OwlCarousel>
    );
}

export default LatestBlogCarousel;
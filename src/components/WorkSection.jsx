import React from "react";
const WorkSection = () => {
    return (
        <section className="work">
            <div className="work__gallery">
                <div className="grid-sizer"></div>
                <div className="work__item wide__item set-bg" style={{ backgroundImage:`url("/img/work/work-1.jpg")`}}>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="play-btn video-popup"><i
                        className="fa fa-play"></i></a>
                    <div className="work__item__hover">
                        <h4>VIP Auto Tires & Service</h4>
                        <ul>
                            <li>eCommerce</li>
                            <li>Magento</li>
                        </ul>
                    </div>
                </div>
                <div className="work__item small__item set-bg" style={{ backgroundImage:`url("/img/work/work-2.jpg")`}}>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="play-btn video-popup"><i
                        className="fa fa-play"></i></a>
                </div>
                <div className="work__item small__item set-bg" style={{ backgroundImage:`url("/img/work/work-3.jpg")`}}>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="play-btn video-popup"><i
                        className="fa fa-play"></i></a>
                </div>
                <div className="work__item large__item set-bg" style={{ backgroundImage:`url("/img/work/work-4.jpg")`}}>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="play-btn video-popup"><i
                        className="fa fa-play"></i></a>
                    <div className="work__item__hover">
                        <h4>VIP Auto Tires & Service</h4>
                        <ul>
                            <li>eCommerce</li>
                            <li>Magento</li>
                        </ul>
                    </div>
                </div>
                <div className="work__item small__item set-bg" style={{ backgroundImage:`url("/img/work/work-5.jpg")`}}>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="play-btn video-popup"><i
                        className="fa fa-play"></i></a>
                </div>
                <div className="work__item small__item set-bg" style={{ backgroundImage:`url("/img/work/work-6.jpg")`}}>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="play-btn video-popup"><i
                        className="fa fa-play"></i></a>
                </div>
                <div className="work__item wide__item set-bg" style={{ backgroundImage:`url("/img/work/work-7.jpg")`}}>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="play-btn video-popup"><i
                        className="fa fa-play"></i></a>
                    <div className="work__item__hover">
                        <h4>VIP Auto Tires & Service</h4>
                        <ul>
                            <li>eCommerce</li>
                            <li>Magento</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
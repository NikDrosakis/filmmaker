import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const LogoBegin=()=>{
    const options={
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    }
    return (
        <div className="logo spad">
            <div className="container">
                <OwlCarousel className="logo__carousel owl-carousel">
                    <a href="#" className="logo__item"><img src="img/logo/logo-1.png" alt=""/></a>
                    <a href="#" className="logo__item"><img src="img/logo/logo-2.png" alt=""/></a>
                    <a href="#" className="logo__item"><img src="img/logo/logo-3.png" alt=""/></a>
                    <a href="#" className="logo__item"><img src="img/logo/logo-4.png" alt=""/></a>
                    <a href="#" className="logo__item"><img src="img/logo/logo-5.png" alt=""/></a>
                    <a href="#" className="logo__item"><img src="img/logo/logo-6.png" alt=""/></a>
                </OwlCarousel>
            </div>
        </div>
    )
}
export default LogoBegin;
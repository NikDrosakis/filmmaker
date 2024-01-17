/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {
    /*------------------
        Preloader
    --------------------*/
    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });
    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    /*------------------
		Hero Slider
	--------------------*/

    /*------------------
        Testimonial Slider
    --------------------*/

    /*------------------
        Latest Slider
    --------------------*/
    /*------------------
        Logo Slider
    --------------------*/
    /*------------------
        Video Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
        --------------------*/
})(jQuery);
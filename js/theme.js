/*
 ===========================================================
 Table of Contents
 -----------------------------------------------------------
 ---------------------------------------------
 ** Window Load Fucntion
 ---------------------------------------------
 - Preloader
 ---------------------------------------------
 ** On Document Ready
 ---------------------------------------------
 // Bootstrap Essentials
 // All Coustom Js
 ===========================================================
 ===========================================================
 */
 // Window Load Fucntion
jQuery(window).load(function () {

    // Preloader
    $('.preloader-wrap').fadeOut();
    $('.preloader-wrap').delay(350).fadeOut('slow');
    $('body').delay(550);

});

// Document Ready Function
(function ($) {
    "use strict";

    // Bootstrap Essentials
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $('[data-toggle="tooltip"]').tooltip();

    // All coustom Js
}(jQuery)); 
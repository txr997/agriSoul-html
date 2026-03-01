/*
	Template Name: SaasRiver - SaaS & StartUp HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";

/* 
	services-3-slider-function
*/
if ($('.as_s6_slider').length) {
	var as_s6_slider = new Swiper(".as_s6_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 20,
		slidesPerView: "auto",

		// autoplay: {
		// 	delay: 5000,
		// },

		navigation: {
			nextEl: ".as_s6_slider_next",
			prevEl: ".as_s6_slider_prev",
		},

		pagination: {
			el: ".as_s6_slider_pagination",
			type: "fraction",
		},


	});

}



})(jQuery);
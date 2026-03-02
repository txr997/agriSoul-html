/*
	Template Name: SaasRiver - SaaS & StartUp HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";

/* 
	services-6-slider-function
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

/* 
	products-6-slider-function
*/
if ($('.as_p6_slider').length) {
	var as_s6_slider = new Swiper(".as_p6_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 12,
		slidesPerView: "auto",

		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: ".as_p6_slider_pagination",
			type: "fraction",
		},

	});

}



/* 
	team-6-animation
*/

if($(".as-team-6-wrap").length) {
	const teamWrap = document.querySelector(".as-team-6-wrap");
  	const members = document.querySelectorAll(".as-team-6-member");

	if (teamWrap) {
		const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
			members.forEach(member => member.classList.add("is_active"));
			} else {
			members.forEach(member => member.classList.remove("is_active"));
			}
		});
		}, { threshold: 1 });

		observer.observe(teamWrap);
	}
}

if (window.matchMedia("(min-width: 1400px)").matches) {
	var team1ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".t6_ani_trigger",
			start: "top 100%",
			end: "top 0%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	});

	team1ani.from(".as-team-6-member:nth-of-type(1)", {
		x: 931,
		y: -1208,
		scale: 0.82,
	});
	team1ani.from(".as-team-6-member:nth-of-type(2)", {
		x: 620,
		y: -1208,
		scale: 0.82,
	},"<10%");
	team1ani.from(".as-team-6-member:nth-of-type(3)", {
		x: 315,
		y: -1208,
		scale: 0.82,
	},"<10%");
	team1ani.from(".as-team-6-member:nth-of-type(4)", {
		x: 10,
		y: -1208,
		scale: 0.82,
	},"<10%");
	
}



})(jQuery);
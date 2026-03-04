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

// team-6-animation
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
		y: -1209,
		scale: 0.82,
	});
	team1ani.from(".as-team-6-member:nth-of-type(2)", {
		x: 620,
		y: -1208,
		scale: 0.82,
	},"<10%");
	team1ani.from(".as-team-6-member:nth-of-type(3)", {
		x: 315,
		y: -1209,
		scale: 0.82,
	},"<10%");
	team1ani.from(".as-team-6-member:nth-of-type(4)", {
		x: 10,
		y: -1208,
		scale: 0.82,
	},"<10%");
	
}



if ($('.as_pro6_slider').length) {
	var as_pro6_slider = new Swiper(".as_pro6_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 32,
		centeredSlides: true,

		// autoplay: {
		// 	delay: 5000,
		// },

		navigation: {
			nextEl: ".as_pro6_slider_next",
			prevEl: ".as_pro6_slider_prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},

		},

	});

	

}

// testimonial-6-animation
if (window.matchMedia("(min-width: 1400px)").matches) {
	var testimonial6ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".testimonial6_ani_trigger",
			start: "top 40%",
			end: "bottom bottom",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	});

	testimonial6ani.from(".as-testimonial-6-card:nth-of-type(1)", {
		x: 0,
		y: 0,
		rotate: -15
	});
	testimonial6ani.from(".as-testimonial-6-card:nth-of-type(2)", {
		x: -300,
		y: -28,
		rotate: -6
	},"<10%");
	testimonial6ani.from(".as-testimonial-6-card:nth-of-type(3)", {
		x: -565,
		y: -51,
		rotate: -3
	},"<10%");
	testimonial6ani.from(".as-testimonial-6-card:nth-of-type(4)", {
		x: 531,
		y: -341,
		rotate: 6
	},"<10%");
	testimonial6ani.from(".as-testimonial-6-card:nth-of-type(5)", {
		x: 243,
		y: -336,
		rotate: 6
	},"<10%");
	testimonial6ani.from(".as-testimonial-6-card:nth-of-type(6)", {
		x: 26,
		y: -300,
		rotate: 13
	},"<10%");
	
}


})(jQuery);
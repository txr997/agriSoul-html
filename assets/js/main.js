/*
	Template Name: SaasRiver - SaaS & StartUp HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";


/* 
	lenis-smooth-scroll-activation
*/
const lenis = new Lenis({
	duration: .3,
	easing: (t) => 1 - Math.pow(1 - t, 4),
	direction: 'vertical', 
	smooth: true, 
	smoothTouch: false, 
});
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
$('a[href^="#"]').on('click', function (e) {
	e.preventDefault(); 

	const target = $(this.getAttribute('href')); 

	if (target.length) {
		lenis.scrollTo(target[0], {
			duration: 1.2, 
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		});
	}
});
gsap.config({
	nullTargetWarn: false,
});

/* 
	sticky-header-function
*/

function waStickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.wa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('wa_sticky');
      } else {
        $header.removeClass('wa_sticky');
        $header.removeClass('wa_sticky_show');
      }

      if ($header.hasClass('wa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('wa_sticky_show');
        } else {
          $header.removeClass('wa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

waStickyHeader();

/* 
	header-3-sticky-function
*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 100){
	$('.as-header-3-area').addClass('has-sticky');
	}
	else{
	$('.as-header-3-area').removeClass('has-sticky');
	}
});



/* 
	offcanvas-function
*/

$('.offcanvas_toggle').on('click', function() {
    $('.wa-overly, .offcanvas_box_active').addClass('active');
});

$('.wa-overly, .offcanvas_box_close').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.wa-overly').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.offcanvas_box_active').removeClass('active');
        $('.wa-overly').removeClass('active');
    }
});

$('.offcanvas_box_active a').on('click', function() {
    $('.offcanvas_box_active').removeClass('active'); 
    $('.wa-overly').removeClass('active'); 
});


/* 
	mobile-dropdown-function
*/

jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});


/* 
	search-popup-function
*/

$('.search_btn_toggle').on('click', function() {
    $('.wa-overly, .search_box_active').addClass('active');
});

$('.wa-overly, .search_box_close').on('click', function() {
    $('.search_box_active').removeClass('active');
    $('.wa-overly').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.search_box_active').removeClass('active');
        $('.wa-overly').removeClass('active');
    }
});




/* 
	windows-load-function
*/

window.addEventListener('load', function(){


	if (document.querySelectorAll(".as-preloader").length) {
		const loader = document.querySelector(".as-preloader");
		
		setTimeout(() => {
			loader.classList.add("loaded");
			afterPreloader();
		});
		setTimeout(function () {
			loader.remove();
		}, 1500);

	} else {
		afterPreloader();
	}

	afterPageLoad();

})


CustomEase.create("ease1", "0.26, 1.22, 0.63, 1.05");
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/* 
	after-preloader-start
*/
function afterPreloader() {


	/* 
		only-LTR-direction
	*/
	if (getComputedStyle(document.body).direction !== "rtl") {

        /* 
			section-title-1
		*/	
		if ($(".wa_split_1").length) {
			var wa_split_1 = $(".wa_split_1");
			if (wa_split_1.length == 0) return;

			gsap.registerPlugin(SplitText);

			wa_split_1.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words",
					linesClass: "split-line",
				});

				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0; 

				if ($(el).hasClass("wa_split_1")) {
					gsap.set(el.split.words, {
						x: 30,
						scale: 1.3,
                        opacity: 0,
					});
				}

				el.anim = gsap.to(el.split.words, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						toggleActions: 'play none none reverse',
					},
					x: 0,
					scale: 1,
					opacity: 1,
					duration: .5,

					ease: "ease1",
					stagger: 0.08,
					delay: delayValue, 
				});
			});
		}
		

		document.querySelectorAll(".wa_split_2").forEach((atEl) => {
			const atSplit = new SplitText(atEl, {
				type: "words,chars",
				wordsClass: "word",
				charsClass: "char"
			});

			let atDuration = parseFloat(atEl.getAttribute("data-speed")) || 1;
			let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

			if (window.innerWidth <= 768) {
				atDuration = atDuration * 0.3; 
			}

			gsap.set(atSplit.words, {
				willChange: "transform",
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.set(atSplit.chars, {
				willChange: "transform",
				opacity: 0,
				rotateX: -80,
				transformOrigin: "center center -10px"
			});

			gsap.set(atEl, {
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.to(atSplit.chars, {
				scrollTrigger: {
					trigger: atEl,
					start: "top 80%",
				},
				opacity: 1,
				rotateX: 0,
				duration: atDuration,
				delay: atDelay,
				ease: "power3.out",
				stagger: {
					each: 0.05,
					from: "center",
					grid: "auto",
				},
			});
		});
	}	


	/* 
		hero-1-slider-active
	*/
	if($('.as_h1_slider').length) {

		let as_h1_slider = new Swiper('.as_h1_slider', {
			loop: true,
			speed: 1500,

			effect: "fade",
			fadeEffect: {
				crossFade: true
			},

			autoplay: {
				delay: 5000,
			},

			navigation: {
				nextEl: ".as_h1_next",
				prevEl: ".as_h1_prev",
			},
	

			on: {
				slideChangeTransitionStart: () => {
					as_h1_split_text();
				},
			},



		});


		function as_h1_split_text() {
			const currentSlide = document.querySelectorAll('.swiper-slide-active .h3_split_text');
		

			const split = new SplitText(currentSlide, { type: 'lines,chars' , linesClass: "split-line"  });
			gsap.set(split.chars, { 
				x: 50,
				opacity: 0,
			});
		
			gsap.to(split.chars, {
				x: 0,
				opacity: 1,
				duration: 0.4,
				ease: "ease1",
				stagger: 0.02,
				delay: .7,
			});

		}

		as_h1_split_text();
		

	}

	/* 
		hero-3-slider-active
	*/
	if($('.as_h3_slider').length) {

		let as_h3_slider = new Swiper('.as_h3_slider', {
			loop: true,
			speed: 1000,

			effect: "fade",
			fadeEffect: {
				crossFade: true
			},

			// autoplay: {
			// 	delay: 5000,
			// },


			on: {
				slideChangeTransitionStart: () => {
					as_h1_split_text();
				},
			},



		});


		function as_h1_split_text() {
			const currentSlide = document.querySelectorAll('.swiper-slide-active .h3_split_text');
		

			const split = new SplitText(currentSlide, { type: 'lines,chars' , linesClass: "split-line"  });
			gsap.set(split.chars, { 
				x: 50,
				opacity: 0,
			});
		
			gsap.to(split.chars, {
				x: 0,
				opacity: 1,
				duration: 0.4,
				ease: "ease1",
				stagger: 0.02,
				delay: .7,
			});

		}

		as_h1_split_text();
		

	}


/* 
	after-preloader-end
*/
}



  




/* 
	after-page-load-start
*/
function afterPageLoad() {

	/* 
		add-active-class
	*/
	const waAddClass = gsap.utils.toArray('.wa_add_class');
	waAddClass.forEach(waAddClassItem => {
		gsap.to(waAddClassItem, {
			scrollTrigger: {
				trigger: waAddClassItem,
				start: "top 90%",
				end: "bottom bottom",
				toggleActions: "play none none reverse",
				toggleClass: "active",
				once: true,
				markers: false,
			}
		});
	});

	/* 
		wow-activation
	*/
	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       50,
			mobile:       true,
			live:         true
		});
		wow.init();
	};

/* 
	after-page-load-start
*/
}


// wa-bg-parallax
gsap.utils.toArray(".wa_parallax_bg").forEach(element => {
	gsap.fromTo(
		element,
		{ backgroundPosition: "50% 0%" }, 
		{ 
			backgroundPosition: "50% 100%", 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: true,    
				markers: false,  
			},
		}
	);
});

// wa-parallax-img
gsap.utils.toArray(".wa_parallax_img").forEach(element => {
	gsap.fromTo(
		element,
		{ objectPosition: "50% 110%" }, 
		{ 
			objectPosition: "50% 0%", 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: true,    
				markers: false,     
			},
		}
	);
});

// wa_zoomOut_img
gsap.utils.toArray(".wa_zoomOut_img").forEach(wa_zoomOut_img => {
	gsap.fromTo(
		wa_zoomOut_img,
		{ scale: 1.15 }, 
		{ 
			scale: 1, 
			ease: "power1.inOut",
			duration: .5,
			scrollTrigger: {
				trigger: wa_zoomOut_img,
				start: "top 70%",
				markers: false,     
			},
		}
	);
});



// services-1-bg-img-animation
var asServices1bgImg = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-services-1-bg-img",
		toggleActions: "play none none reverse",
		start: "top 90%",
		end: "top 20%",
		scrub: 1,
		markers: false,
	}
})

asServices1bgImg.from(".as-services-1-bg-img img", {
	yPercent: -100,
})


// footer-1-newsletter-animation
if (window.matchMedia("(min-width: 1200px)").matches) { 
	var asf1newsletter = gsap.timeline({
		scrollTrigger: {
			trigger: ".as-footer-1-newsletter-form",
			toggleActions: "play none none reverse",
			start: "top 90%",
			end: "top 20%",
			markers: false,
		}
	})
	
	asf1newsletter.from(".as-footer-1-newsletter-form", {
		maxWidth: "25%",
	})
}


// choose-2-bg-img-animation
var asChoose1bgImg = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-about-2-bg-img",
		toggleActions: "play none none reverse",
		start: "top 80%",
		end: "top 20%",
		scrub: 1,
		markers: false,
	}
})

asChoose1bgImg.from(".as-about-2-bg-img img", {
	yPercent: 100,
})




if (window.matchMedia("(min-width: 1200px)").matches) { 
	let asP3Tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".as-work-process-3-svg",
			start: "top 70%",
			toggleActions: "play none none none",
			markers: false,
		}
	});

	asP3Tl.to(".as-work-process-3-svg-plant", {
		opacity: 1,
		duration: 0.6,
		ease: "power2.out"
	});
	asP3Tl.to(".as-work-process-3-svg .point-1", { opacity: 1, duration: 0.3 }, "<");
	asP3Tl.from(".as-work-process-3-item:nth-of-type(1)", {
		opacity: 0,
		duration: 0.6,
		ease: "power2.out"
	});

	asP3Tl.to(".as-work-process-3-svg-truk", {
		opacity: 1,
		duration: 0.2
	},"<");

	asP3Tl.to(".as-work-process-3-svg-truk", {
		duration: 4,
		ease: "none",
		motionPath: {
			path: ".as-work-process-3-svg .line",
			align: ".as-work-process-3-svg .line",
			autoRotate: true,
			alignOrigin: [0.5, 0.5]
		}
	},"<");

	asP3Tl.from(".as-work-process-3-item:nth-of-type(2)", {
		opacity: 0,
		duration: 0.6,
		ease: "power2.out"
	},"=-3");
	asP3Tl.to(".as-work-process-3-svg .point-2", { opacity: 1, duration: 0.3 }, "<");
	asP3Tl.from(".as-work-process-3-item:nth-of-type(3)", {
		opacity: 0,
		duration: 0.6,
		ease: "power2.out"
	},"=-2");
	asP3Tl.to(".as-work-process-3-svg .point-3", { opacity: 1, duration: 0.3 }, "<");
	asP3Tl.from(".as-work-process-3-item:nth-of-type(4)", {
		opacity: 0,
		duration: 0.6,
		ease: "power2.out"
	},"=-.7");
	asP3Tl.to(".as-work-process-3-svg .point-4", { opacity: 1, duration: 0.3 }, "<");
}



/* 
	testimonial-1-slider-function
*/
if ($('.as_t1_slider').length) {
	var as_t1_slider = new Swiper(".as_t1_slider", {
		loop: true,
		speed: 600,
		spaceBetween: 25,
		slidesPerView: 1,


		pagination: {
			el: ".as_t1_slider_pagi",
			clickable: true,
		},

		autoplay: {
			delay: 5000,
		},

	});

}

/* 
	products-2-slider-function
*/
if ($('.as_p2_slider').length) {
	var as_p2_slider = new Swiper(".as_p2_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 24,
		slidesPerView: "auto",

		scrollbar: {
			el: ".as_p2_slider_scrollbar",
		},

		navigation: {
			nextEl: ".as_p2_slider_next",
			prevEl: ".as_p2_slider_prev",
		},

		// autoplay: {
		// 	delay: 5000,
		// },

	});

}

// testimonial-2-start
if ($('.as_t2_preview_slider_active').length) {

	let as_t2_preview_slider_active = new Swiper('.as_t2_preview_slider_active', {
		speed: 1000,
		slidesPerView: "auto",
		spaceBetween: 10,
	});
  
	let as_t2_content_slider_active = new Swiper('.as_t2_content_slider_active', {
		speed: 600,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		thumbs: {
			swiper: as_t2_preview_slider_active,
		},
	});
  
	let as_t2_img_slider_active = new Swiper('.as_t2_img_slider_active', {
		speed: 600,
		effect: "creative",
		creativeEffect: {
			prev: {
				shadow: false,
				translate: [0, 0, -400],
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},
	});
  
	as_t2_preview_slider_active.on('slideChange', function () {
		as_t2_content_slider_active.slideTo(as_t2_preview_slider_active.activeIndex);
		as_t2_img_slider_active.slideTo(as_t2_preview_slider_active.activeIndex);
	});
  
	as_t2_content_slider_active.on('slideChange', function () {
		as_t2_preview_slider_active.slideTo(as_t2_content_slider_active.activeIndex);
		as_t2_img_slider_active.slideTo(as_t2_content_slider_active.activeIndex);
	});
  
}
 

/* 
	services-3-slider-function
*/
if ($('.as_s3_slider').length) {
	var as_s3_slider = new Swiper(".as_s3_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 28,
		slidesPerView: "auto",

		// autoplay: {
		// 	delay: 5000,
		// },

	});

}

/* 
	products-3-slider-function
*/
if ($('.as_p3_slider').length) {
	var as_p3_slider = new Swiper(".as_p3_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 22,

		// autoplay: {
		// 	delay: 5000,
		// },

		navigation: {
			nextEl: ".as_p3_slider_next",
			prevEl: ".as_p3_slider_prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 4,
			},

		},

	});

	

}



//	services-1-tabs-hover-change
document.querySelectorAll('.as-services-1-tabs-btn .nav-link').forEach(link => {
	link.addEventListener('mouseenter', () => {
		const tabTrigger = new bootstrap.Tab(link);
		tabTrigger.show();
	});
});

/* 
    marquee-right
*/

$('.wa_marquee_right').marquee({
	speed: 50,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: true,
})

/* 
    marquee-left
*/

$('.wa_marquee_left').marquee({
	speed: 50,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
})

/* 
    marquee-left-nopause
*/
$('.wa_marquee_left_nopause').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: false,
})


/* 
    marquee-right-nopause
*/
$('.wa_marquee_right_nopause').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: false,
})

/* 
	marquee-down-top 
*/
if ($(".wa_marquee_down_top").length) {
  document.querySelectorAll(".wa_marquee_down_top").forEach((waMarqueeTop) => {
    const waMarqueeClone = waMarqueeTop.cloneNode(true);
    waMarqueeTop.parentNode.appendChild(waMarqueeClone);

    const waMarqueeTotalHeight = waMarqueeTop.offsetHeight;

    gsap.to([waMarqueeTop, waMarqueeClone], {
      y: `-${waMarqueeTotalHeight}px`,
      ease: "none",
      duration: 30,
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((waY) => parseFloat(waY) % waMarqueeTotalHeight),
      },
    });
  });
}




/* 
	faqs-active-class
*/
$(document).on('click', '.wa_accordion_item', function(){
	$(this).addClass('active').siblings().removeClass('active')
})


// placeholder-typing
document.querySelectorAll(".wa_placeholder").forEach(waPlaceholderInput => {
	const waPlaceholderText = waPlaceholderInput.placeholder; 
	const waStartDelay = waPlaceholderInput.dataset.startDelay ? parseInt(waPlaceholderInput.dataset.startDelay) : 0; 
	let waPlaceholderIndex = 0;
	waPlaceholderInput.placeholder = "";

	const waPlaceholderObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				waPlaceholderType();
				waPlaceholderObserver.unobserve(waPlaceholderInput);
			}
		});
	}, { threshold: 0.5 });

	setTimeout(() => {
		waPlaceholderObserver.observe(waPlaceholderInput);
	}, waStartDelay);

	function waPlaceholderType() {
		if (waPlaceholderIndex < waPlaceholderText.length) {
			waPlaceholderInput.placeholder += waPlaceholderText.charAt(waPlaceholderIndex);
			waPlaceholderIndex++;
			setTimeout(waPlaceholderType, 70); 
		}
	}
});

/* 
	bootstrap-tooltip-activation
*/
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

/* 
	back-to-top-button-function
*/
if ($('.wa_backToTop').length) {
    var scrollTopbtn = document.querySelector('.wa_backToTop');
    var offset = 500; 
    var duration = 1000; 

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $(scrollTopbtn).addClass('active');
        } else {
            $(scrollTopbtn).removeClass('active');
        }
    });

    $(scrollTopbtn).on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration, 'swing');
    });
}

/* 
	popup-video-activation
*/
if($('.popup_video').length) {
	$('.popup_video').magnificPopup({
		type: 'iframe'
	});
}

/* 
	popup-image-activation
*/
if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}


/* 
	nice-selector-activation
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}


/* 
	background-image-function
*/
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

/* 
	counter-activation
*/


if($(".counter").length) {
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    let elements = document.querySelectorAll(".wa-counter");

    elements.forEach(element => {
        let innerWidth = element.clientWidth;
        element.style.width = innerWidth + "px";
    });
}

/*
    odomater-activation
*/

$('.odometer').appear(function () {
    var $this = $(this); 
    var countNumber = $this.attr("data-count");
    $this.html(countNumber);
});


/* 
	current-year-function
*/
if ($('.copyright-year').length) {
    const currentYear = new Date().getFullYear();
    $('.copyright-year').text(currentYear);
}


})(jQuery);
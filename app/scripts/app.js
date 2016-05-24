import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';
import '../../node_modules/isotope-layout/dist/isotope.pkgd.min.js';
import '../../node_modules/waypoints/lib/jquery.waypoints.min.js';

// Слайдер

$(document).ready(function () {

	// Слайдер Header
	$('.slider-header__list').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: '<div class="slider-header__prev hidden-xs"><svg><use xlink:href="/assets/images/icon.svg#icon_slider-prev"></use></svg></div>',
		nextArrow: '<div class="slider-header__next hidden-xs"><svg><use xlink:href="/assets/images/icon.svg#icon_slider-next"></use></svg></div>'
	});

	// Слайдер Testimonial
	$('.index-testimonial__list').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		autoplaySpeed: 5000
	});
});

// Mosonry для Portfolio

let button = 1;
const buttonClass = 'index-portfilio__btn-sort_active';
const $container = $('#portfolio-list');

$container.isotope({
	// options...
	itemSelector: '.index-portfolio__item',
	percentPosition: true,
	masonry: {
		columnWidth: '.index-portfolio__item',
		gutter: 0
	}
});

// Фильтрация Portfolio по категориям
function checkButton() {
	$('.index-portfilio__btn-sort').removeClass(buttonClass);
	if (button === 1) {
		$('#filter-all').addClass(buttonClass);
	}
	if (button === 2) {
		$('#filter-website').addClass(buttonClass);
	}
	if (button === 3) {
		$('#filter-brochures').addClass(buttonClass);
	}
	if (button === 4) {
		$('#filter-logos').addClass(buttonClass);
	}
};

$('#filter-all').click(function () {
	$container.isotope({
		filter: '.all'
	});
	button = 1;
	checkButton();
});
$('#filter-website').click(function () {
	$container.isotope({
		filter: '.website'
	});
	button = 2;
	checkButton();
});
$('#filter-brochures').click(function () {
	$container.isotope({
		filter: '.brochures'
	});
	button = 3;
	checkButton();
});
$('#filter-logos').click(function () {
	$container.isotope({
		filter: '.logos'
	});
	button = 3;
	checkButton();
});

checkButton();

// Анимация при скроле
// Animations

const contentWayPoint = function () {
	let i = 0;
	$('.animate-box').waypoint(function (direction) {

		if (direction === 'down' && !$(this.element).hasClass('animated')) {

			i++;

			$(this.element).addClass('item-animate');
			setTimeout(function () {

				$('.animate-box.item-animate').each(function (k) {
					const el = $(this);
					setTimeout(function () {
						el.addClass('fadeInUp animated');
						el.removeClass('item-animate');
					}, k * 200, 'easeInOutExpo');
				});

			}, 100);

		}

	}, {
		offset: '95%'
	});
};

$(function () {

	contentWayPoint();

});

$('body').on('click', '[href*="#"]', function (e) {
	const fixedOffset = 0;
	$('html,body').stop().animate({
		scrollTop: $(this.hash).offset().top - fixedOffset
	}, 1300);
	e.preventDefault();
});

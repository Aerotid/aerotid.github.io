function creatFullPage(scroll) {
	$('.fullpage').fullpage({
		autoScrolling: false,
		verticalCentered: false,
		navigation: true,
		navigationPosition: 'right',
		scrollOverflow:false,
		loopTop:false,
		loopBottom:false,
		loopHorizontal:false,
		controlArrows: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		onLeave: function(index, nextIndex, direction) {
			if (nextIndex === 4) {
				$('#fp-nav').addClass('bg-white');
				$('.fixed-bottom').addClass('fixed-bottom--white');
			}
			else {
				$('#fp-nav').removeClass('bg-white');
				$('.fixed-bottom').removeClass('fixed-bottom--white');
			}
			if (nextIndex === $('.fullpage .section').length) {
				$('#fp-nav').hide(); // or toggle by class
				$('.main-header').css('display', 'none');
				$('.fixed-bottom').css('display', "none");
			}
			else {
				$('#fp-nav').show(); // or toggle by class
				$('.main-header').css('display', 'block');
				$('.fixed-bottom').css('display', 'flex');
			}
			if (nextIndex === 4 || nextIndex === $('.fullpage .section').length) {
				$('.main-logo--default').hide();
				$('.main-logo--red').show();
				$('.main-header-logo p').css('color', 'rgba(51, 50, 59, .6)');
				$('.main-header-menu span').css('background-color', '#33323b');
			}
			else {
				$('.main-logo--red').hide();
				$('.main-logo--default').show();
				$('.main-header-logo p').css('color', 'rgba(255, 255, 255, .6)');
				$('.main-header-menu span').css('background-color', '#fff');
			}
		},
	});
}

$(document).ready(function() {
	creatFullPage(true);

	var listSlidesNav = document.querySelectorAll('.fp-slidesNav ul');
	for (var i = 0; i < listSlidesNav.length; i++) {
		var slidesNav = listSlidesNav[i].children;

		for (var n = 0; n < slidesNav.length; n++) {
			var elem = slidesNav[n].querySelector('span');
			elem.textContent = '0' + (n+1);
		}
	}

	var flag = true;
	$('.main-header-menu').click(function() {
		$(this).toggleClass('main-header-menu--active');
		$(".menu-right").toggleClass('active');

		if(flag) {
			flag = false;
			$('body').css('overflow', 'hidden');
			$('.main-logo--default').hide();
			$('.main-logo--red').show();
			$('.main-header-logo p').css('color', 'rgba(51, 50, 59, .6)');
			$('.main-header-menu span').css('background-color', '#33323b');
			$('.main-header-link').css('display', 'flex');
		}
		else {
			flag = true;
			$('body').css('overflow', 'visible');
			$('.main-header-link').css('display', 'none');
			if ($('body').hasClass('fp-viewing-3')) {
				$('.main-logo--red').show();
				$('.main-logo--default').hide();
				$('.main-header-logo p').css('color', 'rgba(51, 50, 59, .6)');
				$('.main-header-menu span').css('background-color', '#33323b');

			}
			else {
				$('.main-logo--red').hide();
				$('.main-logo--default').show();
				$('.main-header-logo p').css('color', 'rgba(255, 255, 255, .6)');
				$('.main-header-menu span').css('background-color', '#fff');
			}
		}
	});

	var swiperLeft = new Swiper('.swiper-container-left', {
		pagination: {
			el: '.swiper-pagination-left',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
			},
		},
	});
	
	var swiperRight = new Swiper('.swiper-container-right', {
		direction: 'vertical',
		pagination: {
			el: '.swiper-pagination-right',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
			},
		},
	});

	var swiperProducts = new Swiper('.swiper-container-products', {
		slidesPerView: 3,
		spaceBetween: 40,
		pagination: {
			el: '.swiper-pagination-products',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
			},
		},
		breakpoints: {
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			}
		}
	});

	var swiperAdvantage = new Swiper('.swiper-container-advantage', {
		slidesPerView: 3,
		spaceBetween: 40,
		pagination: {
			el: '.swiper-pagination-advantage',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
			},
		},
		breakpoints: {
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			}
		}
	});
	
	
});
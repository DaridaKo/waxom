$(document).ready(function(){
	$('.header__burger').click(function(e){
		$('.header__burger, .header__menu').toggleClass('active');
	});

	$('.fullscreen').slick({
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	const tabBtns = document.querySelectorAll('.tabs__btn');
	const tabItems = document.querySelectorAll('.items__item');
	
	tabBtns.forEach(function(item) {
		item.addEventListener('click', function() {
			tabBtns.forEach(function(item) {
				item.classList.remove('active');
			});
			item.classList.add('active');
			let tabId = item.getAttribute('data-tab');
			let idItems = document.querySelector(tabId);
			tabItems.forEach(function(item) {
				item.classList.remove('active');
			});
			idItems.classList.add('active');
		});
	});
});
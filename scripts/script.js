(function(){
	'use strict';

	let front = document.getElementById('front');
	let back = document.getElementById('back');

	front.addEventListener('click', () => {
		front.style.transform = 'scale(1.3) rotateY(180deg)';
		back.style.transform = 'scale(1.3) rotateY(-360deg)';
	});
	back.addEventListener('click', () => {
		back.style.transform = 'rotateY(-180deg)';
		front.style.transform = 'rotateY(360deg)';
	});

})();
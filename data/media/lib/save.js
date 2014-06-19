/*

Copyright (C) 2014 Gabriel Barbosa <barbosanascimentogabriel@gmail.com>
This program is free software: you can redistribute it and/or modify it 
under the terms of the GNU General Public License version 3, as published 
by the Free Software Foundation.

This program is distributed in the hope that it will be useful, but 
WITHOUT ANY WARRANTY; without even the implied warranties of 
MERCHANTABILITY, SATISFACTORY QUALITY, or FITNESS FOR A PARTICULAR 
PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along 
with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

$(document).ready(function () {
	//Saving clock users preferences
	$(".t24").click(function () {
		if ($('.t24').hasClass('off')) {
			setItem('clock2', 'true');
			removeItem('clock1', 'true');
		} else {
			setItem('clock1', 'true');
			removeItem('clock2', 'true');
		}
	});

	if (localStorage.getItem('clock1') === 'true') {
		if (localStorage.getItem('c1') === 'true') {
			clock1(c1Color);
		} else if (localStorage.getItem('c2') === 'true') {
			clock1(c2Color);
		} else if (localStorage.getItem('c3') === 'true') {
			clock1(c3Color);
		} else if (localStorage.getItem('c4') === 'true') {
			clock1(c4Color);
		} else if (localStorage.getItem('c5') === 'true') {
			clock1(c5Color);
		} else if (localStorage.getItem('c6') === 'true') {
			clock1(c6Color);
		} else if (localStorage.getItem('c7') === 'true') {
			clock1(c7Color);
		} else if (localStorage.getItem('c8') === 'true') {
			clock1(c8Color);
		} else if (localStorage.getItem('c9') === 'true') {
			clock1(c9Color);
		} else if (localStorage.getItem('c10') === 'true') {
			clock1(c10Color);
		} else if (localStorage.getItem('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10') === null) {
			clock1(colorSwitch);
		}
	} else if (localStorage.getItem('clock2') === 'true') {
		clock2();
	}

	/*----------------------------------------------------------------------*/
	//Color Saving

	//Backing to normal
	$('.classic').click(function () {
		removeItem('c1', 'true');
		removeItem('c2', 'true');
		removeItem('c3', 'true');
		removeItem('c4', 'true');
		removeItem('c5', 'true');
		removeItem('c6', 'true');
		removeItem('c7', 'true');
		removeItem('c8', 'true');
		removeItem('c9', 'true');
		removeItem('c10', 'true');
		removeItem('CHOOSEN_COLOR');
	});

	if (localStorage.getItem('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10') === null) {
		backToClassic();
	}

	//Colors
	$('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10').click(function () {
		if ($(this).hasClass("c1")) {
			setItem('c1', 'true');
			removeItem('c2', 'true');
			removeItem('c3', 'true');
			removeItem('c4', 'true');
			removeItem('c5', 'true');
			removeItem('c6', 'true');
			removeItem('c7', 'true');
			removeItem('c8', 'true');
			removeItem('c9', 'true');
			removeItem('c10', 'true');
			removeItem('CHOOSEN_COLOR');
		}
		if ($(this).hasClass("c2")) {
			setItem('c2', 'true');
			removeItem('c1', 'true');
			removeItem('c3', 'true');
			removeItem('c4', 'true');
			removeItem('c5', 'true');
			removeItem('c6', 'true');
			removeItem('c7', 'true');
			removeItem('c8', 'true');
			removeItem('c9', 'true');
			removeItem('c10', 'true');
			removeItem('CHOOSEN_COLOR');
		}
		if ($(this).hasClass("c3")) {
			setItem('c3', 'true');
			removeItem('c1', 'true');
			removeItem('c2', 'true');
			removeItem('c4', 'true');
			removeItem('c5', 'true');
			removeItem('c6', 'true');
			removeItem('c7', 'true');
			removeItem('c8', 'true');
			removeItem('c9', 'true');
			removeItem('c10', 'true');
			removeItem('CHOOSEN_COLOR');
		}
		if ($(this).hasClass("c4")) {
			setItem('c4', 'true');
			removeItem('c1', 'true');
			removeItem('c2', 'true');
			removeItem('c3', 'true');
			removeItem('c5', 'true');
			removeItem('c6', 'true');
			removeItem('c7', 'true');
			removeItem('c8', 'true');
			removeItem('c9', 'true');
			removeItem('c10', 'true');
			removeItem('CHOOSEN_COLOR');
		}
		if ($(this).hasClass("c5")) {
			setItem('c5', 'true');
			removeItem('c1', 'true');
			removeItem('c2', 'true');
			removeItem('c3', 'true');
			removeItem('c4', 'true');
			removeItem('c6', 'true');
			removeItem('c7', 'true');
			removeItem('c8', 'true');
			removeItem('c9', 'true');
			removeItem('c10', 'true');
			removeItem('CHOOSEN_COLOR');
		}
		if ($(this).hasClass("c6")) {
			setItem('c6', 'true');
			removeItem('c1', 'true');
			removeItem('c2', 'true');
			removeItem('c3', 'true');
			removeItem('c4', 'true');
			removeItem('c5', 'true');
			removeItem('c7', 'true');
			removeItem('c8', 'true');
			removeItem('c9', 'true');
			removeItem('c10', 'true');
			removeItem('CHOOSEN_COLOR');
		}
		if ($(this).hasClass("c7")) {
			setItem('c7', 'true');
			removeItem('c1', 'true');
			removeItem('c2', 'true');
			removeItem('c3', 'true');
			removeItem('c4', 'true');
			removeItem('c5', 'true');
			removeItem('c6', 'true');
			removeItem('c8', 'true');
			removeItem('c9', 'true');
			removeItem('c10', 'true');
			removeItem('CHOOSEN_COLOR');
		}
		if ($(this).hasClass("c8")) {
			setItem('c8', 'true');
			removeItem('c1', 'true');
			removeItem('c2', 'true');
			removeItem('c3', 'true');
			removeItem('c4', 'true');
			removeItem('c5', 'true');
			removeItem('c6', 'true');
			removeItem('c7', 'true');
			removeItem('c9', 'true');
			removeItem('c10', 'true');
			removeItem('CHOOSEN_COLOR');
		}
		if ($(this).hasClass("c9")) {
			setItem('c9', 'true');
			removeItem('c1', 'true');
			removeItem('c2', 'true');
			removeItem('c3', 'true');
			removeItem('c4', 'true');
			removeItem('c5', 'true');
			removeItem('c6', 'true');
			removeItem('c7', 'true');
			removeItem('c8', 'true');
			removeItem('c10', 'true');
			removeItem('CHOOSEN_COLOR');
		}
		if ($(this).hasClass("c10")) {
			setItem('c10', 'true');
			removeItem('c1', 'true');
			removeItem('c2', 'true');
			removeItem('c3', 'true');
			removeItem('c4', 'true');
			removeItem('c5', 'true');
			removeItem('c6', 'true');
			removeItem('c7', 'true');
			removeItem('c8', 'true');
			removeItem('c9', 'true');
			removeItem('CHOOSEN_COLOR');
		}

	});


	//Colors load
	if (localStorage.getItem('c1') === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css('background', c1Color);
		palletColors();
		$('.c1 img').css('display', 'block');
	}
	if (localStorage.getItem('c2') === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css('background', c2Color);
		palletColors();
		$('.c2 img').css('display', 'block');
	}

	if (localStorage.getItem('c3') === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css('background', c3Color);
		palletColors();
		$('.c3 img').css('display', 'block');
	}

	if (localStorage.getItem('c4') === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css('background', c4Color);
		palletColors();
		$('.c4 img').css('display', 'block');
	}

	if (localStorage.getItem('c5') === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css('background', c5Color);
		palletColors();
		$('.c5 img').css('display', 'block');
	}

	if (localStorage.getItem('c6') === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css('background', c6Color);
		palletColors();
		$('.c6 img').css('display', 'block');
	}

	if (localStorage.getItem('c7') === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css('background', c7Color);
		palletColors();
		$('.c7 img').css('display', 'block');
	}

	if (localStorage.getItem('c8') === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css('background', c8Color);
		palletColors();
		$('.c8 img').css('display', 'block');
	}

	if (localStorage.getItem('c9') === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css('background', c9Color);
		palletColors();
		$('.c9 img').css('display', 'block');
	}

	if (localStorage.getItem('c10') === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css('background', c10Color);
		palletColors();
		$('.c10 img').css('display', 'block');
	}


});
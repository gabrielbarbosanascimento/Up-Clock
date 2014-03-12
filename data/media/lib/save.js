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

$(document).ready(function() {
	//Saving clock users preferences
	$(".t24").click(function() {
		if ($('.t24').hasClass('off')) {
			localStorage.setItem('clock2', 'true');
			localStorage.removeItem('clock1', 'true');
		} else {
			localStorage.setItem('clock1', 'true');
			localStorage.removeItem('clock2', 'true');
		}
	});
	
	if (localStorage.getItem("clock1") === "true") {
		clock2();
	} else if (localStorage.getItem("clock2") === "true") {		
		clock1();
	}

/*----------------------------------------------------------------------*/
	//Color Saving

	//Backing to normal
	$('.classic').click(function() {
		localStorage.removeItem('c1', 'true');
		localStorage.removeItem('c2', 'true');
		localStorage.removeItem('c3', 'true');
		localStorage.removeItem('c4', 'true');
		localStorage.removeItem('c5', 'true');
		localStorage.removeItem('c6', 'true');
		localStorage.removeItem('c7', 'true');
		localStorage.removeItem('c8', 'true');
		localStorage.removeItem('c9', 'true');
		localStorage.removeItem('c10', 'true');
		localStorage.removeItem("CHOOSEN_COLOR");
	});

	if (localStorage.getItem('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10') === null) {
		backToClassic();
	}

	//Colors
	$('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10').click(function() {
		if ($(this).hasClass("c1")) {
			localStorage.setItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c2")) {
			localStorage.setItem('c2', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c3")) {
			localStorage.setItem('c3', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c4")) {
			localStorage.setItem('c4', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c5")) {
			localStorage.setItem('c5', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c6")) {
			localStorage.setItem('c6', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c7")) {
			localStorage.setItem('c7', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c8")) {
			localStorage.setItem('c8', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c9")) {
			localStorage.setItem('c9', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c10")) {
			localStorage.setItem('c10', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} 

	});

	
	//Colors load
	if (localStorage.getItem("c1") === 'true') {
		$('#animation, #circle').css("background", c1Color);
		palletColors();
		$('.c1 img').css('display','block');
	}
	if (localStorage.getItem("c2") === 'true') {
		$('#animation, #circle').css("background", c2Color);
		palletColors();
		$('.c2 img').css('display','block');
	}

	if (localStorage.getItem("c3") === 'true') {
		$('#animation, #circle').css("background", c3Color);
		palletColors();
		$('.c3 img').css('display','block');
	}

	if (localStorage.getItem("c4") === 'true') {
		$('#animation, #circle').css("background", c4Color);
		palletColors();
		$('.c4 img').css('display','block');
	}

	if (localStorage.getItem("c5") === 'true') {
		$('#animation, #circle').css("background", c5Color);
		palletColors();
		$('.c5 img').css('display','block');
	}

	if (localStorage.getItem("c6") === 'true') {
		$('#animation, #circle').css("background", c6Color);
		palletColors();
		$('.c6 img').css('display','block');
	}

	if (localStorage.getItem("c7") === 'true') {
		$('#animation, #circle').css("background", c7Color);
		palletColors();
		$('.c7 img').css('display','block');
	}

	if (localStorage.getItem("c8") === 'true') {
		$('#animation, #circle').css("background", c8Color);
		palletColors();
		$('.c8 img').css('display','block');		
	}

	if (localStorage.getItem("c9") === 'true') {
		$('#animation, #circle').css("background", c9Color);
		palletColors();
		$('.c9 img').css('display','block');		
	}

	if (localStorage.getItem("c10") === 'true') {		
		$('#animation, #circle').css("background", c10Color);
		palletColors();
		$('.c10 img').css('display','block');
	}
	
});

/*

Copyright (C) 2013 Gabriel Barbosa <barbosanascimentogabriel@gmail.com>
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
	$(".t12").click(function() {
    	localStorage.setItem('clock2', 'true');
    	localStorage.removeItem('clock1', 'true');
	});

	$(".t24").click(function() {
    	localStorage.setItem('clock1', 'true');
    	localStorage.removeItem('clock2', 'true');
	});

	if (localStorage.getItem("clock2") === "true") {
		$('#clock').fadeIn('fast');
		$('#ur').fadeOut('fast');
	} else if (localStorage.getItem("clock1") === "true") {		
		$('#clock').fadeOut('fast');
		$('#ur').fadeIn('fast');
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
	});

	if (localStorage.getItem('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14') === null) {
		$('#circle').fadeOut('fast');
		$('#i1').attr("src","media/1.png");
		$('#i2').attr("src","media/2.png");
		$('#i3').attr("src","media/3.png");
		$('#i4').attr("src","media/4.png");
		$('#i5').attr("src","media/5.png");
		$('#container').css("background","#2f0916");
		$('.classic, .t24, .t12').css("border-right","4px solid rgba(0, 0, 0, 0.4)");
	}

	//Colors
	
	$('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14').click(function() {
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
		} 

	});

	
	//Colors load
	if (localStorage.getItem("c1") === 'true') {		
		$('#container, #circle').css("background","#333");
		$('.classic, .t24, .t12').css("border-right","4px solid #333");
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	} 
	if (localStorage.getItem("c2") === 'true') {		
		$('#container, #circle').css("background","#1A1A1A");
		$('.classic, .t24, .t12').css("border-right","4px solid #1A1A1A");
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	} 

	if (localStorage.getItem("c3") === 'true') {		
		$('#container, #circle').css("background","#16a085");
		$('.classic, .t24, .t12').css("border-right","4px solid #16a085");
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	}

	if (localStorage.getItem("c4") === 'true') {		
		$('#container, #circle').css("background","#338000");
		$('.classic, .t24, .t12').css("border-right","4px solid #338000");
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	}

	if (localStorage.getItem("c5") === 'true') {		
		$('#container, #circle').css("background","#1BA1E2");
		$('.classic, .t24, .t12').css("border-right","4px solid #1BA1E2");
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	}

	if (localStorage.getItem("c6") === 'true') {		
		$('#container, #circle').css("background","#3B5998");
		$('.classic, .t24, .t12').css("border-right","4px solid #3B5998");
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	}

	if (localStorage.getItem("c7") === 'true') {		
		$('#container, #circle').css("background","#34495e");
		$('.classic, .t24, .t12').css("border-right","4px solid #34495e");
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	}

	if (localStorage.getItem("c8") === 'true') {		
		$('#container, #circle').css("background","#441650");
		$('.classic, .t24, .t12').css("border-right","4px solid #441650");
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	}

	if (localStorage.getItem("c9") === 'true') {		
		$('#container, #circle').css("background","#f39c12");
		$('.classic, .t24, .t12').css("border-right","4px solid #f39c12");
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	}

	if (localStorage.getItem("c10") === 'true') {		
		$('#container, #circle').css("background","#c0392b");
		$('.classic, .t24, .t12').css("border-right","4px solid #c0392b");
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	}







});
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

	$('#ur, #clock').addClass('animated bounce');

	//Hide button behavior
	$('#hide').click(function() {
		$('a').css('display','0.8')
		if ($('#container').hasClass('show'))
		{
			$('#close, #settings, #minimize').addClass('animated fadeOutDown');
			$('#hide').animate({left: 0, opacity: '0.8'});
			$("#container").addClass('hide');
			$("#container").removeClass('show');
			$('#close, #settings, #minimize').removeClass('fadeInUp');
		}
		else
		{
			$('#close, #settings, #minimize').addClass('fadeInUp');
			$('#hide').animate({left: '60px'});
			$("#container").addClass('show');
			$("#container").removeClass('hide');
			$('#close, #settings, #minimize').removeClass('fadeOutDown');
		}

	});

	//Gear button to open the configurations
	$('#settings').click(function() {
		if ($('#settings').hasClass('show'))
		{
			$('#configuration').addClass('animated fadeInDown');
			$(this).addClass('hide');
			$(this).removeClass('show');
			$('#configuration').css('display','block');
			$(this).css('display','block');
			$('#configuration').removeClass('fadeOutDown');
		}
		else {
			$('#configuration').addClass('fadeOutDown');
			$(this).addClass('show');
			$(this).removeClass('hide');
			$('#configuration').removeClass('fadeInDown');
		}
	});


	//Color changes
	$('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14').click(function() {
		if ($(this).hasClass("c1")) {
			$('#container, #circle').css("background","#333");
			$('.c1 img').css('display','block');
			$('.c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
		} else if ($(this).hasClass("c2")) {
			$('#container, #circle').css("background","#535353");
			$('.c2 img').css('display','block');
			$('.c1 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
		} else if ($(this).hasClass("c3")) {
			$('#container, #circle').css("background","#16a085");
			$('.c3 img').css('display','block');
			$('.c1 img, .c2 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
		} else if ($(this).hasClass("c4")) {
			$('#container, #circle').css("background","#338000");
			$('.c4 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
		} else if ($(this).hasClass("c5")) {
			$('#container, #circle').css("background","#1BA1E2");
			$('.c5 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
		} else if ($(this).hasClass("c6")) {
			$('#container, #circle').css("background","#3B5998");
			$('.c6 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
		} else if ($(this).hasClass("c7")) {
			$('#container, #circle').css("background","#34495e");
			$('.c7 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c8 img, .c9 img, .c10 img').css('display','none');
		} else if ($(this).hasClass("c8")) {
			$('#container, #circle').css("background","#441650");
			$('.c8 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c9 img, .c10 img').css('display','none');
		} else if ($(this).hasClass("c9")) {
			$('#container, #circle').css("background","#f39c12");
			$('.c9 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c10 img').css('display','none');
		} else if ($(this).hasClass("c10")) {
			$('#container, #circle').css("background","#c0392b");
			$('.c10 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img').css('display','none');
		}
	});

	//Change the classic to colored theme behavior
	$('#pallet-color span').click(function() {
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
		$('.classic .switch div').animate({right: 0},300);
		$('.classic .switch').css('background-color','#fff');
	});

	//Classic button
	$('.classic').click(function() {
		$('.classic .switch div').animate({right: '-30px'},300);
		$('.classic .switch').css('background-color','#B6B6B6');
		$('#circle').fadeOut('fast');
		$('#i1').attr("src","media/1.png");
		$('#i2').attr("src","media/2.png");
		$('#i3').attr("src","media/3.png");
		$('#i4').attr("src","media/4.png");
		$('#i5').attr("src","media/5.png");
		$('#container').css("background","#2f0916");
		$('#pallet-color span img').css('display','none');
	});
	
	//Clock changing
	$('.t24').click(function() {
		$('#clock').fadeOut('fast');
		$('#ur').fadeIn('fast');
		$('.t24 .switch div').animate({right: '-30px'},300);
		$('.t12 .switch div').animate({right: 0},200);
		$('.t12 .switch').css('background-color','#fff');
		$('.t24 .switch').css('background-color','#B6B6B6');

	});
	$('.t12').click(function() {
		$('#clock').fadeIn('fast');
		$('#ur').fadeOut('fast');
		$('.t12 .switch div').animate({right: '-30px'},300);
		$('.t24 .switch div').animate({right: 0},300);
		$('.t24 .switch').css('background-color','#fff');
		$('.t12 .switch').css('background-color','#B6B6B6');
	});

})

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
	$('#animation').cycle({ 
		fx:      'fade', 
		speed:    3000, 
		timeout:  2000,
	});

	$('#circle').cycle({ 
		fx:      'fade', 
		speed:    3000, 
		timeout:  2000,
	});



	$('#settings').click(function() {
		if ($('#settings').hasClass('show'))
		{
			$('#configuration').fadeIn('slow');
			$(this).addClass('hide');
			$(this).removeClass('show');
			$(this).css('display','block');
			$('#animation, #circle, #clock, #ur').css('filter','blur(20px)');
			$('#animation, #circle, #clock, #ur').css('-webkit-filter','blur(20px)');
		}
		else
		{
			$('#configuration').fadeOut('slow');
			$(this).addClass('show');
			$(this).removeClass('hide');
			$('#animation, #circle, #clock, #ur').css('filter','none');
			$('#animation, #circle, #clock, #ur').css('-webkit-filter','none');
		}
	});



	$('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14').click(function() {
		if ($(this).hasClass("c1")) {
			$('#container, #circle').css("background","#333");
			$('.classic, .choose, .t24, .t12').css("border-right","4px solid #333");
		} else if ($(this).hasClass("c2")) {
			$('#container, #circle').css("background","#1A1A1A");
			$('.classic, .choose, .t24, .t12').css("border-right","4px solid #1A1A1A");
		} else if ($(this).hasClass("c3")) {
			$('#container, #circle').css("background","#006e69");
			$('.classic, .choose, .t24, .t12').css("border-right","4px solid #006e69");
		} else if ($(this).hasClass("c4")) {
			$('#container, #circle').css("background","#338000");
			$('.classic, .choose, .t24, .t12').css("border-right","4px solid #338000");
		} else if ($(this).hasClass("c5")) {
			$('#container, #circle').css("background","#1BA1E2");
			$('.classic, .choose, .t24, .t12').css("border-right","4px solid #1BA1E2");
		} else if ($(this).hasClass("c6")) {
			$('#container, #circle').css("background","#3B5998");
			$('.classic, .choose, .t24, .t12').css("border-right","4px solid #3B5998");
		} else if ($(this).hasClass("c7")) {
			$('#container, #circle').css("background","#393393");
			$('.classic, .choose, .t24, .t12').css("border-right","4px solid #393393");
		} else if ($(this).hasClass("c8")) {
			$('#container, #circle').css("background","#441650");
			$('.classic, .choose, .t24, .t12').css("border-right","4px solid #441650");
		} else if ($(this).hasClass("c9")) {
			$('#container, #circle').css("background","#d25423");
			$('.classic, .choose, .t24, .t12').css("border-right","4px solid #d25423");
		} else if ($(this).hasClass("c10")) {
			$('#container, #circle').css("background","#8f0202");
			$('.classic, .choose, .t24, .t12').css("border-right","4px solid #8f0202");
		} 
	});

	$('#pallet-color span').click(function() {
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
	});

	$('.classic').click(function() {
		$('#circle').fadeOut('fast');
		$('#i1').attr("src","media/1.png");
		$('#i2').attr("src","media/2.png");
		$('#i3').attr("src","media/3.png");
		$('#i4').attr("src","media/4.png");
		$('#i5').attr("src","media/5.png");
		$('#container').css("background","#2f0916");
		$('.classic, .t24, .t12, .choose').css("border-right","4px solid rgba(0, 0, 0, 0.4)");
	});
	
	$('.t24').click(function() {
		$('#clock').fadeOut('fast');
		$('#ur').fadeIn('fast');
	});
	$('.t12').click(function() {
		$('#clock').fadeIn('fast');
		$('#ur').fadeOut('fast');
	});

	/* $('.auto').click(function() {
		$('#circle').fadeIn('fast');
		$('#i1').attr("src","media/1.svg");
		$('#i2').attr("src","media/2.svg");
		$('#i3').attr("src","media/3.svg");
		$('#i4').attr("src","media/4.svg");
		$('#i5').attr("src","media/5.svg");
		$('.classic, .t24, .t12, .auto').css("background","none");

	}); */

})

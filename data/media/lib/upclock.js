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

	//Gear button to open the configurations
	$('#settings').click(function() {
		if ($('#settings').hasClass('show'))
		{
			$('#settings').addClass('hide');
			$('#settings').removeClass('show');
			$('#configuration').animate({
				top: 200
			}, 250);
			$('#ur').animate({
				top: 155
			}, 250);
			$('#clock').animate({
				top: 160
			}, 250);
		}
		else {
			$('#settings').addClass('show');
			$('#settings').removeClass('hide');
			$('#configuration').animate({
				top: 442
			}, 250);
			$('#ur').animate({
				top: 200
			}, 250);
			$('#clock').animate({
				top: 206
			}, 250);
		}
	});

	$('#alarm').click(function() {
		if ($('#alarm').hasClass('show'))
		{
			$('#alarm-settings').fadeIn(400);
			$('#alarm').removeClass('show');
			$('#alarm').addClass('hide');
			$('#settings').css('z-index','98');
		}
		else {
			$('#alarm-settings').fadeOut(400);
			$('#alarm').addClass('show');
			$('#alarm').removeClass('hide');
			$('#settings').css('z-index','100');
			$('#alarm-settings').fadeOut(400);
		}
	});



	//Color changes
	$('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10').click(function() {
		if ($(this).hasClass("c1")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c1Color);
			$('.c1 img').css('display','block');
			$('.c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c1Color);
            }
		} else if ($(this).hasClass("c2")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c2Color);
			$('.c2 img').css('display','block');
			$('.c1 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c2Color);
            }
		} else if ($(this).hasClass("c3")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c3Color);
			$('.c3 img').css('display','block');
			$('.c1 img, .c2 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c3Color);
            }
		} else if ($(this).hasClass("c4")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c4Color);
			$('.c4 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c4Color);
            }
		} else if ($(this).hasClass("c5")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c5Color);
			$('.c5 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c5Color);
            }
		} else if ($(this).hasClass("c6")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c6Color);
			$('.c6 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c6Color);
            }
		} else if ($(this).hasClass("c7")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c7Color);
			$('.c7 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c7Color);
            }
		} else if ($(this).hasClass("c8")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c8Color);
			$('.c8 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c8Color);
            }
		} else if ($(this).hasClass("c9")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c9Color);
			$('.c9 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c9Color);
            }
		} else if ($(this).hasClass("c10")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c10Color);
			$('.c10 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c10Color);
            }
		}
	});

	//Change the classic to colored theme behavior
	$('#pallet-color span').click(function() {
		palletColors();
	});

	//Classic button
	$('.classic').click(function() {
		backToClassic();
        if ($('.t24').hasClass('off')) {
            clock1(colorSwitch);
        }
	});
	 
    //Custom Button
    function changeColor(choosenColor){
        $('.custom').css("background","rgba(0, 0, 0, 0.3)");
        $('#circle').fadeIn('fast');
        $('#i1').attr("src","media/1.svg");
        $('#i2').attr("src","media/2.svg");
        $('#i3').attr("src","media/3.svg");
        $('#i4').attr("src","media/4.svg");
        $('#i5').attr("src","media/5.svg");
        $('.classic .switch div').animate({right: 0},300);
        $('.classic .switch').css('background-color','rgba(0, 0, 0, 0.1)');
        $('#animation, #circle, #alarm-settings, .alarm-popup').css("background",choosenColor);
        $('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
        $('.custom').css('background','rgba(0, 0, 0, 0.4)');
    }
    
    $('.custom').click(function() {
        var color = prompt("Set the color in hexa decimal (with sharp #) !");
        if (color === null) {
               
        } else {
                changeColor(color);
                localStorage.setItem("CHOOSEN_COLOR", color);
            if ($('.t24').hasClass('off')) {
                clock1(color);
            }
        }

    });

    if (localStorage.getItem("CHOOSEN_COLOR")) {
        var savedColor = localStorage.getItem("CHOOSEN_COLOR");
        changeColor(savedColor);
        if ($('.t24').hasClass('off')) {
            clock1(savedColor);
        }
    }


	//Clock changing
	$('.t24').click(function() {
		if ($('.t24').hasClass('on')) {
			if (localStorage.getItem("c1") === 'true') {
            clock1(c1Color);
        }
        else if (localStorage.getItem("c2") === 'true') {
            clock1(c2Color);
        }
        else if (localStorage.getItem("c3") === 'true') {
            clock1(c3Color);
        }
        else if (localStorage.getItem("c4") === 'true') {
            clock1(c4Color);
        }
        else if (localStorage.getItem("c5") === 'true') {
            clock1(c5Color);
        }
        else if (localStorage.getItem("c6") === 'true') {
            clock1(c6Color);
        }
        else if (localStorage.getItem("c7") === 'true') {
            clock1(c7Color);
        }
        else if (localStorage.getItem("c8") === 'true') {
            clock1(c8Color);
        }
        else if (localStorage.getItem("c9") === 'true') {
            clock1(c9Color);
        }
        else if (localStorage.getItem("c10") === 'true') {
            clock1(c10Color);
        }
        else if (localStorage.getItem('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10') === null) {
		    clock1(colorSwitch);
	    }
		} 
		else {
			clock2();
		}
		
	});



	//Alarm
	$('.btn').click(function() {
		$('#alarm').addClass('hide');
		$('#alarm').removeClass('show');
		$('#alarm-settings').fadeOut('slow');
		$('.alarm-popup img').css('-webkit-animation','play 0.2s linear infinite alternate');
		$('.alarm-popup img').css('animation','play 0.2s linear infinite alternate');
		$('#settings').css('z-index','100');
		$('#alarm').fadeOut('fast');

		
		var alarmSeconds = $('.seconds input').val() * 1000;
		var alarmMinutes = $('.minutes input').val() * 60000;
		var alarmHours = $('.hours input').val() * 3600000;

		var timeLeft = alarmSeconds + alarmMinutes + alarmHours;

		var alarmSound = new Audio('media/alarm.ogg');

		var ring = function () {
			$('#alarm').css('display','none');

			setTimeout(function(){		
				alarmSound.loop = true;
				alarmSound.play();

			},timeLeft);

			setTimeout(function(){		
				$('.alarm-popup').css('display','block');

			},timeLeft);
		};

		if (timeLeft !== 0, timeLeft !== null) {
			ring();
		}

		$('.btn-close').click(function() {
			$('.alarm-popup').fadeOut('slow', function() {
				$('#alarm-settings').css('display','none');
			});
			$('#alarm').addClass('show');
			$('#alarm').css('display','block');		
			$('.alarm-popup img').css('-webkit-animation','0');
			$('.alarm-popup img').css('animation','0');
			$('#alarm').fadeIn('fast');
			alarmSound.pause();
		});

	});

});

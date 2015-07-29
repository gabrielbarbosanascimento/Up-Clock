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


-----------------------SUMARY-------------------------
1.0 - localStorage (must be the first code)
------------------------------------------------------
1.1 - General Scripts
------------------------------------------------------
1.2 - Timer Scripts
------------------------------------------------------

*/

$(document).ready(function () {

    /*-----------------LocalStorage Codes----------------*/
    //
    
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
        if (localStorage.getItem('color')) {
            clock1(localStorage.getItem('color'));
        } else {
            clock1(colorSwitch);
        }
    } else if (localStorage.getItem('clock2') === 'true') {
        clock2();
    }

    //Color Saving codes

    //Backing to normal
    $('.classic').click(function () {
        removeItem('color');
        removeItem('CHOOSEN_COLOR');
    });

    if (localStorage.getItem('color') === null) {
        backToClassic();
    }

    //Colors
    $('#pallet-color span').click(function () {
        var getColorFromPallet = $(this).attr("data-color");
        setItem('color', getColorFromPallet);
        removeItem('CHOOSEN_COLOR');
    });

    //Colors load
    if (localStorage.getItem('color')) {
        $('#animation, #circle, .alarm-popup').css('background', localStorage.getItem('color'));
        $('.btn').css('color', localStorage.getItem('color'));
        palletColors();
    }

    if (localStorage.getItem('CHOOSEN_COLOR')) {
        var savedColor = localStorage.getItem('CHOOSEN_COLOR');
        changeColor(savedColor);
        if ($('.t24').hasClass('on')) {
            clock1(savedColor);
        }
    }


    /*-----------------General Scripts----------------*/
    //
    //start up clock animation
    $('#ur, #clock').addClass('animated bounce');

    //Gear button to open the configurations
    $('#settings').click(function () {
        if ($('#settings').hasClass('show')) {
            $('#settings').addClass('hide');
            $('#settings').removeClass('show');
            $('#configuration').animate({
                top: 200
            }, 200);
            $('#ur').animate({
                top: 155
            }, 200);
            $('#clock').animate({
                top: 160
            }, 200);
            
            if ($('#alarm').hasClass('hide')) {
                $('#card').animate({marginLeft: '-558px'}, 200, function() {
                    $('#alarm-settings').css('display','none');
                });
                $('#alarm').addClass('show');
                $('#alarm').removeClass('hide');
                $('#settings').css('z-index', '100');
                
            }
        } else {
            $('#settings').addClass('show');
            $('#settings').removeClass('hide');
            $('#configuration').animate({
                top: 442
            }, 200);
            $('#ur').animate({
                top: 200
            }, 200);
            $('#clock').animate({
                top: 206
            }, 200);
        }
    });

    $('#alarm').click(function () {
        if ($('#alarm').hasClass('show')) {
            $('#alarm-settings').css('display','block');
            $('#card').animate({marginLeft: '-168px'}, 200);
            $('#alarm').removeClass('show');
            $('#alarm').addClass('hide');
            $('#settings').css('z-index', '98');
            
            if ($('#settings').hasClass('hide')) {
                $('#settings').addClass('show');
                $('#settings').removeClass('hide');
                $('#configuration').animate({
                top: 442
                }, 200);
                $('#ur').animate({
                top: 200
                }, 200);
                $('#clock').animate({
                top: 206
                }, 200);
            }
        } else {
            $('#card').animate({marginLeft: '-558px'}, 200, function() {
                $('#alarm-settings').css('display','none');
            });
            $('#alarm').addClass('show');
            $('#alarm').removeClass('hide');
            $('#settings').css('z-index', '100');
        }
    });

    //Color changes

    $('#pallet-color span').click(function() {
        var getColorFromPallet = $(this).attr("data-color");
        $('#animation, #circle, .alarm-popup').css('background', getColorFromPallet);
        $('.btn').css('color', getColorFromPallet);
        if ($('.t24').hasClass('on')) {
            clock1(getColorFromPallet);
        }
        palletColors();
        setItem('color', getColorFromPallet);
    });


    //Classic button
    $('.classic').click(function () {
        backToClassic();
        if ($('.t24').hasClass('on')) {
            clock1(colorSwitch);
        }
    });

    //Custom Button
    function changeColor(choosenColor) {
        $('.custom').css('background', 'rgba(0, 0, 0, 0.3)');
        $('#circle').fadeIn('fast');
        $('#i1').attr('src', 'media/1.svg');
        $('#i2').attr('src', 'media/2.svg');
        $('#i3').attr('src', 'media/3.svg');
        $('#i4').attr('src', 'media/4.svg');
        $('#i5').attr('src', 'media/5.svg');
        $('.classic .switch div').animate({
            right: 0
        }, 300);
        $('.classic .switch').css('background-color', 'rgba(0, 0, 0, 0.1)');
        $('#animation, #circle, .alarm-popup').css('background', choosenColor);
        $('.btn').css('color', choosenColor)
        $('.custom').css('background', 'rgba(0, 0, 0, 0.4)');
    }

    $('.custom').click(function () {
        var color = prompt('Put the whole Hexadecimal code of your favourite color (with sharp #) ! \nHow about #8CBF26 ?');
        colorcode_validate(color)

        function colorcode_validate(choosenColor) {
            var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;

            if (choosenColor === null) {
                //If the user enters clicks 'Cancel', do nothing
            } else if (choosenColor == '') {
                //If the user enters enters nothing but clicks 'Ok', do nothing
            } else if (regColorcode.test(choosenColor) == false) {
                alert('The code you entered is invalid. \nVisit http://html-color-codes.info/ to get correct hexadecimal code of colors.');
            } else {
                changeColor(choosenColor);
                setItem('CHOOSEN_COLOR', choosenColor);
                removeItem('color');
                if ($('.t24').hasClass('on')) {
                    clock1(choosenColor);
                }
            }
        }
    });

    //Clock changing
    $('.t24').click(function () {
        var savedColor = localStorage.getItem('CHOOSEN_COLOR');

        if ($('.t24').hasClass('on')) {
            if (localStorage.getItem('color')) {
                clock1(localStorage.getItem('color'));
            } else if (localStorage.getItem('CHOOSEN_COLOR')) {
                clock1(savedColor);
            } else {
                clock1(colorSwitch);
            }

        } else {
            clock2();
        }

    });


    /*-----------------Timer Scripts----------------*/
    //
    //Alarm
    $('.btn').click(function () {
        $('#alarm').addClass('hide');
        $('#alarm').removeClass('show');
        $('#alarm-settings').fadeOut('slow');
        $('.alarm-popup img').css('-webkit-animation', 'play 0.2s linear infinite alternate');
        $('.alarm-popup img').css('animation', 'play 0.2s linear infinite alternate');
        $('#settings').css('z-index', '100');
        $('#alarm').fadeOut('fast');


        var alarmSeconds = $('.seconds input').val() * 1000;
        var alarmMinutes = $('.minutes input').val() * 60000;
        var alarmHours = $('.hours input').val() * 3600000;

        var timeLeft = alarmSeconds + alarmMinutes + alarmHours;

        var alarmSound = new Audio('media/alarm.ogg');

        var ring = function () {
            $('#alarm').css('display', 'none');

            setTimeout(function () {
                alarmSound.loop = true;
                alarmSound.play();

            }, timeLeft);

            setTimeout(function () {
                $('.alarm-popup').css('display', 'block');

            }, timeLeft);
        };

        if (timeLeft !== 0, timeLeft !== null) {
            ring();
        }

        $('.btn-close').click(function () {
            $('.alarm-popup').fadeOut('slow', function () {
                $('#card').animate({marginLeft: '-558px'}, 250, function() {
                $('#alarm-settings').css('display','none');
            });
            });
            $('#alarm').css('display', 'block');
            $('.alarm-popup img').css('-webkit-animation', '0');
            $('.alarm-popup img').css('animation', '0');
            $('#alarm').fadeIn('fast');
            $('#alarm').addClass('show');
            $('#alarm').removeClass('hide');
            $('#settings').css('z-index', '100');
            alarmSound.pause();
        });

    });


});

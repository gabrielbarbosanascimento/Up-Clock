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

    //Color Saving codes

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
        $('#animation, #circle, .alarm-popup').css('background', c1Color);
        $('.btn').css('color', c1Color);
        palletColors();
        $('.c1 img').css('display', 'block');
    }
    if (localStorage.getItem('c2') === 'true') {
        $('#animation, #circle, .alarm-popup').css('background', c2Color);
        $('.btn').css('color', c2Color);
        palletColors();
        $('.c2 img').css('display', 'block');
    }

    if (localStorage.getItem('c3') === 'true') {
        $('#animation, #circle, .alarm-popup').css('background', c3Color);
        $('.btn').css('color', c3Color);
        palletColors();
        $('.c3 img').css('display', 'block');
    }

    if (localStorage.getItem('c4') === 'true') {
        $('#animation, #circle, .alarm-popup').css('background', c4Color);
        $('.btn').css('color', c4Color);
        palletColors();
        $('.c4 img').css('display', 'block');
    }

    if (localStorage.getItem('c5') === 'true') {
        $('#animation, #circle, .alarm-popup').css('background', c5Color);
        $('.btn').css('color', c5Color);
        palletColors();
        $('.c5 img').css('display', 'block');
    }

    if (localStorage.getItem('c6') === 'true') {
        $('#animation, #circle, .alarm-popup').css('background', c6Color);
        $('.btn').css('color', c6Color);
        palletColors();
        $('.c6 img').css('display', 'block');
    }

    if (localStorage.getItem('c7') === 'true') {
        $('#animation, #circle, .alarm-popup').css('background', c7Color);
        $('.btn').css('color', c7Color);
        palletColors();
        $('.c7 img').css('display', 'block');
    }

    if (localStorage.getItem('c8') === 'true') {
        $('#animation, #circle, .alarm-popup').css('background', c8Color);
        $('.btn').css('color', c8Color);
        palletColors();
        $('.c8 img').css('display', 'block');
    }

    if (localStorage.getItem('c9') === 'true') {
        $('#animation, #circle, .alarm-popup').css('background', c9Color);
        $('.btn').css('color', c9Color);
        palletColors();
        $('.c9 img').css('display', 'block');
    }

    if (localStorage.getItem('c10') === 'true') {
        $('#animation, #circle, .alarm-popup').css('background', c10Color);
        $('.btn').css('color', c10Color);
        palletColors();
        $('.c10 img').css('display', 'block');
    }

    if (localStorage.getItem('CHOOSEN_COLOR')) {
        var savedColor = localStorage.getItem('CHOOSEN_COLOR');
        changeColor(savedColor);
        if ($('.t24').hasClass('off')) {
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
    $('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10').click(function () {
        if ($(this).hasClass('c1')) {
            $('#animation, #circle, .alarm-popup').css('background', c1Color);
            $('.btn').css('color', c1Color);
            $('.c1 img').css('display', 'block');
            $('.c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display', 'none');
            if ($('.t24').hasClass('off')) {
                clock1(c1Color);
            }
        } else if ($(this).hasClass('c2')) {
            $('#animation, #circle, .alarm-popup').css('background', c2Color);
            $('.btn').css('color', c2Color);
            $('.c2 img').css('display', 'block');
            $('.c1 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display', 'none');
            if ($('.t24').hasClass('off')) {
                clock1(c2Color);
            }
        } else if ($(this).hasClass('c3')) {
            $('#animation, #circle, .alarm-popup').css('background', c3Color);
            $('.btn').css('color', c3Color);
            $('.c3 img').css('display', 'block');
            $('.c1 img, .c2 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display', 'none');
            if ($('.t24').hasClass('off')) {
                clock1(c3Color);
            }
        } else if ($(this).hasClass('c4')) {
            $('#animation, #circle, .alarm-popup').css('background', c4Color);
            $('.btn').css('color', c4Color);
            $('.c4 img').css('display', 'block');
            $('.c1 img, .c2 img, .c3 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display', 'none');
            if ($('.t24').hasClass('off')) {
                clock1(c4Color);
            }
        } else if ($(this).hasClass('c5')) {
            $('#animation, #circle, .alarm-popup').css('background', c5Color);
            $('.btn').css('color', c5Color);
            $('.c5 img').css('display', 'block');
            $('.c1 img, .c2 img, .c3 img, .c4 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display', 'none');
            if ($('.t24').hasClass('off')) {
                clock1(c5Color);
            }
        } else if ($(this).hasClass('c6')) {
            $('#animation, #circle, .alarm-popup').css('background', c6Color);
            $('.btn').css('color', c6Color);
            $('.c6 img').css('display', 'block');
            $('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display', 'none');
            if ($('.t24').hasClass('off')) {
                clock1(c6Color);
            }
        } else if ($(this).hasClass('c7')) {
            $('#animation, #circle, .alarm-popup').css('background', c7Color);
            $('.btn').css('color', c7Color);
            $('.c7 img').css('display', 'block');
            $('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c8 img, .c9 img, .c10 img').css('display', 'none');
            if ($('.t24').hasClass('off')) {
                clock1(c7Color);
            }
        } else if ($(this).hasClass('c8')) {
            $('#animation, #circle, .alarm-popup').css('background', c8Color);
            $('.btn').css('color', c8Color);
            $('.c8 img').css('display', 'block');
            $('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c9 img, .c10 img').css('display', 'none');
            if ($('.t24').hasClass('off')) {
                clock1(c8Color);
            }
        } else if ($(this).hasClass('c9')) {
            $('#animation, #circle, .alarm-popup').css('background', c9Color);
            $('.btn').css('color', c9Color);
            $('.c9 img').css('display', 'block');
            $('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c10 img').css('display', 'none');
            if ($('.t24').hasClass('off')) {
                clock1(c9Color);
            }
        } else if ($(this).hasClass('c10')) {
            $('#animation, #circle, .alarm-popup').css('background', c10Color);
            $('.btn').css('color', c10Color);
            $('.c10 img').css('display', 'block');
            $('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img').css('display', 'none');
            if ($('.t24').hasClass('off')) {
                clock1(c10Color);
            }
        }
    });

    //Change the classic to colored theme behavior
    $('#pallet-color span').click(function () {
        palletColors();
    });

    //Classic button
    $('.classic').click(function () {
        backToClassic();
        if ($('.t24').hasClass('off')) {
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
        $('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display', 'none');
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
                if ($('.t24').hasClass('off')) {
                    clock1(choosenColor);
                }
            }
        }
    });

    //Clock changing
    $('.t24').click(function () {
        var savedColor = localStorage.getItem('CHOOSEN_COLOR');

        if ($('.t24').hasClass('on')) {
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
            } else if (localStorage.getItem('CHOOSEN_COLOR')) {
                clock1(savedColor);
            } else if (localStorage.getItem('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, CHOOSEN_COLOR') === null) {
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

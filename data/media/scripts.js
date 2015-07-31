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


-----------------------------------SUMARY-----------------------------------------
1.0 - Angular Code/APLICATION DATA
----------------------------------------------------------------------------------
1.2 - Basic Functions 
----------------------------------------------------------------------------------
1.3 - localStorage (must be right before general scripts !important)
----------------------------------------------------------------------------------
1.4 - General Scripts
----------------------------------------------------------------------------------
1.5 - Timer Scripts
----------------------------------------------------------------------------------

*/

/*-----------------Angular Code/APLICATION DATA----------------*/
(function(){
    angular.module('upclock', [])
    .controller('windowController', ['$scope', function($scope) {
        $scope.data = [
            {id: 'close', image: 'media/close.svg'},
            {id: 'minimize', image: 'media/minimize.svg'},
            {id: 'alarm', image: 'media/alarm.svg'},
            {id: 'settings', image: 'media/settings.svg'}
        ];
    }])
    .controller('animationController', ['$scope', function($scope){
        $scope.data = [
            {id: 'i1', image: 'media/1.png'},
            {id: 'i2', image: 'media/2.png'},
            {id: 'i3', image: 'media/3.png'},
            {id: 'i4', image: 'media/4.png'},
            {id: 'i5', image: 'media/5.png'},
        ];
    }])
    .controller('alarmSettingsController', ['$scope', function($scope) {
        $scope.data = [
            {id: 'hours', name: 'Hours'},
            {id: 'minutes', name: 'Minutes'},
            {id: 'seconds', name: 'Seconds'}
        ];
    }]);
})();

/*-----------------Basic Functionss----------------*/

//CLOCK DENIFINITIONS MINIFIED/
function firstclock(){UR_Nu=new Date,UR_Indhold=showFilled(UR_Nu.getHours())+":"+showFilled(UR_Nu.getMinutes())+":"+showFilled(UR_Nu.getSeconds()),document.getElementById("ur").innerHTML=UR_Indhold,setTimeout("firstclock()",1e3)}function showFilled(e){return e>9?""+e:"0"+e}function checklength(e){return 10>e&&(e="0"+e),e}function clock(){var e,t=new Date,c=checklength(t.getHours()),n=checklength(t.getMinutes()),o=checklength(t.getSeconds()),l=1;1==l&&(c>=12?(12==c?c=12:c-=12,e=c+":"+n+":"+o+" PM"):12>c&&(0==c&&(c=12),e=c+":"+n+":"+o+" AM")),0==l&&(e=c+":"+n+":"+o); document.getElementById("clock").innerHTML=e,setTimeout("clock();",500)}firstclock(),clock();
//---------------

function updateTitle(val) {
    document.title = val;
    localStorage.setItem("opacity", val);
    var sliderVal = (val*100)-2+('%');
    if (val < 1 && val >= 0.65) {
        $('.slider div').css('width', sliderVal);
    } else if (val < 0.65) {
        sliderVal =(val*100)-5+('%');
        $('.slider div').css('width', sliderVal);
    } else if (val > 0.95) {
        $('.slider div').css('width', '100%');
    }
}
function opacity() {
    if (!localStorage.getItem("opacity")) {
        localStorage.setItem("opacity", 1);
    }
    $('input[type=range]').val(localStorage.getItem("opacity"));
    document.title = localStorage.getItem("opacity");
    document.title = 'enable_drag';
}

function backToClassic() {
    $('.classic .switch div').animate({
        right: '-20px'
    }, 300);
    $('.classic .switch').css('background-color', colorSwitch);
    $('#circle').fadeOut('fast');
    $('#i1').attr("src", "media/1.png");
    $('#i2').attr("src", "media/2.png");
    $('#i3').attr("src", "media/3.png");
    $('#i4').attr("src", "media/4.png");
    $('#i5').attr("src", "media/5.png");
    $('#animation, .alarm-popup').css("background", "#2f0916");
    $('.btn').css("color", "#2f0916");
    $('#pallet-color span img').css('display', 'none');
    $('.custom').css("background", "rgba(0, 0, 0, 0.2)");
}

function loadSlider(val) {
    var valTil = (localStorage.getItem("opacity") * 100) - 2;
    var sliderVal = valTil + ('%');
    var a = localStorage.getItem("opacity");
    if (a < 1 && a >= 0.65) {
        $('.slider div').css('width', sliderVal);
    } else if (a < 0.65) {
        sliderVal = (valTil - 5) + ('%');
        $('.slider div').css('width', sliderVal);
    } else if (a > 0.95) {
        $('.slider div').css('width', '100%');
    }
}

loadSlider();

//Color constant
var colorSwitch = 'rgb(138, 85, 103)';

//Spans of the pallet of color
//it returns to the colored theme
function palletColors() {
    $('#circle').fadeIn('fast');
    $('#i1').attr("src", "media/1.svg");
    $('#i2').attr("src", "media/2.svg");
    $('#i3').attr("src", "media/3.svg");
    $('#i4').attr("src", "media/4.svg");
    $('#i5').attr("src", "media/5.svg");
    $('.classic .switch div').animate({
        right: 0
    }, 200);
    $('.classic .switch').css('background-color', 'rgba(0, 0, 0, 0.1)');
    $('.custom').css("background", "rgba(0, 0, 0, 0.2)");
}

//Variable that change the clocks
function clock1(color) {
    $('.t24 .switch div').animate({
        right: '-20px'
    }, 300);
    $('.t24 .switch').css('background-color', color);
    $('#clock').fadeOut('fast');
    $('#ur').fadeIn('fast');
    $('.t24').addClass('on');
    $('.t24').removeClass('off');
}

function clock2() {
    $('.t24 .switch div').animate({
        right: '0'
    }, 300);
    $('.t24 .switch').css('background-color', 'rgba(0, 0, 0, 0.1)');
    $('#clock').fadeIn('fast');
    $('#ur').fadeOut('fast');
    $('.t24').addClass('off');
    $('.t24').removeClass('on');
}

function setItem(x, y) {
    localStorage.setItem(x, y);
}

function removeItem(x, y) {
    localStorage.removeItem(x, y);
}

$(document).ready(function() {
    //STARTUP ANIMATION MINIFIED
    $('#alarm, #settings').addClass('show');
    $("#close").animate({top:0},100,function(){$("#minimize").animate({top:0},100,function(){$("#settings, #alarm").animate({top:0},200,function(){$("#circle").addClass("animated pulse")})})});

    /*-----------------LocalStorage Codes----------------*/
    //

    $(".t24").click(function() {
        if ($('.t24').hasClass('off')) {
            setItem('clock1', 'true');
            removeItem('clock2', 'true');
        } else {
            setItem('clock2', 'true');
            removeItem('clock1', 'true');
        }
    });

    if (localStorage.getItem('clock1') === 'true') {
        if (localStorage.getItem('color')) {
            clock1(localStorage.getItem('color'));
        } else {
            clock1(colorSwitch);
        }
    } else {
        clock2();
    }

    //Color Saving codes

    //Backing to normal
    $('.classic').click(function() {
        removeItem('color');
        removeItem('CHOOSEN_COLOR');
    });

    if (localStorage.getItem('color') === null) {
        backToClassic();
    }

    //Colors
    $('#pallet-color span').click(function() {
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
    $('#settings').click(function() {
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
                $('#card').animate({
                    marginLeft: '-558px'
                }, 200, function() {
                    $('#alarm-settings').css('display', 'none');
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

    $('#alarm').click(function() {
        if ($('#alarm').hasClass('show')) {
            $('#alarm-settings').css('display', 'block');
            $('#card').animate({
                marginLeft: '-168px'
            }, 200);
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
            $('#card').animate({
                marginLeft: '-558px'
            }, 200, function() {
                $('#alarm-settings').css('display', 'none');
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
    $('.classic').click(function() {
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

    $('.custom').click(function() {
        var color = prompt('Put the whole Hexadecimal code of your favourite color (with sharp #) ! \nHow about #8CBF26 ?');
        colorcode_validate(color)

        function colorcode_validate(choosenColor) {
            var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;

            if (choosenColor === null || choosenColor === '') {
                //If the user enters clicks 'Cancel', do nothing or  clicks 'Ok', do nothing
            } else if (regColorcode.test(choosenColor) === false) {
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
    $('.t24').click(function() {
        var savedColor = localStorage.getItem('CHOOSEN_COLOR');

        if ($('.t24').hasClass('off')) {
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
    $('.btn').click(function() {
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

        var ring = function() {
            $('#alarm').css('display', 'none');

            setTimeout(function() {
                alarmSound.loop = true;
                alarmSound.play();

            }, timeLeft);

            setTimeout(function() {
                $('.alarm-popup').css('display', 'block');

            }, timeLeft);
        };

        if (timeLeft !== 0 || timeLeft !== null) {
            ring();
        }

        $('.btn-close').click(function() {
            $('.alarm-popup').fadeOut('slow', function() {
                $('#card').animate({
                    marginLeft: '-558px'
                }, 250, function() {
                    $('#alarm-settings').css('display', 'none');
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
/*
http://jsfiddle.net/YJG79/16/
http://jsfiddle.net/zrm9u52h/5/
https://jqueryui.com/draggable/
*/
/*var timer = {
	start: function () {},
	stop: function () {},
	clear: function () {},
	save: function () {},
};


timer.start();*/

$(document).ready(function () {
        $("#imgInput").change(function () {
            readURL(this);
        });
		Cut('3.jpg');
		
		console.log($('.result').find('.part'));
});


function readURL(input) {

            if (input.files && input.files[0]) {
                let reader = new FileReader(); //конструктор FileReader

                reader.onload = function (e) { //Обработчик для события load.Cрабатывает при каждом успешном завершении операции чтения.
				
					//$('.input-image').attr('src', e.target.result);
					
					Cut(e.target.result);
                };

                reader.readAsDataURL(input.files[0]); //чтение содержимого
            }
        }

function Cut(imageSrc) {
    //$(function () {
		debugger;
        var PARTS = 5;
        var PARTS2 = 4;
        var imgParts = $('.imgParts img');

        imgParts.css('visibility', 'visible');
        var container = $('.result');
        //var imageSrc = imgParts.attr('src');
        if (container.attr('data-src') != imageSrc) {
            $('.boxshadow .result').css('box-shadow', 'none');
            container.fadeOut('fast');
            container.css('visibility', 'hidden');
            container.show();
            container.html('');
            container.attr('data-src', imageSrc);
            var parts = PARTS;
            var parts2 = PARTS2;
            var image = $('<img>');
            image.attr('id', 'mainImg');
            image.attr('src', imageSrc);
            image.css('display', 'none');
            container.append(image);
            var imageHeight = image.height();
            var imageWidth = image.width();
            var partHeight = imageHeight / parts;
            var partWidth = imageWidth / parts2;
            for (var vpart = 0; vpart < parts; vpart++) {
                for (var hpart = 0; hpart < parts2; hpart++) {
                    var div = $('<div>');
                    var posV = vpart * partHeight * -1;
                    var posH = hpart * partWidth * -1;
                    div.css({
                        height: partHeight,
                        width: partWidth
                    });
                    div.css('background-image', "url(" + imageSrc + ")");
                    div.css('background-position', posH + 'px' + ' ' + posV + 'px');
                    var divParent = $('<div>');
                    divParent.attr('id', vpart + '-' + hpart);
                    divParent.addClass('part');
                    divParent.append(div);
                    container.append(divParent);
                }
                var divClear = $('<div></div>');
                divClear.css('clear', 'both');
                container.append(divClear);
            }
            var totalResult = imageWidth + (parts * 10);
            container.css('width', totalResult + 'px');
            container.hide();
            container.css('visibility', 'visible');
            container.fadeIn('fast');
        }
    //})
};


function myChange(n, m){

    //меняются местами значения на кнопках n и m
    var f = document.myForm.elements;
    //alert(f[0].value);
    var f0 = f[n].value;
    f[n].value = f[m].value;
    f[m].value = f0;
}


let start;
start = new Date;

setInterval(function() {
    $('#Timer').text((new Date - start) / 1000 + " Секунд");
}, 1000);

//объявляем переменные
/*
var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
//очистка секундомера
function ClearСlock() { 
	clearTimeout(clocktimer); 
	h=1;m=1;tm=1;s=0;ts=0;ms=0; 
	init=0;
	readout='00:00:00.00'; 
	document.MyForm.stopwatch.value=readout; 
} 
//старт
function StartTIME() { 
	var cdateObj = new Date(); 
	var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
	if (t>999) { s++; } 
	if (s>=(m*base)) { 
		ts=0; 
		m++; 
	} else { 
		ts=parseInt((ms/100)+s); 
		if(ts>=base) { ts=ts-((m-1)*base); } 
	} 
	if (m>(h*base)) { 
		tm=1; 
		h++; 
	} else { 
		tm=parseInt((ms/100)+m); 
		if(tm>=base) { tm=tm-((h-1)*base); } 
	} 
	ms = Math.round(t/10); 
	if (ms>99) {ms=0;} 
	if (ms==0) {ms='00';} 
	if (ms>0&&ms<=9) { ms = '0'+ms; } 
	if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
	dm=tm-1; 
	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
	dh=h-1; 
	if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
	readout = dh + ':' + dm + ':' + ds + '.' + ms; 
	document.MyForm.stopwatch.value = readout; 
	clocktimer = setTimeout("StartTIME()",1); 
} 
//Запуски и остановка
function StartStop() { 
	if (init==0){ 
		ClearСlock();
		dateObj = new Date(); 
		StartTIME(); 
		init=1; 
	} else { 
		clearTimeout(clocktimer);
		init=0;
	} 
} 

<form name="MyForm" id="forma">
	<input type="button" value="Обнулить" onclick="ClearСlock()">
	<input name="stopwatch" size=10 value="00:00:00.00">
	<input type="button" value="Запуск/Остановить" onclick="StartStop()">
</form>
*/

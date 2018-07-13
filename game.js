var m = 0;
var x = 0;
var z = 0;

$(function divide() {
    var PARTS = 4;
    var imgParts = $('.imgParts img');
    
    imgParts.css('visibility', 'visible');
    var container = $('.result');
    var imageSrc = imgParts.attr('src');
    if (container.attr('data-src') != imageSrc) {
        $('.boxshadow .result').css('box-shadow', 'none');
        container.fadeOut('fast');
        container.css('visibility', 'visible');
        container.show();
        container.html('');
        container.attr('data-src', imageSrc);
        var parts = PARTS;
        var image = $('<img>');
        image.attr('id', 'mainImg');
        image.attr('src', imageSrc);
        image.css('display', 'none');
        container.append(image);
        var imageHeight = image.height();
        var imageWidth = image.width();
        var partHeight = imageHeight / parts;
        var partWidth = imageWidth / parts;
        //for (z = 0; z < 4*4; z++) {
        for (var vpart = 0; vpart < parts; vpart++) {
            for (var hpart = 0; hpart < parts; hpart++) {
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
        /*shb[z] = divParent;
        }*/
        var totalResult = imageWidth + (parts * 10);
        container.css('width', totalResult + 'px');
        container.hide();
        container.css('visibility', 'visible');
        container.fadeIn('fast');
    }
})

function readURL(e) {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        $(reader).load(function(e) { 
            $('#upload-img').attr('src', e.target.result); 
        });
        reader.readAsDataURL(this.files[0]);
    }
}
$("#upload").change(readURL);








    function hod()
    {
        m++;
        document.getElementById("steps").innerHTML = "Количество шагов: " + m;
        return m;
    }
    
    function igra(a)
    {
        var ev;
        var e = ev || window.event, o = e.target || e.srcElement;
        if (o.tagName != 'INPUT') 
            return;
        var obj = document.getElementById('m15'), 
            btn = obj.getElementsByTagName('input');
        for (var sos = o.lang.split ('-'), j = k = 0, lj = sos.length; j < lj; j++)
           if (btn [sos [j]].value < 0) {k = 1; break}
        if (!k) return;
        btn [sos [j]].style.visibility = 'visible'; 
        btn [sos [j]].value = o.value;
        o.style.visibility = 'hidden';
        o.value = -1;
        hod();
        for (var j = 0; j < (a-1); j++) 
            if (btn[j].value != j+1) 
                return;            
        obj.onclick = null; 
        alert('Вы решили головоломку! Нажмите "ок"');     
        stop();          
    }
    
    function simple_timer(sec, block, direction) 
    {
        var hour = 0;
        var time = sec;
        direction = direction || false;
                 
        var hour = parseInt(time / 3600);
        if ( hour < 1 ) hour = 0;
        time = parseInt(time - hour * 3600);
        if ( hour < 10 ) hour = '0'+hour;
     
        var minutes = parseInt(time / 60);
        if ( minutes < 1 ) minutes = 0;
        time = parseInt(time - minutes * 60);
        if ( minutes < 10 ) minutes = '0'+minutes;
     
        var seconds = time;
        if ( seconds < 10 ) seconds = '0'+seconds;        
     
        block.innerHTML = "Время игры: " + hour + ':' + minutes + ':' + seconds;        
        x = (hour*60*60)+(minutes*60)+seconds;        

     
        if ( direction ) {sec++; setTimeout(function(){ simple_timer(sec, block, direction); }, 1000);} 
        else {
            sec--;
            if ( sec > 0 ) {setTimeout(function(){ simple_timer(sec, block, direction); }, 1000);} 
            else {alert('Время вышло!');}
        }                 
    }
    
    function start_timer() 
    {
        var block = document.getElementById('sample_timer');        
        simple_timer(0, block, true);               
    }

    function stop()
    {             
        document.getElementById('reset').style.display = "none";        
        document.getElementById('sample_timer').style.display = "none";
        document.getElementById('steps').style.display = "block";
        document.getElementById('rating').style.display = "block";
        document.getElementById('m15').style.display = "none";          
        document.getElementById('ok').style.display = "block";               

        var maxTimeoutID = setTimeout(function() { return; }, 1000);

        do {
            clearTimeout(maxTimeoutID);
            maxTimeoutID--;
        }   while (maxTimeoutID > 0);  
        
        rate();
    }
        
    function ok()
    {
        location.reload();
    }

    function rate()
    {               
        var r = 1000/x*1000/m;   
        r = r.toFixed(0);          
        document.getElementById('rating').innerHTML = "Ваш рейтинг: " + r;
        
    }   


    function start_game(a,b,c)
    {     
        document.getElementById('number').style.display = "none";
        document.getElementById('start3').style.display = "none";
        document.getElementById('start4').style.display = "none";
        document.getElementById('start5').style.display = "none"; 
        document.getElementById('rating').style.display = "none";       
        document.getElementById('reset').style.display  = "none";                        
        document.getElementById('sample_timer').style.display = "block";        
        document.getElementById('steps').style.display = "block"; 
        document.getElementById('ok').style.display = "block"; 
        
        start_timer();               
        
        (function ()
        {
            shb = document.createElement ('input'); 

            shb.type = 'button';
            shb.style.cssText = 'height: 123px; width: 123px; font-weight: bold; font-size: 40px ';

            for (var obj = document.getElementById('m15'), btn = new Array (), j = 0; j < a; j++)
            {
                btn [j] = obj.appendChild(shb.cloneNode (1)); 
                if (!((j + 1) % b)) 
                    obj.appendChild(document.createElement('br'));               
            }
            btn [j - 1].style.visibility = 'hidden'; 
            btn [j - 1].value = -1;
            var rnd = new Array (), 
                rsh = 1; 
               
            obj.onclick = function() {
                igra(a); 
            };          
            
            while (rsh % c)
            {
                for (var j = 0; j < a-1; j++) rnd [j] = j + 1;///////
                rnd.sort (new Function ('x', 'y', 'return Math.random () - Math.random ()'));
                for (var rsh = j = 0; j < a-2; rsh += s, j++)
                    for (var s = 0, k = j + 1; k < a-1; k++) 
                        if (rnd [k] < rnd [j]) 
                            s++;
            }            

            for (var j = 0; j < a; j++)
            {                              
                if (j < a-1) 
                    btn [j].value = rnd[j];

                var lng = new Array ();
                if (j - 1 >= 0 && j % b)       
                    lng [lng.length] = j - 1;
                    
                if (j + 1 < a && (j + 1) % b) 
                    lng [lng.length] = j + 1;
                    
                if (j - b >= 0)                
                    lng [lng.length] = j - b;
                    
                if (j + b < a)                
                    lng [lng.length] = j + b;
                    
                btn [j].lang = lng.sort ().join ('-');   
            }            
        }) ();
    }    
        

        function answ()
        {
            value0 = document.getElementById('name').value[0];   
            value2 = document.getElementById('name').value[2];     
            value5 = document.getElementById('name').value[5];       
    
            if ((value0!=value5) || (value2!='н'))
                alert("Ошибка!");
            else {
                var a = value0*value2;
                var b = value0;
                if ((value0%2)==0)
                    var c = 2;
                else if ((value0%3)==0)
                    c = 3;
                else 
                    c = value0;   
                start_game(a,b,c);        
            }
    
            /*obj.onclick = function() {
                start_game(a,b,c);
            };  */                   
            
        }

        
        
    
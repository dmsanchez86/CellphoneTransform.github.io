var App = {
    stateCellphone: false,
};

window.onload = function(){
    var cellphone = document.querySelector('.cellphone');
    var iframe = document.querySelector('.cellphone .front iframe');
    var button_start = document.querySelector('.button_start');
    var button_test = document.querySelector('.button_test');
    var body = document.querySelector('.body');
    var btn_switch = document.querySelector('.on_off');
    var position_cellphone = document.querySelectorAll('.panel_left input[type=radio]');
    var panel_left = document.querySelector('.panel_left');

    setTimeout(function(){
        panel_left.className = "panel_left ready";
    },800);
    
    for (var i = 0; i < position_cellphone.length; i++) {
        position_cellphone[i].onchange = function(){
            body.className = 'body ' +this.value;
        };
    }
    
    console.log(position_cellphone);
    
    // click on the button cellphone
    button_start.onclick = function(){
        if(App.stateCellphone) cellphone.className  = 'cellphone';
        else cellphone.className  = 'cellphone active';
        App.stateCellphone = !App.stateCellphone;
    }

    // click on the button change url
    button_test.onclick = function(){
        var url = prompt("Type your URL:", 'http://dmsanchez86.github.io');

        var pattern = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;

        if(url != null || url != undefined){
            if(url.match(pattern))
                iframe.src = url;
            else
                alert("The URL is invalid");
        }else{
            return;
        }
    }

    btn_switch.onclick = function(){
        var state = this.getAttribute('state');
        if(state == 'off'){
            this.className = 'on_off active';
            this.setAttribute('state','on');
            cellphone.className  = 'cellphone active';
        }else{
            this.className = 'on_off inactive';
            this.setAttribute('state','off');
            cellphone.className  = 'cellphone';
        }
    };
    
    btn_switch.onmouseover = function(){
        var state  = this.getAttribute('state');
        if(state == 'off')
            this.className = "on_off inactive hover";
        else
            this.className = "on_off active hover";
    };
    
    btn_switch.onmouseout = function(){
        var state  = this.getAttribute('state');
        if(state == 'off')
            this.className = "on_off inactive";
        else
            this.className = "on_off active";
    };
    
    document.onclick = function(evt){
        var position_X = evt.clientX - 50;
        var position_Y = evt.clientY - 50;
        
        var wave = document.createElement('div');
        
        wave.style.left = position_X + 'px';
        wave.style.top = position_Y + 'px';
        wave.className = 'wave';
        
        body.appendChild(wave);
        
        setTimeout(function(){
            wave.className = 'wave effect';
            setTimeout(function(){
                body.removeChild(wave);
            },300);
        },10);
        
    };
};
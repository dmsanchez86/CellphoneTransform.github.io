window.onload = function(){
    var cellphone = document.querySelector('.cellphone');
    var body = document.querySelector('.body');
    var btn_switch = document.querySelector('.on_off');
    
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
        
        body.style.perspectiveOrigin = 'center';
        body.appendChild(wave);
        
        setTimeout(function(){
            wave.className = 'wave effect';
            setTimeout(function(){
                body.removeChild(wave);
            },600);
            setTimeout(function() {
                body.style.perspectiveOrigin = '67% 44%';
            },2000);
        },10);
        
    };
};
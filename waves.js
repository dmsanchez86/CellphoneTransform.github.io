window.onload = function(){
    // alert('Page Load Correctly!');
    var logo = document.querySelector('.logo');
    var body = document.querySelector('.body');
    var btn_switch = document.querySelector('.on_off');
    
    btn_switch.onclick = function(){
        var state = this.getAttribute('state');
        console.log(state);
        if(state == 'off'){
            this.className = 'on_off active';
            this.setAttribute('state','on');
            logo.className  = 'logo hover';
        }else{
            this.className = 'on_off';
            this.setAttribute('state','off');
            logo.className  = 'logo';
        }
    };
    
    // logo.onmouseover = function(){
    //     this.className = "logo hover";
    //     setTimeout(function(){
    //         body.style.perspectiveOrigin = "center";
    //     },2500);
    // };
    // logo.onmouseout = function(){
    //     this.className = "logo";
    //     setTimeout(function(){
    //         body.style.perspectiveOrigin = "center";
    //     },2500);
    // };
    
    document.onclick = function(evt){
        // alert('Click in document');
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
            },600);
        },10);
        
        console.log(evt);
    };
};
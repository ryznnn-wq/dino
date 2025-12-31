var bggerak = true;
function backroundgerak(){
    if(bggerak == true){
        setTimeout(function(){
        var bg = document.getElementById('backround');
        bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px', ''))-1) + 'px';
        backroundgerak();
        },5);
    }
}
backroundgerak();

window.addEventListener('keyup', function(e){
    if(e.keyCode == 32){
        document.getElementById('player').style.marginTop = "30px";
    }
   setTimeout(function(){
        document.getElementById('player').style.marginTop = "170px";
   },1000);
});
function rintangan(){
    var kotak = document.getElementById('kotak'),
    player = document.getElementById('player');
    setTimeout(function(){
    kotak.style.marginLeft = (parseInt(kotak.style.marginLeft.replace('px', ''))-1) + 'px';

    if(parseInt(kotak.style.marginLeft.replace('px', '')) < -100){
        kotak.style.marginLeft = "600px";
    }

    if(player.offsetTop + 50 >= kotak.offsetTop && 
        player.offsetLeft + 50 >= kotak.offsetLeft &&
        player.offsetTop + 50 <= kotak.offsetTop + 50 && 
        player.offsetLeft <= kotak.offsetLeft + 50){
            alert('game over');
            player.setAttribute('class','freeze');
            bggerak = false;
        }else{
            rintangan();
        }
    },5);
}
rintangan();
var click = 0;
var menu;




    function menuClick() {
        
    if((click%2) == 0){
        abrirMenu();
    }else{
        fecharMenu();
    }
    click++;
}
function abrirMenu(){
    if(screen.width<1000){
        menu.style.display = "inherit";
        menu.style.opacity = "1";
        menu.style.height = "16em";
        menu.style.top = "4em";
    }
 
}
function fecharMenu(){
    if(screen.width<1000){

    menu.style.opacity = "0";
    menu.style.height = "0";
    menu.style.top = "-16em";
    }
}

function menuDesktop(){
    if(screen.width>999){
        menu.style.display = "inherit";
        menu.style.opacity = "1";
        menu.style.height = "4em";
        menu.style.top = "4em";
}
}
window.onload = function(){
    menu  = document.getElementById("collapse");
    abrirMenu();
    fecharMenu();
    menuDesktop();
}

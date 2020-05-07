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
    menu.style.display = "inherit";
    menu.style.opacity = "1";
    menu.style.height = "16em";
    menu.style.top = "4em";
}
function fecharMenu(){
    menu.style.opacity = "0";
    menu.style.height = "0";
    menu.style.top = "-16em";
}
window.onload = function(){
    menu  = document.getElementById("collapse");
    abrirMenu();
    fecharMenu();
}

var click = 0;
var menu;
window.onload = function(){
    menu  = document.getElementById("collapse");
    }


    function menuClick() {
    if((click%2) == 0){
        menu.style.display = "inherit";
        menu.style.opacity = "1";
        menu.style.height = "16em";
        menu.style.top = "4em";
        
    }else{
        menu.style.opacity = "0";
        menu.style.height = "0";
        menu.style.top = "-16em";

    }
    click++;
}
function abrirMenu(){
    menu.style.display = "inherit !important";

}
function fecharMenu(){
    menu.style.display = "none";

}
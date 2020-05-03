var poemas;
var i = 0;

function getPoemas() {

    if (i == 0) {
        var req = new XMLHttpRequest();
        var poemasPath = "assets/poemas/poema.json";

        req.onreadystatechange = function () {
            poemas = JSON.parse(this.responseText);
        };

        req.open("GET", poemasPath, true);
        req.send();
        i++;
    }

}


getPoemas();


function mostrarPoema(id) {
    var poema;
    id = id.split("poema");
    id = id[1];

    document.getElementById("modalPoema").style.display = "block";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";

    for (var i in poemas) {
        if (poemas[i]["id"] == id) {
            poema = poemas[i];
        }
    }
    document.getElementById("poemaTitulo").innerHTML = poema["nome"];
    document.getElementById("poemaTexto").innerHTML = poema["texto"];
    document.getElementById("data").innerHTML = poema["data"];

}
function fecharModal() {
    document.getElementById("modalPoema").style.display = "none";
    document.getElementById("modalResenha").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";


}

function mostrarResenha(){
    document.getElementById("modalResenha").style.display = "block";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";


}

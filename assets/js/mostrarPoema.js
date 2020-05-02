var req = new XMLHttpRequest();
var poemasPath = "assets/poemas/poema.json";
var poemas;

req.onreadystatechange = function() {
       poemas = JSON.parse(this.responseText);
  };

req.open("GET",poemasPath,true);
req.send();




function mostrarPoema(id){
var poema;
id = id.split("poema");
id = id[1];

document.getElementById("modalPoema").style.display = "block";

for(var i in poemas) {
    if(poemas[i]["id"] == id){
      poema = poemas[i];
    }
}
 document.getElementById("poemaTitulo").innerHTML = poema["nome"];
 document.getElementById("poemaTexto").innerHTML =  poema["texto"];
 document.getElementById("data").innerHTML =  poema["data"];

}
function fecharModal(){
    document.getElementById("modalPoema").style.display = "none";

}
var i = 0;
var imagem = [
    "https://i1.wp.com/socientifica.com.br/wp-content/uploads/2019/05/image_7150_1e-Hubble-Legacy-Field.jpg?fit=1920%2C1773&ssl=1",
    "https://img.ibxk.com.br/2020/01/30/30021141299110.jpg?w=1120&h=420&mode=crop&scale=both"
]

setInterval(function(){
    

    //document.getElementById("carrosel").src = imagem[i];
    document.getElementById("main-image").style.backgroundImage = "url('"+imagem[i]+"')";
        i++;
    if(i>1){
        i = 0;
    }

}, 4000);
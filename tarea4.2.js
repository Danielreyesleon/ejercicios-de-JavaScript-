var letra=""
function Leerletra(){
    letra=prompt("digite una letra");
}
function Determinar(){
    if((letra=="a")||(letra=="e")||(letra=="i")||(letra=="o")||(letra=="u")){
      alert("la letra "+letra+"es vocal");
    }else{
        alert("la letra"+letra+"es consonante");
    }
}
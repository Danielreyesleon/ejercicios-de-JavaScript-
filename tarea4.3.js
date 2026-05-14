var letras=new Array(10),x=0 ,numBuscado=0,s="";
function LlenarArreglo(){
for(x=0;x<letras.length;x++){
letras[x]=prompt("digite una letra:");
}
}
function MostrarArreglo(){
    s="";
    for(x=0;x<letras.length;x++){
s=s+letras[x]+"";
    }
    alert("El arreglo contiene:\n"+s);
}
function Buscarletra(){
    letraBuscada=prompt("Digite la letra que desea buscar:");
    for(x=0;x<letras.length;x++){
        if(letraBuscada==letras[x]){
           alert("se encontro la letra"+letraBuscada+"que andabs buscando");
        }
    }
}
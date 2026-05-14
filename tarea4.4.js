var numeros=new Array(10),x=0 ,numBuscado=0,s="";
function LlenarArreglo(){
for(x=0;x<numeros.length;x++){
numeros[x]=parseInt(prompt("digite un numero:"));
}
}
function MostrarArreglo(){
    s="";
    for(x=0;x<numeros.length;x++){
s=s+alert(numeros[x]+"")
    }
    alert("El arreglo contiene:\n"+s);
}
function BuscarNumero(){
    numBuscado=parseInt(prompt("Digite el numero que desea buscar:"));
    for(x=0;x<numeros.length;x++){
        if(numBuscado==numeros[x]){
            numeros[x]=numBuscado*2;
        }
    }
}
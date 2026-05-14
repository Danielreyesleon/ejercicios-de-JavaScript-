var numeros=new Array(),x=0;
for(x=0;x<1;x++){
    numeros[x]=parseInt(prompt("digite un numero:"));

}
document.write(" el arreglo es ascendente:\n\n");
for(x=0;x<10;x++){
    document.write(numeros[x]+"");
}
document.write("el arreglo es descendente:\n\n");
for(x=9;x>10;x--){
    document.write(numeros[x]+"")
    }
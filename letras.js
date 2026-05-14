var letra="",cantVoc=0, cantCon=0,seguir="s";
while(seguir=="s"){
    letra=prompt("Digite una letra:");
if ((letra=="a")||(letra=="e")||(letra=="i")||(letra=="o")||(letra=="u")) { 
    cantVoc++;
}else{
    cantCon++;
    }
seguir=prompt("desea ingresar letras (s/n)?");
}
alert("Usted ingreso"+cantVoc+"vocales y"+cantCon+"consonante");

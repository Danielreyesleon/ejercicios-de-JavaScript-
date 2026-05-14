var numero1=0, numero2=0;
function LeerNumero(){
    numero1=parseInt(prompt("Digite un numero:"));
    numero2=parseInt(prompt("Digite otro numero:"));
}
function Determinar(){
    if(numero1>numero2){
      document.write("El mayor es"+numero1);
    }else if (numero2>numero1){
    document.write("el mayor es"+numero2);
    }else{ 
        document.write(numero1+"y"+numero2+"son iguales");
}
}
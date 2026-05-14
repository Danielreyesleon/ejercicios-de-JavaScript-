var ang1=0,ang2=0,ang3=0, sumaAngulos=0,x=0;
for(x=1;x<=10;x+1){
ang1=parseInt(prompt("digite la medida de el primer angulo:"));
ang2=parseInt(prompt("digite la medida de el segundo angulo:"));
ang3=parseInt(prompt("digite la medida de el tercer angulo:"));
sumaAngulos=ang1+ang2+ang3;
if(((ang1==90)||(ang2==90)||(ang3==90))&&(sumaAngulos==180)){
    alert("a ingresado medidas para un triangulo rectangulo");
}else if (((ang1<90)||(ang2<90)||(ang3<90))&&(sumaAngulos==180)){
    alert("a ingresado medidas para un triangulo acutangulo");
}else if (((ang1>90)||(ang2>90)||(ang3>90))&&(sumaAngulos==180)){
    alert("a ingresado medidas para un triangulo optusangulo");
    }else{ 
        alert("Error. de medidas");
        }
        }
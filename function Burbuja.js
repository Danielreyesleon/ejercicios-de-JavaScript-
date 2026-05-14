'use strict'

function burbuja(){
    var lista=[6,3,5,1,7,8,2];
    var i,n,j, aux;
    n =lista,length;
    for(j=1; j<n;j++){
        for(1=0; i<(n-j); i++){
            if(lista[i]>lista[i+1]){
                aux= lista[i]
                lista[i]=lista[i+1]
                lista[i+1]=aux;
    }
    }
    }
    console.log(lista);
    }


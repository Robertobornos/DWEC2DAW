function Descomposicion(){


    var numero = Number(prompt("Dame el numero que quieres descomponer "))
    var divisor =2;
    var resultado = "";

    while (numero >1){

        if(numero % divisor == 0){

             resultado += divisor ;
             numero = numero /divisor;


        }else{
            divisor++;
        }


    }

    alert(resultado)

}
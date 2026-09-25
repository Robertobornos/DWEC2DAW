function nominas(){

    var nomina = Number(prompt("Pon la nomina "))
    var antiguedad = Number(prompt("Pon la antiguedad"))


    if(nomina<750 & antiguedad>=10)
    {
        alert("Recibes una prima del 10%")

        var total = nomina *1.10

        alert("Su sueldo al final es este "+total+ "€")

    }else if(nomina>=750 & antiguedad>=10){


        alert("Recibes una prima del 5%")

        var total = nomina *1.05

        alert("Su sueldo al final es este "+total+"€")

    }else {

        alert("No recibe prima ")

    }


}
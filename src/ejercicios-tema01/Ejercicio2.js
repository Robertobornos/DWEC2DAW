function alerta() {

    //Cremos la variables hijos que segun lo que responda se queda guardado
    var hijos = prompt("cuantos hijos los tienes ")


   //comprobamos que no haya dejado nada en blanco
    if (hijos === null || hijos.trim() === '') {
        alert('no uede estar vacio');
    } else {
        //Mandamos una alerta con los hijos que tiene
         alert('Tienes ' + hijos);

    }

}
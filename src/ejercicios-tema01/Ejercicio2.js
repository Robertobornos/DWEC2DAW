function alerta() {

    var hijos = prompt("cuantos hijos los tienes ")


    if (hijos === null || hijos.trim() === '') {
        alert('no uede estar vacio');
    } else {
        alert('Tienes ' + hijos);

    }

}
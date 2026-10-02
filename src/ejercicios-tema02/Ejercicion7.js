function factorial() {

    var numero = Number(prompt("dame un numero "));

    var res = 1;

    for (var i = 1; i <= numero; i++) {
        res = res * i;
    }

    alert("el factorial es este " + res);
}
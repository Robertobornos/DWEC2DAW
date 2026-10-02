function Segundogrado() {

    var a = Number(prompt("Dame el número que corresponde a a"));
    var b = Number(prompt("Dame el número que corresponde a b"));
    var c = Number(prompt("Dame el número que corresponde a c"));

    if (a == 0) {
        alert("No puede ser 0");

    } else {

        var d = b**2 - 4*a*c;

        if (d > 0) {

            var x1 = (-b + Math.sqrt(d)) / (2*a);
            var x2 = (-b - Math.sqrt(d)) / (2*a);

            alert("x1 = " + x1);
            alert("x2 = " + x2);

        } else if (d == 0) {

            var x1 = -b / (2*a);

            alert("La ecuación tiene una única solución:");
            alert("x = " + x1);

        } else {

            alert("La ecuación no tiene soluciones reales.");

        }
    }
}

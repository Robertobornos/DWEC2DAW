    function Mayor3(){

        var n1 = Number(prompt("dame el primer numero"))
        var n2 = Number(prompt("dame el segundo numero"))
        var n3 = Number(prompt("dame el tercer numero"))

        var menor, medio, mayor;

        if (n1 <= n2 && n1 <= n3) {
            menor = n1;
            if (n2 <= n3) {
                medio = n2;
                mayor = n3;
            } else {
                medio = n3;
                mayor = n2;
            }
        } else if (n2 <= n1 && n2 <= n3) {
            menor = n2;
            if (n1 <= n3) {
                medio = n1;
                mayor = n3;
            } else {
                medio = n3;
                mayor = n1;
            }
        } else {
            menor = n3;
            if (n1 <= n2) {
                medio = n1;
                mayor = n2;
            } else {
                medio = n2;
                mayor = n1;
            }
        }

        alert("Menor: " + menor + "\nMedio: " + medio + "\nMayor: " + mayor);

    }
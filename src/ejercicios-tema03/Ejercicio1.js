function Eje(){


    var figura = "";
    var lado = 0;
    var radio = 0;
    var altura = 0;



   do{

       var op = Number(prompt(
           "MENU DE FIGURAS GEOMETRICAS\n"
           + "1. Elegir figura\n"
           + "2. Introducir medidas\n"
           + "3. Mostrar volumen\n"
           + "4. Mostrar área\n"
           + "5. Finalizar programa\n\n"
           + "Elige una opcion:"
       ));


       switch (op){
           case 1:


               var opcionfigura = Number(prompt(
                   "ELIJA UNA FIGURA\n\n"
                   + "1. Cubo\n"
                   + "2. Esfera\n"
                   + "3. Cilindro\n\n"
                   + "Elige una opcion:"
               ));


               switch (opcionfigura){

                   case 1:
                       figura = "cubo";
                       alert("has elegido cubo")
                       break;

                   case 2:
                       figura = "esfera";
                       alert("has elegido esfera")
                       break;

                   case 3:
                       figura = "cilindro";
                       alert("has elegido cilindro")
                       break;

                   default:
                       alert("Esta opcion no vale");

               }

               break;

           case 2 :

               if(figura==""){

                   alert("debes elegir una figura ")


               }else if(figura=="cubo"){

                   alert("introduce el lado del cubo");
                   lado = Number(prompt("Lado:"));

               }else if(figura=="esfera"){

                   alert("introduce el radio del cilindro");
                   radio = Number(prompt("Radio:"));


               }else if(figura=="cilindro"){

                   alert("Introduce el radio del cilindro");
                   radio = Number(prompt("Radio:"));

                   alert("Introduce la altura del cilindro");
                   altura = Number(prompt("Altura:"));

               }

               break;

           case 3 :



               if(figura==""){

                   alert("debes elegir una figura ")


               }else if(figura=="cubo"){

                   var volumen = lado * lado * lado;

                   alert("El volumen del cubo es "+volumen);

               }else if(figura=="esfera"){

                   var volumen = (4 / 3) * Math.PI * radio * radio * radio;
                   alert("El volumen de la esfera es: " + volumen);

               } else if (figura == "cilindro") {

                   var volumen = Math.PI * radio * radio * altura;
                   alert("El volumen del cilindro es: " + volumen);

               }
               break;


               case 4 :
                   if (figura == "") {

                   alert("primero debes elegir una figura");

               } else if (figura == "cubo") {

                   var area = 6 * lado * lado;
                   alert("el area del cubo es: " + area);

               } else if (figura == "esfera") {

                   var area = 4 * Math.PI * radio * radio;
                   alert("el area de la esfera es: " + area);

               } else if (figura == "cilindro") {

                   var area = 2 * Math.PI * radio * (radio + altura);
                   alert("el area del cilindro es: " + area);

               }

                   break;

           case 5:

               alert("fin");
               break;

           default:

               alert("op no valida");







       }

   }while (op!=5);


}
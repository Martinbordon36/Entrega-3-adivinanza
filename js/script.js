var primera = document.querySelector('#btn-prim');


var preguntas = ['¿Quien es el creador de INTEL?', ' ¿En que año salio AMD?', '¿Cual es el procesador mas antiguo entre INTEL Y AMD?'];

primera.addEventListener('click', function() {

    var contenido = document.getElementById("prim-pregunta");
    contenido.innerHTML = preguntas[0];

})



var intentos = 3;
var inicioIntentos = 0;

function preguntero() {

    var rtaCorrecta = "Gordon Moore";
    var correcta = "Robert Noyce";


    if (inicioIntentos >= 3) {
        alert("PERDISTE... Las respuestas eran Gordon Moore  o Robert Noyce");
        document.getElementById("respuesta").disabled;
    }

    do {
        var ingreso = document.getElementById("respuesta").value;

        if (ingreso === rtaCorrecta || ingreso === correcta) {
            alert("Felicitaciones, Acertaste. GANASTE TU CUPON DE DESCUENTO")
        } else {
            inicioIntentos++;
        }
        if (inicioIntentos === 2) {
            alert("1RA PISTA : PUEDE SER CUALQUIERA DE LOS 2 FUNDADORES. G.... M....")
        } else if (inicioIntentos === 3) {
            alert("2DA PISTA: R... N....");
        }
        break;


    } while (inicioIntentos <= 3);
}

if (inicioIntentos >= 3) {
    alert("PERDISTE...");
    document.getElementById("respuesta").disabled;
}
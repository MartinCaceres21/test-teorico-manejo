// script.js

// Variables Globales
var preguntasTestActual = [];
var indicePreguntaActual = 0;
var respuestasUsuario = [];
var testSeleccionado = '';
var tiempoRestante = 1800; // 30 minutos en segundos
var temporizador; // Variable para el temporizador
var mostrandoExplicacion = false; // Nueva variable para controlar el estado

// Función para mostrar la selección de test
function mostrarSeleccionTest() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('seleccionTest').style.display = 'block';
}

// Función para iniciar el test seleccionado
function iniciarTest(testId) {
    testSeleccionado = testId;
    preguntasTestActual = preguntas[testId];
    indicePreguntaActual = 0;
    respuestasUsuario = [];
    mostrandoExplicacion = false;
    document.getElementById('seleccionTest').style.display = 'none';
    document.getElementById('cuestionario').style.display = 'block';
    iniciarTemporizador(); // Iniciamos el temporizador aquí
    mostrarPregunta();
}

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    var pregunta = preguntasTestActual[indicePreguntaActual];
    document.getElementById('numeroPregunta').innerText = "Pregunta " + (indicePreguntaActual + 1) + " / " + preguntasTestActual.length;
    document.getElementById('textoPregunta').innerHTML = "<strong>" + pregunta.pregunta + "</strong>";
    var opcionesDiv = document.getElementById('opciones');
    opcionesDiv.innerHTML = '';

    pregunta.opciones.forEach(function(opcion, index) {
        var label = document.createElement('label');
        label.innerHTML = '<input type="radio" name="option" value="' + index + '"> ' + opcion;
        opcionesDiv.appendChild(label);
    });

    document.getElementById('progreso').innerText = "Progreso: " + (indicePreguntaActual + 1) + " / " + preguntasTestActual.length;

    // Eliminar la explicación si existe
    var explicacionDiv = document.getElementById('explicacion');
    if (explicacionDiv) {
        explicacionDiv.parentNode.removeChild(explicacionDiv);
    }

    // Asegurarnos de que las opciones estén habilitadas
    var opciones = document.getElementsByName('option');
    for (var i = 0; i < opciones.length; i++) {
        opciones[i].disabled = false;
    }

    // Restablecer el texto del botón a "Siguiente"
    document.querySelector('.next-button').innerText = 'Siguiente';
}

// Función para mostrar la explicación
function mostrarExplicacion(opcionSeleccionada) {
    var pregunta = preguntasTestActual[indicePreguntaActual];
    var esCorrecta = (pregunta.respuestaCorrecta === opcionSeleccionada);

    // Crear un elemento para la explicación
    var explicacionDiv = document.createElement('div');
    explicacionDiv.id = 'explicacion';
    explicacionDiv.className = esCorrecta ? 'explicacion-correcta' : 'explicacion-incorrecta';

    // Mostrar mensaje de correcto o incorrecto
    var mensaje = esCorrecta ? '¡Respuesta correcta!' : 'Respuesta incorrecta.';
    explicacionDiv.innerHTML = '<strong>' + mensaje + '</strong><br>' + pregunta.explicacion;

    // Agregar la explicación después de las opciones
    var opcionesDiv = document.getElementById('opciones');
    opcionesDiv.parentNode.appendChild(explicacionDiv);

    // Deshabilitar las opciones para evitar cambios
    var opciones = document.getElementsByName('option');
    for (var i = 0; i < opciones.length; i++) {
        opciones[i].disabled = true;
    }
}

// Función para avanzar a la siguiente pregunta
function siguientePregunta() {
    if (!mostrandoExplicacion) {
        // Primero, verificamos si el usuario ha seleccionado una opción
        var opciones = document.getElementsByName('option');
        var opcionSeleccionada = null;
        for (var i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) {
                opcionSeleccionada = parseInt(opciones[i].value);
                break;
            }
        }

        if (opcionSeleccionada === null) {
            alert('Por favor, selecciona una opción.');
            return;
        }

        respuestasUsuario.push(opcionSeleccionada);

        // Mostrar la explicación
        mostrarExplicacion(opcionSeleccionada);
        mostrandoExplicacion = true;

        // Cambiar el texto del botón a "Continuar"
        document.querySelector('.next-button').innerText = 'Continuar';

    } else {
        // Pasamos a la siguiente pregunta o mostramos resultados si es la última
        indicePreguntaActual++;
        mostrandoExplicacion = false;

        if (indicePreguntaActual < preguntasTestActual.length) {
            mostrarPregunta();
        } else {
            mostrarResultados();
        }
    }
}

// Función para mostrar los resultados
function mostrarResultados() {
    clearInterval(temporizador); // Detenemos el temporizador
    var puntaje = 0;
    var respuestasCorrectas = 0;
    var respuestasIncorrectas = 0;

    preguntasTestActual.forEach(function(pregunta, index) {
        if (pregunta.respuestaCorrecta === respuestasUsuario[index]) {
            puntaje++;
            respuestasCorrectas++;
        } else {
            respuestasIncorrectas++;
        }
    });

    document.getElementById('cuestionario').style.display = 'none';
    document.getElementById('resultados').style.display = 'block';
    document.getElementById('textoResultados').innerText = "Obtuviste " + puntaje + " de " + preguntasTestActual.length + " preguntas correctas.\nRespuestas Correctas: " + respuestasCorrectas + "\nRespuestas Incorrectas: " + respuestasIncorrectas;
}

// Función para reiniciar el test
function reiniciar() {
    document.getElementById('resultados').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
    tiempoRestante = 1800; // Reiniciamos el tiempo
    respuestasUsuario = [];
    indicePreguntaActual = 0;
    mostrandoExplicacion = false;
}

// Función para iniciar el temporizador
function iniciarTemporizador() {
    var temporizadorElemento = document.getElementById('temporizador');
    temporizador = setInterval(function() {
        tiempoRestante--;
        var minutos = Math.floor(tiempoRestante / 60);
        var segundos = tiempoRestante % 60;
        temporizadorElemento.innerText = "Tiempo restante: " + minutos + " min " + (segundos < 10 ? '0' + segundos : segundos) + " seg";

        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            alert('El tiempo ha finalizado.');
            mostrarResultados();
        }
    }, 1000);
}

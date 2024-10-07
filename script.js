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

function iniciarTest(testId) {
    testSeleccionado = testId;

    indicePreguntaActual = 0;
    respuestasUsuario = [];
    mostrandoExplicacion = false;

    document.getElementById('seleccionTest').style.display = 'none';
    document.getElementById('cuestionario').style.display = 'block';
    iniciarTemporizador(); // Iniciamos el temporizador aquí

    // Cargar el archivo de preguntas correspondiente
    cargarPreguntas(testId);
}

function cargarPreguntas(testId) {
    var script = document.createElement('script');
    script.type = 'text/javascript';

    // Determinar el nombre del archivo basado en testId
    var nombreArchivo;

    if (testId === 'testDificil') {
        nombreArchivo = 'preguntasDificiles.js';
    } else if (testId === 'test') {
        nombreArchivo = 'preguntas.js';
    } else {
        // Supongamos que testId es 'test1', 'test2', ..., 'test6'
        // Extraemos el número del testId
        var numeroTest = testId.replace('test', ''); // Remover 'test', queda el número
        nombreArchivo = 'preguntas' + numeroTest + '.js'; // Construimos el nombre del archivo
    }

    script.src = nombreArchivo;
    
    script.onload = function() {
        console.log('Archivo de preguntas cargado:', nombreArchivo);
        console.log('testId:', testId);

        if (typeof preguntas !== 'undefined' && preguntas[testId]) {
            preguntasTestActual = preguntas[testId];
            console.log('Preguntas cargadas:', preguntasTestActual);

            // Determinar qué función llamar según el tipo de test
            if (testId === 'testDificil') {
                mostrarPreguntaDificil(); // Mostrar preguntas difíciles con checkboxes
            } else {
                mostrarPregunta(); // Mostrar preguntas normales con radio buttons
            }
        } else {
            // Manejar error si no se cargó el archivo o la variable no está definida
            console.error('No se pudieron cargar las preguntas para el test: ' + testId);
            alert('Hubo un error al cargar las preguntas. Por favor, inténtalo de nuevo.');
        }
    };

    script.onerror = function() {
        console.error('Error al cargar el archivo de preguntas: ' + nombreArchivo);
        alert('No se pudo cargar el archivo de preguntas: ' + nombreArchivo);
    };

    document.head.appendChild(script);
}

// Función para mostrar la pregunta actual (normal con radio buttons)
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

// Función para mostrar la pregunta actual (dificil con checkboxes)
function mostrarPreguntaDificil() {
    var pregunta = preguntasTestActual[indicePreguntaActual];
    document.getElementById('numeroPregunta').innerText = "Pregunta " + (indicePreguntaActual + 1) + " / " + preguntasTestActual.length;
    document.getElementById('textoPregunta').innerHTML = "<strong>" + pregunta.pregunta + "</strong>";
    var opcionesDiv = document.getElementById('opciones');
    opcionesDiv.innerHTML = '';

    pregunta.opciones.forEach(function(opcion, index) {
        var label = document.createElement('label');
        label.innerHTML = '<input type="checkbox" name="option" value="' + index + '"> ' + opcion;
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

// Función para mostrar la explicación (normal)
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

// Función para mostrar la explicación (dificil)
function mostrarExplicacionDificil(opcionesSeleccionadas) {
    var pregunta = preguntasTestActual[indicePreguntaActual];
    var esCorrecta = JSON.stringify(pregunta.respuestasCorrectas.sort()) === JSON.stringify(opcionesSeleccionadas.sort());

    var explicacionDiv = document.createElement('div');
    explicacionDiv.id = 'explicacion';
    explicacionDiv.className = esCorrecta ? 'explicacion-correcta' : 'explicacion-incorrecta';

    var mensaje = esCorrecta ? '¡Respuesta correcta!' : 'Respuesta incorrecta.';
    explicacionDiv.innerHTML = '<strong>' + mensaje + '</strong><br>' + pregunta.explicacion;

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
        // Verificamos si el test actual es el difícil
        if (testSeleccionado === 'testDificil') {
            // Para preguntas difíciles, permitimos seleccionar múltiples opciones
            var opcionesSeleccionadas = [];
            var opciones = document.getElementsByName('option');
            for (var i = 0; i < opciones.length; i++) {
                if (opciones[i].checked) {
                    opcionesSeleccionadas.push(parseInt(opciones[i].value));
                }
            }

            if (opcionesSeleccionadas.length === 0) {
                alert('Por favor, selecciona al menos una opción.');
                return;
            }

            respuestasUsuario.push(opcionesSeleccionadas);

            // Mostrar la explicación para preguntas difíciles
            mostrarExplicacionDificil(opcionesSeleccionadas);
        } else {
            // Para preguntas normales, seleccionamos solo una opción
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

            // Mostrar la explicación para preguntas normales
            mostrarExplicacion(opcionSeleccionada);
        }

        mostrandoExplicacion = true;
        // Cambiar el texto del botón a "Continuar"
        document.querySelector('.next-button').innerText = 'Continuar';

    } else {
        // Pasamos a la siguiente pregunta o mostramos resultados si es la última
        indicePreguntaActual++;
        mostrandoExplicacion = false;

        if (indicePreguntaActual < preguntasTestActual.length) {
            // Mostrar la pregunta adecuada según el tipo de test
            if (testSeleccionado === 'testDificil') {
                mostrarPreguntaDificil();
            } else {
                mostrarPregunta();
            }
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
        if (testSeleccionado === 'testDificil') {
            // Para test difícil, comparar arrays
            var respuestasCorrectasArray = pregunta.respuestasCorrectas.sort();
            var respuestasUsuarioArray = respuestasUsuario[index].sort();
            var esCorrecta = JSON.stringify(respuestasCorrectasArray) === JSON.stringify(respuestasUsuarioArray);
            if (esCorrecta) {
                puntaje++;
                respuestasCorrectas++;
            } else {
                respuestasIncorrectas++;
            }
        } else {
            // Para test normales, comparar valores
            if (pregunta.respuestasCorrectas.includes(respuestasUsuario[index])) {
                puntaje++;
                respuestasCorrectas++;
            } else {
                respuestasIncorrectas++;
            }
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

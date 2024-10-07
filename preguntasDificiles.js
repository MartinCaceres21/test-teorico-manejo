// preguntasDificiles.js
var preguntas = preguntas || {};

preguntas['testDificil'] = [
        {
            pregunta: "1. ¿Cuáles de los siguientes elementos son obligatorios llevar en el vehículo según las normas uruguayas?",
            opciones: [
                "A) Extintor de incendios en buen estado",
                "B) Botiquín de primeros auxilios",
                "C) Triángulos reflectantes",
                "D) Chaleco reflectante"
            ],
            respuestasCorrectas: [0, 1, 2, 3],
            explicacion: "Según el **Artículo 60 del Decreto N° 81/014 que reglamenta la Ley 19.061**, es obligatorio llevar en el vehículo un maletín de primeros auxilios, un extintor de incendios, triángulos reflectantes y un chaleco reflectante para garantizar la seguridad vial."
        },
        {
            pregunta: "2. Al conducir en condiciones de lluvia intensa, usted debe:",
            opciones: [
                "A) Aumentar la velocidad para salir rápidamente de la zona de lluvia",
                "B) Encender las luces bajas y antiniebla si dispone de ellas",
                "C) Aumentar la distancia de seguimiento con respecto al vehículo de adelante",
                "D) Utilizar el freno de mano para detenerse"
            ],
            respuestasCorrectas: [1, 2],
            explicacion: "Según el **Artículo 34 del Reglamento Nacional de Circulación Vial**, en condiciones de lluvia intensa se debe encender las luces bajas y antiniebla, y aumentar la distancia de seguimiento. Aumentar la velocidad o usar el freno de mano es peligroso."
        },
        {
            pregunta: "3. ¿Qué acciones están prohibidas mientras se conduce?",
            opciones: [
                "A) Usar auriculares conectados a dispositivos de audio",
                "B) Fumar",
                "C) Utilizar el teléfono celular",
                "D) Comer o beber"
            ],
            respuestasCorrectas: [0, 2, 3],
            explicacion: "El **Artículo 58 del Decreto N° 81/014 que reglamenta la Ley 19.061** prohíbe el uso de dispositivos de telefonía móvil mientras se conduce, a menos que se utilicen sin manos. También se desaconseja comer o beber al manejar."
        },
        {
            pregunta: "4. ¿Cuáles son señales de advertencia o peligro?",
            opciones: [
                "A) Señales triangulares con borde rojo",
                "B) Señales circulares con fondo blanco y borde rojo",
                "C) Señales rectangulares azules",
                "D) Señales octogonales rojas"
            ],
            respuestasCorrectas: [0],
            explicacion: "Las señales triangulares con borde rojo son de advertencia o peligro, según el **Artículo 58 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "5. Para reducir el riesgo de accidentes, un conductor debe:",
            opciones: [
                "A) Mantener una velocidad adecuada a las condiciones de la vía",
                "B) Respetar las señales de tránsito",
                "C) Conducir siempre por el carril izquierdo",
                "D) Evitar el uso de luces en zonas urbanas"
            ],
            respuestasCorrectas: [0, 1],
            explicacion: "Según el **Artículo 26 del Reglamento Nacional de Circulación Vial**, mantener una velocidad adecuada y respetar las señales son prácticas esenciales de seguridad vial. Conducir por el carril izquierdo y no usar luces en zonas urbanas es incorrecto."
        },
        {
            pregunta: "6. Al enfrentar una intersección con semáforo en amarillo fijo, usted debe:",
            opciones: [
                "A) Acelerar para cruzar antes de que cambie a rojo",
                "B) Detenerse si puede hacerlo de forma segura",
                "C) Continuar con precaución si ya está muy cerca",
                "D) Tocar bocina para advertir a otros conductores"
            ],
            respuestasCorrectas: [1, 2],
            explicacion: "Según el **Artículo 35 del Reglamento Nacional de Circulación Vial**, el amarillo fijo indica precaución y advertencia de cambio a rojo. Debe detenerse si es seguro hacerlo; si está muy cerca, puede continuar con precaución."
        },
        {
            pregunta: "7. ¿En qué situaciones está permitido el uso de luces intermitentes (balizas)?",
            opciones: [
                "A) Al estacionar en doble fila",
                "B) En caso de emergencia o avería",
                "C) Cuando se circula en condiciones de baja visibilidad",
                "D) Al realizar una maniobra de giro"
            ],
            respuestasCorrectas: [1],
            explicacion: "Las balizas se utilizan para señalizar que el vehículo está detenido por emergencia o avería, según el **Artículo 37 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "8. Al transportar niños en el vehículo, se debe:",
            opciones: [
                "A) Utilizar sistemas de retención infantil adecuados",
                "B) Sentarlos en el asiento delantero si tienen más de 10 años",
                "C) Asegurarse de que usen el cinturón de seguridad",
                "D) Permitir que compartan el cinturón entre dos niños"
            ],
            respuestasCorrectas: [0, 2],
            explicacion: "Según el **Artículo 1 del Decreto N° 81/014 que reglamenta la Ley 19.061**, los niños deben usar sistemas de retención infantil adecuados y viajar en los asientos traseros hasta los 12 años. Sentarlos en el asiento delantero antes de esa edad y compartir el cinturón están prohibidos."
        },
        {
            pregunta: "9. ¿Qué documentos son obligatorios para circular con un vehículo?",
            opciones: [
                "A) Libreta de conducir vigente",
                "B) Cédula de identidad del conductor",
                "C) Comprobante de seguro obligatorio",
                "D) Comprobante de pago de patente"
            ],
            respuestasCorrectas: [0, 2, 3],
            explicacion: "Según el **Artículo 20 del Decreto N° 81/014 que reglamenta la Ley 19.061**, se requiere la libreta de conducir, comprobante de seguro y pago de patente. La cédula de identidad es recomendable llevarla, pero no es un documento vehicular obligatorio."
        },
        {
            pregunta: "10. Ante la presencia de nieve o hielo en la calzada, usted debe:",
            opciones: [
                "A) Utilizar cadenas para nieve en los neumáticos",
                "B) Aumentar la velocidad para mantener el control",
                "C) Evitar frenadas bruscas",
                "D) Conducir por el centro de la vía"
            ],
            respuestasCorrectas: [0, 2],
            explicacion: "Según el **Artículo 40 del Reglamento Nacional de Circulación Vial**, se deben usar cadenas y evitar frenadas bruscas. Aumentar la velocidad y conducir por el centro de la vía es peligroso."
        },
        {
            pregunta: "11. ¿Qué factores pueden aumentar la distancia de frenado?",
            opciones: [
                "A) Velocidad del vehículo",
                "B) Estado de los neumáticos",
                "C) Condiciones climáticas adversas",
                "D) Uso de luces altas"
            ],
            respuestasCorrectas: [0, 1, 2],
            explicacion: "La velocidad, el estado de los neumáticos y el clima afectan la distancia de frenado. Las luces altas no influyen en la frenada."
        },
        {
            pregunta: "12. Es obligatorio ceder el paso a los vehículos de emergencia que circulan con señales luminosas y sonoras activadas.",
            opciones: [
                "Verdadero",
                "Falso"
            ],
            respuestasCorrectas: [0],
            explicacion: "Según el **Artículo 38 del Reglamento Nacional de Circulación Vial**, es obligatorio ceder el paso a vehículos de emergencia en servicio."
        },
        {
            pregunta: "13. Al circular detrás de un vehículo pesado, se debe:",
            opciones: [
                "A) Mantener una distancia segura para tener mejor visibilidad",
                "B) Adelantarlo inmediatamente",
                "C) Utilizar luces altas para ser visto",
                "D) Evitar permanecer en sus puntos ciegos"
            ],
            respuestasCorrectas: [0, 3],
            explicacion: "Es importante mantener distancia y evitar puntos ciegos, según el **Reglamento Nacional de Circulación Vial**. Adelantarlo debe hacerse con seguridad; usar luces altas puede encandilar."
        },
        {
            pregunta: "14. El uso del celular mientras se conduce está permitido si se utiliza en modo manos libres.",
            opciones: [
                "Verdadero",
                "Falso"
            ],
            respuestasCorrectas: [1],
            explicacion: "El **Artículo 39 de la Ley N° 18.191** prohíbe el uso de dispositivos de comunicación al conducir, incluso en modo manos libres."
        },
        {
            pregunta: "15. Para evitar el efecto de encandilamiento al conducir de noche, usted debe:",
            opciones: [
                "A) Mirar fijamente las luces del vehículo que viene de frente",
                "B) Reducir la velocidad",
                "C) Desviar la mirada hacia la derecha de la calzada",
                "D) Encender las luces intermitentes"
            ],
            respuestasCorrectas: [1, 2],
            explicacion: "Reducir la velocidad y desviar la mirada ayudan a evitar el encandilamiento. Mirar las luces de frente aumenta el efecto; las intermitentes no son apropiadas."
        },
        {
            pregunta: "16. Es obligatorio para los motociclistas circular con las luces encendidas durante el día.",
            opciones: [
                "Verdadero",
                "Falso"
            ],
            respuestasCorrectas: [0],
            explicacion: "El uso de luces encendidas durante el día es obligatorio para motociclistas, mejorando su visibilidad, según el **Artículo 30 de la Ley N° 19.061**."
        },
        {
            pregunta: "17. ¿Qué acciones son consideradas conducción defensiva?",
            opciones: [
                "A) Anticiparse a las acciones de otros conductores",
                "B) Mantener una actitud agresiva para imponer respeto",
                "C) Respetar las normas de tránsito en todo momento",
                "D) Conducir siempre por el carril izquierdo para tener mejor visibilidad"
            ],
            respuestasCorrectas: [0, 2],
            explicacion: "La conducción defensiva implica anticiparse y respetar normas, de acuerdo con las buenas prácticas de seguridad vial. Una actitud agresiva y usar siempre el carril izquierdo son prácticas incorrectas."
        },
        {
            pregunta: "18. Al estacionar en pendiente descendente, se debe:",
            opciones: [
                "A) Girar las ruedas hacia el cordón",
                "B) Colocar el freno de mano",
                "C) Dejar la marcha en punto muerto",
                "D) Girar las ruedas hacia la calzada"
            ],
            respuestasCorrectas: [0, 1],
            explicacion: "Girando las ruedas hacia el cordón y usando el freno de mano se evita que el vehículo se desplace, según el **Reglamento Nacional de Circulación Vial**. Dejar la marcha en punto muerto es incorrecto."
        },
        {
            pregunta: "19. ¿Qué está prohibido hacer en una autopista?",
            opciones: [
                "A) Circular a una velocidad menor a 60 km/h",
                "B) Detenerse en el arcén o banquina sin causa justificada",
                "C) Realizar marcha atrás",
                "D) Adelantar por la derecha"
            ],
            respuestasCorrectas: [1, 2, 3],
            explicacion: "En autopistas está prohibido detenerse sin causa, retroceder y adelantar por la derecha, según el **Artículo 42 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "20. En caso de niebla espesa, es recomendable:",
            opciones: [
                "A) Encender las luces altas",
                "B) Utilizar luces antiniebla si dispone de ellas",
                "C) Aumentar la velocidad para salir pronto de la niebla",
                "D) Mantener una mayor distancia de seguridad"
            ],
            respuestasCorrectas: [1, 3],
            explicacion: "Según el **Artículo 36 del Reglamento Nacional de Circulación Vial**, las luces antiniebla y aumentar la distancia de seguridad ayudan en niebla. Las luces altas empeoran la visibilidad; aumentar la velocidad es peligroso."
        }
    ];

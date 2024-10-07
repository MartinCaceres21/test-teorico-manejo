// preguntas.js

var preguntas = {
    test1: [
        {
            pregunta: "1. ¿Cuál es el límite máximo de velocidad permitido en zonas urbanas en Uruguay, salvo señalización en contrario?",
            opciones: [
                "A) 60 km/h",
                "B) 45 km/h",
                "C) 50 km/h",
                "D) 40 km/h"
            ],
            respuestaCorrecta: 1, // 45 km/h
            explicacion: "Según el **Artículo 33 del Reglamento Nacional de Circulación Vial**, el límite máximo de velocidad en zonas urbanas es de 45 km/h, salvo señalización en contrario."
        },
        {
            pregunta: "2. ¿Cuál es el límite permitido de alcohol en sangre para conductores en Uruguay?",
            opciones: [
                "A) 0.0 gramos por litro",
                "B) 0.3 gramos por litro",
                "C) 0.5 gramos por litro",
                "D) 0.8 gramos por litro"
            ],
            respuestaCorrecta: 0, // 0.0 g/l
            explicacion: "La **Ley N° 19.360** establece la tolerancia cero de alcohol en sangre para conductores en Uruguay, es decir, 0.0 gramos por litro."
        },
        {
            pregunta: "3. El uso del cinturón de seguridad en vehículos es:",
            opciones: [
                "A) Obligatorio solo en carreteras",
                "B) Obligatorio solo para el conductor",
                "C) Obligatorio para todos los ocupantes del vehículo",
                "D) Opcional para pasajeros en el asiento trasero"
            ],
            respuestaCorrecta: 2, // Obligatorio para todos
            explicacion: "El **Artículo 31 de la Ley N° 19.061** establece que el uso del cinturón de seguridad es obligatorio para todos los ocupantes del vehículo en todas las vías de tránsito."
        },
        {
            pregunta: "4. En una intersección sin señalización, ¿quién tiene la preferencia de paso?",
            opciones: [
                "A) El vehículo que viene por la derecha",
                "B) El vehículo que viene por la izquierda",
                "C) El vehículo de mayor tamaño",
                "D) El vehículo que circula a mayor velocidad"
            ],
            respuestaCorrecta: 0, // Por la derecha
            explicacion: "Según el **Artículo 27 del Reglamento Nacional de Circulación Vial**, en intersecciones sin señalización, tiene preferencia el vehículo que se aproxima por la derecha."
        },
        {
            pregunta: "5. Para señalizar un giro a la izquierda si los señaleros están averiados, el conductor debe:",
            opciones: [
                "A) Extender el brazo izquierdo en posición horizontal",
                "B) Sacar la mano izquierda hacia abajo",
                "C) Hacer señales con la luz de freno",
                "D) Usar la bocina"
            ],
            respuestaCorrecta: 0,
            explicacion: "El **Artículo 43 del Reglamento Nacional de Circulación Vial** indica que, en caso de fallas en los dispositivos luminosos, el conductor debe extender el brazo izquierdo en posición horizontal para señalizar un giro a la izquierda."
        },
        {
            pregunta: "6. Está permitido adelantar a otro vehículo:",
            opciones: [
                "A) En cualquier circunstancia",
                "B) Por la derecha en vías de doble sentido",
                "C) Cuando no existe prohibición y las condiciones lo permiten",
                "D) En curvas y puentes"
            ],
            respuestaCorrecta: 2,
            explicacion: "De acuerdo con el **Artículo 41 del Reglamento Nacional de Circulación Vial**, el adelantamiento está permitido cuando no existe prohibición expresa y las condiciones de la vía lo permiten, siempre por la izquierda y con las debidas precauciones."
        },
        {
            pregunta: "7. Los peatones tienen prioridad de paso:",
            opciones: [
                "A) Solo en los cruces señalizados",
                "B) En cualquier lugar de la vía",
                "C) Cuando cruzan por lugares permitidos y señalizados",
                "D) Nunca tienen prioridad"
            ],
            respuestaCorrecta: 2,
            explicacion: "Según el **Artículo 37 del Reglamento Nacional de Circulación Vial**, los peatones tienen prioridad cuando cruzan por lugares permitidos y señalizados, como pasos de peatones y esquinas."
        },
        {
            pregunta: "8. Una señal de tránsito triangular con borde rojo y fondo blanco indica:",
            opciones: [
                "A) Prohibición",
                "B) Advertencia o peligro",
                "C) Información",
                "D) Reglamentación"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las señales triangulares con borde rojo y fondo blanco son **señales de advertencia o peligro**, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "9. La edad mínima para obtener la licencia de conducir categoría A (automóviles) en Uruguay es:",
            opciones: [
                "A) 16 años",
                "B) 17 años",
                "C) 18 años",
                "D) 21 años"
            ],
            respuestaCorrecta: 2,
            explicacion: "La **Ley N° 18.191** establece que la edad mínima para obtener la licencia de conducir categoría A es de **18 años**."
        },
        {
            pregunta: "10. En caso de estar involucrado en un accidente de tránsito, el conductor debe:",
            opciones: [
                "A) Retirarse si no hay heridos",
                "B) Permanecer en el lugar y brindar asistencia",
                "C) Llamar a su compañía de seguros y esperar instrucciones",
                "D) Mover el vehículo para no obstaculizar el tránsito"
            ],
            respuestaCorrecta: 1,
            explicacion: "Según el **Artículo 46 del Reglamento Nacional de Circulación Vial**, el conductor involucrado en un accidente debe permanecer en el lugar, brindar asistencia y esperar a las autoridades."
        },
        {
            pregunta: "11. Entre los documentos obligatorios para circular se encuentra:",
            opciones: [
                "A) Cédula de identidad del conductor",
                "B) Título de propiedad del vehículo",
                "C) Último recibo de patente",
                "D) Certificado de buena conducta"
            ],
            respuestaCorrecta: 0,
            explicacion: "El **Artículo 19 del Reglamento Nacional de Circulación Vial** exige llevar la cédula de identidad, la licencia de conducir y otros documentos vehiculares obligatorios."
        },
        {
            pregunta: "12. ¿Está permitido el uso de teléfonos celulares mientras se conduce?",
            opciones: [
                "A) Sí, en modo manos libres",
                "B) Sí, siempre que se mantenga la atención",
                "C) No, está prohibido",
                "D) Solo para llamadas de emergencia"
            ],
            respuestaCorrecta: 2,
            explicacion: "El **Artículo 39 de la Ley N° 18.191** prohíbe el uso de dispositivos de comunicación como teléfonos celulares mientras se conduce, incluso en modo manos libres."
        },
        {
            pregunta: "13. La velocidad máxima permitida en rutas nacionales es de:",
            opciones: [
                "A) 90 km/h",
                "B) 110 km/h",
                "C) 120 km/h",
                "D) 100 km/h"
            ],
            respuestaCorrecta: 3,
            explicacion: "Según el **Artículo 33 del Reglamento Nacional de Circulación Vial**, la velocidad máxima en rutas nacionales es de 90 km/h para vehículos de carga y 110 km/h para automóviles particulares. Sin embargo, algunas vías permiten hasta 100 km/h, según señalización."
        },
        {
            pregunta: "14. Conducir bajo los efectos del alcohol es sancionado con:",
            opciones: [
                "A) Multa y suspensión de la licencia",
                "B) Solo advertencia verbal",
                "C) No se considera infracción",
                "D) Retiro del vehículo únicamente"
            ],
            respuestaCorrecta: 0,
            explicacion: "La **Ley N° 19.360** establece sanciones que incluyen multas y suspensión de la licencia para quienes conduzcan bajo los efectos del alcohol."
        },
        {
            pregunta: "15. El uso de casco para motociclistas es:",
            opciones: [
                "A) Opcional en zonas urbanas",
                "B) Obligatorio solo en rutas",
                "C) Obligatorio en todo momento",
                "D) Recomendado pero no obligatorio"
            ],
            respuestaCorrecta: 2,
            explicacion: "El **Artículo 31 de la Ley N° 19.061** exige el uso obligatorio de casco homologado para motociclistas en todo momento y lugar."
        },
        {
            pregunta: "16. Al acercarse a un ómnibus escolar detenido con niños subiendo o bajando, usted debe:",
            opciones: [
                "A) Reducir la velocidad y pasar con precaución",
                "B) Detenerse completamente y esperar a que finalice la maniobra",
                "C) Tocar bocina y adelantar rápidamente",
                "D) Continuar a velocidad normal"
            ],
            respuestaCorrecta: 1,
            explicacion: "Según el **Reglamento Nacional de Circulación Vial**, se debe detener completamente y esperar a que los niños suban o bajen de manera segura."
        },
        {
            pregunta: "17. Está permitido estacionar:",
            opciones: [
                "A) En doble fila si es por poco tiempo",
                "B) En lugares señalizados como prohibidos si no hay tráfico",
                "C) En aceras amplias",
                "D) En lugares permitidos y señalizados"
            ],
            respuestaCorrecta: 3,
            explicacion: "El **Artículo 44 del Reglamento Nacional de Circulación Vial** permite estacionar únicamente en lugares permitidos y señalizados."
        },
        {
            pregunta: "18. Una luz roja intermitente en un semáforo indica:",
            opciones: [
                "A) Detenerse y esperar luz verde",
                "B) Continuar con precaución",
                "C) Detenerse y avanzar cuando sea seguro",
                "D) El semáforo está fuera de servicio"
            ],
            respuestaCorrecta: 2,
            explicacion: "Una luz roja intermitente significa que el conductor debe detenerse y solo avanzar cuando sea seguro, similar a una señal de 'Pare', según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "19. El uso de luces bajas durante el día es obligatorio en:",
            opciones: [
                "A) Zonas urbanas",
                "B) Rutas nacionales",
                "C) Solo en condiciones de poca visibilidad",
                "D) No es obligatorio"
            ],
            respuestaCorrecta: 1,
            explicacion: "El **Artículo 30 de la Ley N° 19.061** establece la obligatoriedad del uso de luces bajas durante el día en rutas nacionales."
        },
        {
            pregunta: "20. Antes de cruzar una vía férrea, el conductor debe:",
            opciones: [
                "A) Acelerar para cruzar rápidamente",
                "B) Detenerse completamente, mirar y escuchar",
                "C) Continuar sin detenerse si no ve trenes",
                "D) Solo reducir la velocidad"
            ],
            respuestaCorrecta: 1,
            explicacion: "Según el **Artículo 42 del Reglamento Nacional de Circulación Vial**, es obligatorio detenerse completamente, mirar y escuchar antes de cruzar una vía férrea."
        },
        {
            pregunta: "21. Es obligación del conductor mantener su vehículo en buenas condiciones mecánicas para:",
            opciones: [
                "A) Evitar multas por inspección vehicular",
                "B) Ahorrar combustible",
                "C) Garantizar la seguridad vial",
                "D) Cumplir con la garantía del fabricante"
            ],
            respuestaCorrecta: 2,
            explicacion: "El **Artículo 22 de la Ley N° 19.061** establece que mantener el vehículo en buenas condiciones es esencial para garantizar la seguridad vial."
        },
        {
            pregunta: "22. El uso de luces largas (altas) está permitido:",
            opciones: [
                "A) En zonas urbanas iluminadas",
                "B) En rutas sin tránsito de frente",
                "C) Siempre, para mejor visibilidad",
                "D) Nunca, solo luces bajas"
            ],
            respuestaCorrecta: 1,
            explicacion: "De acuerdo con el **Artículo 30 del Reglamento Nacional de Circulación Vial**, las luces largas pueden utilizarse en rutas cuando no haya tránsito en sentido contrario para evitar encandilar a otros conductores."
        },
        {
            pregunta: "23. Para remolcar otro vehículo, es necesario:",
            opciones: [
                "A) Usar cualquier tipo de cuerda o cable",
                "B) Contar con una barra o lanza de remolque adecuada",
                "C) Solo remolcar vehículos de menor tamaño",
                "D) No es permitido remolcar vehículos"
            ],
            respuestaCorrecta: 1,
            explicacion: "El **Reglamento Nacional de Circulación Vial** exige el uso de dispositivos de remolque adecuados, como barras o lanzas homologadas, para garantizar la seguridad."
        },
        {
            pregunta: "24. Si se acerca un vehículo de emergencia con señales luminosas y sonoras, usted debe:",
            opciones: [
                "A) Continuar a la misma velocidad",
                "B) Detenerse inmediatamente en medio de la vía",
                "C) Facilitarle el paso cediendo la derecha",
                "D) Acelerar para no obstruir su paso"
            ],
            respuestaCorrecta: 2,
            explicacion: "Según el **Artículo 38 del Reglamento Nacional de Circulación Vial**, es obligatorio facilitar el paso a vehículos de emergencia, cediendo la derecha y deteniéndose si es necesario."
        },
        {
            pregunta: "25. Una señal circular con fondo blanco y borde rojo que muestra el número 60 indica:",
            opciones: [
                "A) Velocidad mínima de 60 km/h",
                "B) Velocidad máxima de 60 km/h",
                "C) Prohibido circular a 60 km/h",
                "D) Recomendación de velocidad"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las señales circulares con fondo blanco y borde rojo indican **prohibiciones**. En este caso, es la **velocidad máxima permitida de 60 km/h**, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "26. El uso de la bocina está permitido:",
            opciones: [
                "A) Para apurar a otros conductores",
                "B) En cualquier circunstancia",
                "C) Solo para evitar accidentes",
                "D) Para saludar a conocidos"
            ],
            respuestaCorrecta: 2,
            explicacion: "El **Artículo 34 del Reglamento Nacional de Circulación Vial** establece que la bocina debe utilizarse únicamente para prevenir accidentes."
        },
        {
            pregunta: "27. La distancia mínima de seguimiento entre vehículos debe ser:",
            opciones: [
                "A) De al menos 5 metros",
                "B) Suficiente para detenerse en caso de frenado brusco",
                "C) La que permita ver las placas del vehículo de adelante",
                "D) No es necesario mantener distancia"
            ],
            respuestaCorrecta: 1,
            explicacion: "Según el **Artículo 29 del Reglamento Nacional de Circulación Vial**, se debe mantener una distancia que permita detenerse sin colisionar en caso de frenado brusco del vehículo de adelante."
        },
        {
            pregunta: "28. Conducir bajo los efectos de drogas es:",
            opciones: [
                "A) Permitido si es medicación recetada",
                "B) Prohibido y sancionado por la ley",
                "C) Aceptable si el conductor se siente bien",
                "D) Permitido en trayectos cortos"
            ],
            respuestaCorrecta: 1,
            explicacion: "La **Ley N° 19.172** y el **Artículo 45 de la Ley N° 19.061** prohíben y sancionan la conducción bajo los efectos de sustancias psicoactivas."
        },
        {
            pregunta: "29. Los niños menores de 12 años deben viajar:",
            opciones: [
                "A) En el asiento delantero con cinturón",
                "B) En el asiento trasero con sistema de retención infantil",
                "C) Donde prefieran, sin restricciones",
                "D) En el asiento trasero sin cinturón"
            ],
            respuestaCorrecta: 1,
            explicacion: "El **Artículo 31 de la Ley N° 19.061** establece que los niños menores de 12 años deben viajar en el asiento trasero utilizando sistemas de retención infantil adecuados."
        },
        {
            pregunta: "30. En una vía de varios carriles en el mismo sentido, usted debe circular:",
            opciones: [
                "A) Siempre por el carril izquierdo",
                "B) Por el carril derecho, dejando los demás para adelantamientos",
                "C) Por cualquier carril disponible",
                "D) Alternando carriles para avanzar más rápido"
            ],
            respuestaCorrecta: 1,
            explicacion: "Según el **Artículo 28 del Reglamento Nacional de Circulación Vial**, se debe circular por el carril derecho en vías de varios carriles, dejando los demás para adelantamientos."
        }
    ],
    test2: [
        {
            pregunta: "1. En una intersección sin señalización, ¿quién tiene la preferencia de paso?",
            opciones: [
                "A) El vehículo que viene por la derecha",
                "B) El vehículo que viene por la izquierda",
                "C) El vehículo que circula a mayor velocidad",
                "D) El vehículo que llegó último a la intersección"
            ],
            respuestaCorrecta: 0,
            explicacion: "Según el **Reglamento Nacional de Circulación Vial**, en intersecciones sin señalización, tiene preferencia de paso el vehículo que se aproxima por la derecha."
        },
        {
            pregunta: "2. En una rotonda (glorieta) sin semáforos, ¿quién tiene prioridad de paso?",
            opciones: [
                "A) Los vehículos que están dentro de la rotonda",
                "B) Los vehículos que ingresan a la rotonda",
                "C) El vehículo de mayor tamaño",
                "D) El vehículo que circula a mayor velocidad"
            ],
            respuestaCorrecta: 0,
            explicacion: "En rotondas sin semáforos, los vehículos que ya están dentro de la rotonda tienen prioridad de paso, de acuerdo con el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "3. Si dos vehículos se aproximan simultáneamente a una intersección desde vías distintas, ¿cuál debe ceder el paso?",
            opciones: [
                "A) El que viene por la derecha",
                "B) El que viene por la izquierda",
                "C) Ambos deben detenerse",
                "D) El que circula a menor velocidad"
            ],
            respuestaCorrecta: 1,
            explicacion: "El vehículo que se aproxima por la izquierda debe ceder el paso al que viene por la derecha, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "4. En una intersección con señal de 'Pare', el conductor debe:",
            opciones: [
                "A) Reducir la velocidad y continuar si no hay peligro",
                "B) Detenerse completamente y ceder el paso",
                "C) Tocar bocina y avanzar con precaución",
                "D) Solo detenerse si hay otros vehículos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Ante una señal de 'Pare', el conductor debe detenerse completamente y ceder el paso a los vehículos que circulan por la vía preferencial, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "5. Si un vehículo se aproxima a una intersección con semáforo en amarillo intermitente, el conductor debe:",
            opciones: [
                "A) Detenerse completamente",
                "B) Continuar con precaución",
                "C) Acelerar para pasar rápidamente",
                "D) Tratarlo como una señal de 'Pare'"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una luz amarilla intermitente indica que se debe continuar con precaución, aumentando la atención, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "6. Al girar a la izquierda en una intersección, ¿a quién debe ceder el paso el conductor?",
            opciones: [
                "A) A los vehículos que vienen en sentido contrario",
                "B) A los peatones que cruzan la calle que va a tomar",
                "C) A ambos, vehículos y peatones",
                "D) No debe ceder el paso a nadie"
            ],
            respuestaCorrecta: 2,
            explicacion: "Al girar a la izquierda, el conductor debe ceder el paso a los vehículos que vienen de frente y a los peatones que cruzan la calle, de acuerdo con el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "7. Si un vehículo quiere ingresar a una vía principal desde una vía secundaria o camino privado, ¿qué debe hacer?",
            opciones: [
                "A) Tiene prioridad sobre los vehículos en la vía principal",
                "B) Debe ceder el paso a los vehículos que circulan por la vía principal",
                "C) Avanzar lentamente sin detenerse",
                "D) Tocar bocina para avisar su ingreso"
            ],
            respuestaCorrecta: 1,
            explicacion: "Al ingresar desde una vía secundaria o camino privado a una vía principal, el conductor debe ceder el paso a los vehículos que circulan por la vía principal, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "8. En una intersección donde el semáforo no funciona, el conductor debe:",
            opciones: [
                "A) Pasar sin detenerse",
                "B) Ceder el paso a todos los vehículos",
                "C) Seguir las normas de preferencia generales (por la derecha)",
                "D) Tocar bocina y cruzar rápidamente"
            ],
            respuestaCorrecta: 2,
            explicacion: "Si el semáforo no funciona, se aplican las normas generales de preferencia, cediendo el paso al vehículo que viene por la derecha, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "9. Cuando dos vehículos se aproximan a un puente angosto desde direcciones opuestas, ¿quién tiene la prioridad?",
            opciones: [
                "A) El que llega primero",
                "B) El que viene en sentido ascendente",
                "C) El que viene en sentido descendente",
                "D) El vehículo de menor tamaño"
            ],
            respuestaCorrecta: 0,
            explicacion: "En puentes angostos, generalmente tiene prioridad el vehículo que llega primero, pero se debe conducir con precaución y cooperación, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "10. Si hay obstáculos en su carril y necesita invadir el carril contrario, ¿qué debe hacer?",
            opciones: [
                "A) Acelerar y pasar rápidamente",
                "B) Ceder el paso a los vehículos que vienen en sentido contrario",
                "C) Continuar sin reducir la velocidad",
                "D) Tocar bocina para advertir a los demás"
            ],
            respuestaCorrecta: 1,
            explicacion: "Si debe invadir el carril contrario, debe ceder el paso a los vehículos que vienen de frente y realizar la maniobra solo cuando sea seguro, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "11. En una vía con carriles de aceleración para incorporarse al tráfico, ¿quién tiene la preferencia?",
            opciones: [
                "A) El vehículo que se incorpora",
                "B) Los vehículos que ya circulan por la vía principal",
                "C) Depende de la velocidad",
                "D) Ninguno, ambos deben ceder"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los vehículos que ya circulan por la vía principal tienen preferencia; el vehículo que se incorpora debe hacerlo sin interferir el tráfico, de acuerdo con el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "12. Al aproximarse a un cruce ferroviario sin barreras ni semáforos, el conductor debe:",
            opciones: [
                "A) Acelerar para cruzar rápidamente",
                "B) Reducir la velocidad y asegurarse de que no se aproxima un tren",
                "C) Continuar sin reducir la velocidad",
                "D) Tocar bocina antes de cruzar"
            ],
            respuestaCorrecta: 1,
            explicacion: "En cruces ferroviarios sin barreras ni señales, el conductor debe reducir la velocidad, mirar y escuchar, y cruzar solo cuando esté seguro de que no se aproxima un tren, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "13. Si un peatón cruza la calzada por un lugar no permitido y hay riesgo de atropello, el conductor debe:",
            opciones: [
                "A) Tocar bocina y continuar",
                "B) Detenerse o reducir la velocidad para evitar el accidente",
                "C) Seguir, ya que el peatón está infringiendo la ley",
                "D) Maniobrar para esquivar al peatón sin frenar"
            ],
            respuestaCorrecta: 1,
            explicacion: "Aunque el peatón esté cruzando incorrectamente, el conductor debe tomar las medidas necesarias para evitar el accidente, según el principio de seguridad vial establecido en el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "14. En una intersección con señal de 'Ceda el Paso', el conductor debe:",
            opciones: [
                "A) Detenerse obligatoriamente",
                "B) Continuar si no hay vehículos cercanos",
                "C) Reducir la velocidad y estar preparado para detenerse si es necesario",
                "D) Ignorar la señal si tiene prisa"
            ],
            respuestaCorrecta: 2,
            explicacion: "La señal de 'Ceda el Paso' indica que el conductor debe reducir la velocidad y estar preparado para detenerse si se aproxima otro vehículo, cediendo la prioridad, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "15. ¿Quién tiene prioridad en una intersección entre un vehículo que gira y otro que sigue de frente?",
            opciones: [
                "A) El vehículo que gira",
                "B) El vehículo que sigue de frente",
                "C) El más rápido",
                "D) El que toque bocina primero"
            ],
            respuestaCorrecta: 1,
            explicacion: "El vehículo que sigue de frente tiene prioridad sobre el que gira, según las normas de circulación establecidas en el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "16. En una intersección, un vehículo de emergencia se aproxima con señales luminosas y sonoras, ¿qué debe hacer el conductor?",
            opciones: [
                "A) Continuar si tiene luz verde",
                "B) Detenerse y ceder el paso al vehículo de emergencia",
                "C) Acelerar para pasar antes",
                "D) Ignorar al vehículo de emergencia si está en sentido contrario"
            ],
            respuestaCorrecta: 1,
            explicacion: "El conductor debe detenerse y ceder el paso a los vehículos de emergencia que circulan con señales luminosas y sonoras, independientemente de las señales de tránsito, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "17. Si un vehículo estacionado inicia la marcha desde el borde de la acera, ¿quién tiene la prioridad?",
            opciones: [
                "A) El vehículo que inicia la marcha",
                "B) Los vehículos que ya circulan por la vía",
                "C) Depende de la señalización",
                "D) Ninguno, ambos deben ceder"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los vehículos que ya circulan por la vía tienen prioridad; el vehículo que se incorpora debe hacerlo sin entorpecer el tráfico, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "18. En una vía de doble sentido, si dos vehículos se aproximan y hay un obstáculo en un carril, ¿quién debe ceder el paso?",
            opciones: [
                "A) El vehículo en cuyo carril está el obstáculo",
                "B) El vehículo que se aproxima en sentido contrario",
                "C) El vehículo más pequeño",
                "D) El que llegue primero al obstáculo"
            ],
            respuestaCorrecta: 0,
            explicacion: "El vehículo en cuyo carril se encuentra el obstáculo debe ceder el paso y esperar a que pase el vehículo que viene en sentido contrario, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "19. ¿Qué debe hacer si está detenido en una intersección esperando para girar a la izquierda y la luz cambia a roja?",
            opciones: [
                "A) Retroceder y esperar detrás de la línea",
                "B) Completar el giro rápidamente si es seguro",
                "C) Esperar en medio de la intersección hasta que vuelva a verde",
                "D) Girar a la derecha en su lugar"
            ],
            respuestaCorrecta: 1,
            explicacion: "Si ya está dentro de la intersección esperando para girar y la luz cambia a roja, debe completar el giro cuando sea seguro, despejando la intersección, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "20. En un cruce con un agente de tránsito dando indicaciones contradictorias al semáforo, ¿a quién debe obedecer el conductor?",
            opciones: [
                "A) Al semáforo",
                "B) Al agente de tránsito",
                "C) A las señales horizontales de la calzada",
                "D) A las normas generales de preferencia"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las indicaciones de los agentes de tránsito prevalecen sobre cualquier otra señalización, por lo que el conductor debe obedecer al agente, conforme al **Reglamento Nacional de Circulación Vial**."
        }
    ],
    test3: [
        {
            pregunta: "1. Una señal octogonal roja con la palabra 'PARE' indica que el conductor debe:",
            opciones: [
                "A) Reducir la velocidad y continuar si no hay peligro",
                "B) Detenerse completamente y ceder el paso",
                "C) Continuar a velocidad constante",
                "D) Tocar bocina antes de cruzar"
            ],
            respuestaCorrecta: 1,
            explicacion: "La señal octogonal roja con la palabra 'PARE' es una señal de **alto obligatorio**. Según el **Reglamento Nacional de Circulación Vial**, el conductor debe detenerse completamente y ceder el paso antes de continuar."
        },
        {
            pregunta: "2. Una señal triangular con borde rojo y fondo blanco que contiene un símbolo de exclamación indica:",
            opciones: [
                "A) Advertencia general de peligro",
                "B) Prohibición de continuar",
                "C) Obligación de detenerse",
                "D) Fin de todas las restricciones"
            ],
            respuestaCorrecta: 0,
            explicacion: "Esta señal es una **advertencia general de peligro**, indicando al conductor que preste atención a posibles riesgos no especificados, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "3. Una señal circular con fondo azul y una flecha blanca apuntando hacia arriba significa:",
            opciones: [
                "A) Prohibido continuar de frente",
                "B) Obligación de continuar de frente",
                "C) Fin de vía",
                "D) Solo girar a la derecha o izquierda"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las señales circulares de fondo azul y símbolos blancos son de **obligación**. Esta indica que es obligatorio continuar de frente, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "4. Una señal cuadrada azul con una 'P' blanca indica:",
            opciones: [
                "A) Prohibido estacionar",
                "B) Estacionamiento permitido",
                "C) Zona de carga y descarga",
                "D) Parada de transporte público"
            ],
            respuestaCorrecta: 1,
            explicacion: "Esta señal indica que el estacionamiento está permitido en esa zona, de acuerdo con el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "5. Una señal circular con fondo blanco y un número 60 dentro de un círculo rojo significa:",
            opciones: [
                "A) Velocidad mínima de 60 km/h",
                "B) Velocidad máxima de 60 km/h",
                "C) Recomendación de velocidad",
                "D) Fin de la limitación de velocidad"
            ],
            respuestaCorrecta: 1,
            explicacion: "Esta es una señal de **limitación de velocidad máxima** a 60 km/h, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "6. Una señal triangular con borde rojo que muestra un ciervo representa:",
            opciones: [
                "A) Prohibido cazar",
                "B) Advertencia de animales salvajes en la vía",
                "C) Parque nacional cercano",
                "D) Zona de cría de ganado"
            ],
            respuestaCorrecta: 1,
            explicacion: "Esta señal **advierte** sobre la posible presencia de animales salvajes en la vía, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "7. Una señal circular con fondo blanco, borde rojo y una línea diagonal roja sobre un bocinazo indica:",
            opciones: [
                "A) Obligación de tocar bocina",
                "B) Prohibido utilizar la bocina",
                "C) Zona de ruido",
                "D) Fin de prohibición de bocina"
            ],
            respuestaCorrecta: 1,
            explicacion: "Esta señal prohíbe el uso de la bocina en esa área, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "8. Una señal cuadrada azul con una letra 'H' blanca significa:",
            opciones: [
                "A) Helipuerto",
                "B) Hospital cercano",
                "C) Hotel o alojamiento",
                "D) Área de descanso"
            ],
            respuestaCorrecta: 1,
            explicacion: "Indica la presencia de un **hospital cercano**, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "9. Una señal triangular con borde rojo y una figura de niños jugando advierte sobre:",
            opciones: [
                "A) Proximidad de una escuela o zona infantil",
                "B) Parque recreativo",
                "C) Zona prohibida para niños",
                "D) Área de juegos permitida"
            ],
            respuestaCorrecta: 0,
            explicacion: "Esta señal **advierte** sobre la proximidad de una escuela o zona donde es común la presencia de niños, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "10. Una señal circular con fondo blanco y una bicicleta negra tachada indica:",
            opciones: [
                "A) Prohibido el paso de bicicletas",
                "B) Vía exclusiva para bicicletas",
                "C) Precaución, ciclistas en la vía",
                "D) Fin de vía ciclista"
            ],
            respuestaCorrecta: 0,
            explicacion: "Esta señal prohíbe el tránsito de bicicletas en esa vía, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "11. Una señal rectangular azul con una 'E' blanca tachada con una línea roja indica:",
            opciones: [
                "A) Estacionamiento permitido",
                "B) Prohibido estacionar",
                "C) Zona de emergencia",
                "D) Estacionamiento exclusivo para residentes"
            ],
            respuestaCorrecta: 1,
            explicacion: "Indica que está prohibido estacionar en ese lugar, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "12. Una señal triangular con borde rojo y dos flechas en sentidos opuestos verticales advierte de:",
            opciones: [
                "A) Vía de doble sentido de circulación",
                "B) Prohibido adelantar",
                "C) Prioridad en el sentido indicado",
                "D) Calle sin salida"
            ],
            respuestaCorrecta: 0,
            explicacion: "Esta señal advierte que la vía pasa a ser de doble sentido de circulación, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "13. Una señal circular con fondo blanco y un camión negro tachado indica:",
            opciones: [
                "A) Prohibido el paso de vehículos pesados",
                "B) Vía exclusiva para camiones",
                "C) Zona de carga y descarga",
                "D) Precaución, camiones en la vía"
            ],
            respuestaCorrecta: 0,
            explicacion: "Prohíbe el tránsito de vehículos pesados o camiones en esa vía, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "14. Una señal rectangular con fondo azul y una letra 'P' blanca sobre una silla de ruedas indica:",
            opciones: [
                "A) Estacionamiento para personas con discapacidad",
                "B) Hospital cercano",
                "C) Prohibido estacionar",
                "D) Zona peatonal"
            ],
            respuestaCorrecta: 0,
            explicacion: "Señala un **estacionamiento reservado para personas con discapacidad**, conforme a las **Ordenanzas y Decretos Departamentales** y el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "15. Una señal circular con fondo azul y una flecha blanca curvada hacia la derecha significa:",
            opciones: [
                "A) Prohibido girar a la derecha",
                "B) Obligación de girar a la derecha",
                "C) Curva peligrosa a la derecha",
                "D) Desvío por obras"
            ],
            respuestaCorrecta: 1,
            explicacion: "Indica la **obligación de girar a la derecha**, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "16. Una señal triangular con borde rojo y un dibujo de un semáforo advierte de:",
            opciones: [
                "A) Semáforo en funcionamiento más adelante",
                "B) Semáforo fuera de servicio",
                "C) Control policial",
                "D) Zona de radar"
            ],
            respuestaCorrecta: 0,
            explicacion: "Advierte sobre la presencia de un **semáforo** más adelante, para que el conductor esté atento, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "17. Una señal cuadrada azul con una letra 'M' blanca indica:",
            opciones: [
                "A) Metro o subterráneo",
                "B) Hospital",
                "C) Zona de montaña",
                "D) Parque mecánico"
            ],
            respuestaCorrecta: 0,
            explicacion: "Indica la **presencia de una estación de metro** o subterráneo, según las **Ordenanzas y Decretos Departamentales**."
        },
        {
            pregunta: "18. Una señal circular con fondo blanco y una flecha negra apuntando hacia la izquierda tachada con una línea roja significa:",
            opciones: [
                "A) Obligación de girar a la izquierda",
                "B) Prohibido girar a la izquierda",
                "C) Desvío obligatorio",
                "D) Fin de prohibición de giro"
            ],
            respuestaCorrecta: 1,
            explicacion: "Esta señal prohíbe girar a la izquierda en esa intersección, conforme al **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "19. Una señal rectangular con fondo blanco y una línea negra en zigzag significa:",
            opciones: [
                "A) Calzada resbaladiza",
                "B) Curvas peligrosas",
                "C) Prohibido adelantar",
                "D) Inicio de pavimento irregular"
            ],
            respuestaCorrecta: 0,
            explicacion: "Advierte que la calzada puede estar **resbaladiza**, especialmente en condiciones húmedas, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "20. Una señal triangular con borde rojo y un tren dibujado indica:",
            opciones: [
                "A) Estación de tren cercana",
                "B) Paso a nivel sin barreras",
                "C) Prohibido el paso de trenes",
                "D) Museo ferroviario"
            ],
            respuestaCorrecta: 1,
            explicacion: "Advierte sobre un **paso a nivel sin barreras** más adelante, por lo que se debe extremar la precaución, conforme al **Reglamento Nacional de Circulación Vial**."
        }
    ],
    test4: [
        {
            pregunta: "1. ¿Cuál es la distancia mínima que debe mantener un conductor al seguir a otro vehículo en condiciones normales?",
            opciones: [
                "A) 2 segundos de distancia",
                "B) 5 metros",
                "C) 10 segundos de distancia",
                "D) No es necesario mantener distancia"
            ],
            respuestaCorrecta: 0,
            explicacion: "La regla de los **2 segundos** es una buena práctica para mantener una distancia segura. Esto permite reaccionar adecuadamente ante cualquier imprevisto, según las **buenas prácticas de conducción defensiva** recomendadas en el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "2. El uso del cinturón de seguridad es obligatorio para:",
            opciones: [
                "A) Solo el conductor",
                "B) El conductor y el acompañante delantero",
                "C) Todos los ocupantes del vehículo",
                "D) Solo en carreteras y autopistas"
            ],
            respuestaCorrecta: 2,
            explicacion: "El **Artículo 31 de la Ley N° 19.061** establece que el uso del cinturón de seguridad es **obligatorio para todos los ocupantes** del vehículo en todo momento y en todas las vías."
        },
        {
            pregunta: "3. ¿Qué deben utilizar los niños menores de 12 años al viajar en un vehículo?",
            opciones: [
                "A) Cinturón de seguridad estándar",
                "B) Sistema de retención infantil adecuado",
                "C) Pueden viajar sin sujeción en el asiento trasero",
                "D) Sentarse en el asiento delantero con cinturón"
            ],
            respuestaCorrecta: 1,
            explicacion: "Según el **Artículo 31 de la Ley N° 19.061**, los niños menores de 12 años deben utilizar un **sistema de retención infantil** adecuado a su peso y estatura, y viajar en el asiento trasero."
        },
        {
            pregunta: "4. Conducir bajo los efectos del alcohol está:",
            opciones: [
                "A) Permitido si el nivel es inferior a 0.3 g/l",
                "B) Prohibido en todos los casos",
                "C) Permitido si el conductor se siente en condiciones",
                "D) Permitido solo en zonas urbanas"
            ],
            respuestaCorrecta: 1,
            explicacion: "La **Ley N° 19.360** establece la **tolerancia cero** de alcohol en sangre para conductores. Conducir bajo los efectos del alcohol está **prohibido en todos los casos**."
        },
        {
            pregunta: "5. ¿Cuál es la acción correcta al sentir fatiga durante la conducción?",
            opciones: [
                "A) Abrir la ventana y continuar",
                "B) Beber café y seguir conduciendo",
                "C) Detenerse en un lugar seguro y descansar",
                "D) Aumentar la velocidad para llegar más rápido"
            ],
            respuestaCorrecta: 2,
            explicacion: "Es una **buena práctica de seguridad vial** detenerse en un lugar seguro para descansar si se siente fatiga, ya que la somnolencia disminuye la capacidad de reacción y puede provocar accidentes."
        },
        {
            pregunta: "6. El uso de dispositivos móviles mientras se conduce está:",
            opciones: [
                "A) Permitido solo para llamadas cortas",
                "B) Prohibido en cualquier forma",
                "C) Permitido con manos libres",
                "D) Permitido para enviar mensajes de texto"
            ],
            respuestaCorrecta: 1,
            explicacion: "El **Artículo 38 de la Ley N° 18.191** prohíbe el uso de dispositivos móviles durante la conducción, incluso con manos libres, ya que distraen la atención del conductor."
        },
        {
            pregunta: "7. ¿Qué debe hacer un conductor antes de iniciar un viaje largo?",
            opciones: [
                "A) Revisar el estado mecánico del vehículo",
                "B) Cargar combustible únicamente",
                "C) Salir sin verificar nada para ahorrar tiempo",
                "D) Solo ajustar los espejos"
            ],
            respuestaCorrecta: 0,
            explicacion: "Como **buena práctica de seguridad vial**, el conductor debe **revisar el estado mecánico** del vehículo, incluyendo frenos, neumáticos, luces y niveles de fluidos, antes de iniciar un viaje largo."
        },
        {
            pregunta: "8. ¿Cuál es la forma correcta de proceder al acercarse a un paso de peatones donde hay personas esperando para cruzar?",
            opciones: [
                "A) Continuar sin detenerse si no han iniciado el cruce",
                "B) Detenerse y ceder el paso a los peatones",
                "C) Tocar bocina para que crucen rápidamente",
                "D) Acelerar para pasar antes que ellos"
            ],
            respuestaCorrecta: 1,
            explicacion: "El **Artículo 35 del Reglamento Nacional de Circulación Vial** establece que los conductores deben **ceder el paso a los peatones** que se encuentren en los pasos de peatones o demuestren intención de cruzar."
        },
        {
            pregunta: "9. Al conducir en condiciones de lluvia intensa, es recomendable:",
            opciones: [
                "A) Aumentar la velocidad para salir rápidamente de la zona",
                "B) Mantener la misma velocidad",
                "C) Reducir la velocidad y aumentar la distancia de seguridad",
                "D) Apagar las luces para evitar reflejos"
            ],
            respuestaCorrecta: 2,
            explicacion: "En condiciones de lluvia intensa, se debe **reducir la velocidad y aumentar la distancia de seguridad**, ya que la adherencia al pavimento disminuye y se requiere más espacio para frenar, según las **buenas prácticas de conducción segura**."
        },
        {
            pregunta: "10. El efecto 'aquaplaning' se produce cuando:",
            opciones: [
                "A) Los neumáticos están nuevos",
                "B) El vehículo pierde contacto con la calzada por exceso de agua",
                "C) Se conduce a baja velocidad",
                "D) Hay mucho viento lateral"
            ],
            respuestaCorrecta: 1,
            explicacion: "El **aquaplaning** ocurre cuando una capa de agua se interpone entre los neumáticos y la calzada, haciendo que el vehículo pierda tracción y control. Es fundamental **reducir la velocidad** en estas condiciones."
        },
        {
            pregunta: "11. ¿Qué es la 'distancia de reacción'?",
            opciones: [
                "A) La distancia que recorre el vehículo mientras el conductor reacciona",
                "B) La distancia total necesaria para detener el vehículo",
                "C) La distancia entre su vehículo y el de adelante",
                "D) La distancia que se recorre después de frenar"
            ],
            respuestaCorrecta: 0,
            explicacion: "La **distancia de reacción** es el espacio que recorre el vehículo desde que el conductor percibe un peligro hasta que reacciona para tomar una acción, según los principios de la **seguridad vial**."
        },
        {
            pregunta: "12. ¿Qué debe hacer al detectar fallas en el sistema de frenos durante la conducción?",
            opciones: [
                "A) Continuar hasta el destino y luego revisar",
                "B) Detenerse de inmediato en un lugar seguro",
                "C) Reducir la velocidad y usar el freno de mano",
                "D) Aumentar la velocidad para llegar más rápido"
            ],
            respuestaCorrecta: 1,
            explicacion: "Ante fallas en el sistema de frenos, se debe **detener el vehículo de inmediato en un lugar seguro** y no continuar conduciendo, conforme al **Artículo 22 de la Ley N° 19.061** sobre condiciones mecánicas seguras."
        },
        {
            pregunta: "13. El punto ciego en la conducción se refiere a:",
            opciones: [
                "A) Una zona del vehículo sin visibilidad a través de los espejos",
                "B) Un lugar oscuro en la carretera",
                "C) El área directamente detrás del vehículo",
                "D) El área iluminada por las luces bajas"
            ],
            respuestaCorrecta: 0,
            explicacion: "El **punto ciego** es una zona alrededor del vehículo que no es visible para el conductor a través de los espejos. Es importante **girar la cabeza para verificar** antes de cambiar de carril o girar."
        },
        {
            pregunta: "14. ¿Qué es la conducción defensiva?",
            opciones: [
                "A) Conducir a alta velocidad para evitar riesgos",
                "B) Conducir anticipándose a las acciones de otros usuarios de la vía",
                "C) Conducir solo por vías principales",
                "D) Conducir con luces de emergencia encendidas"
            ],
            respuestaCorrecta: 1,
            explicacion: "La **conducción defensiva** implica anticiparse a las acciones de otros, mantener una actitud preventiva y respetar las normas de tránsito para evitar accidentes, promoviendo la **seguridad vial**."
        },
        {
            pregunta: "15. En caso de avería en carretera, es obligatorio:",
            opciones: [
                "A) Permanecer dentro del vehículo",
                "B) Colocar triángulos de señalización y usar chaleco reflectante",
                "C) Llamar inmediatamente a una grúa y esperar sin señalizar",
                "D) Empujar el vehículo hasta el taller más cercano"
            ],
            respuestaCorrecta: 1,
            explicacion: "El **Reglamento Nacional de Circulación Vial** exige que, en caso de avería, se deben **colocar dispositivos de señalización** (como triángulos) y el conductor debe usar un **chaleco reflectante** para ser visible."
        },
        {
            pregunta: "16. El uso de luces diurnas o bajas durante el día es:",
            opciones: [
                "A) Obligatorio en rutas nacionales",
                "B) Solo necesario en condiciones de poca visibilidad",
                "C) Prohibido para evitar desgaste de las luces",
                "D) Opcional según preferencia del conductor"
            ],
            respuestaCorrecta: 0,
            explicacion: "El **Artículo 30 de la Ley N° 19.061** establece que el uso de **luces bajas durante el día es obligatorio en rutas nacionales** para mejorar la visibilidad y prevenir accidentes."
        },
        {
            pregunta: "17. Al cambiar de carril, el conductor debe:",
            opciones: [
                "A) Señalizar la maniobra con antelación",
                "B) Cambiar rápidamente sin señalizar para evitar confusiones",
                "C) Solo mirar el espejo retrovisor central",
                "D) Acelerar y cambiar de carril sin mirar"
            ],
            respuestaCorrecta: 0,
            explicacion: "El **Reglamento Nacional de Circulación Vial** indica que se debe **señalizar con antelación** y verificar los espejos y puntos ciegos antes de cambiar de carril."
        },
        {
            pregunta: "18. ¿Cuál es la acción correcta al aproximarse a una zona de obras en la vía?",
            opciones: [
                "A) Acelerar para pasar rápidamente",
                "B) Mantener la velocidad y continuar",
                "C) Reducir la velocidad y seguir las señales temporales",
                "D) Cambiar de carril sin señalizar"
            ],
            respuestaCorrecta: 2,
            explicacion: "Es una **buena práctica** reducir la velocidad y **seguir las señales temporales** en zonas de obras para garantizar la seguridad de los trabajadores y usuarios, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "19. ¿Qué efecto tiene el uso del cinturón de seguridad en caso de colisión?",
            opciones: [
                "A) Aumenta las lesiones",
                "B) No tiene ningún efecto",
                "C) Reduce el riesgo de lesiones graves o muerte",
                "D) Solo es efectivo a baja velocidad"
            ],
            respuestaCorrecta: 2,
            explicacion: "El uso del **cinturón de seguridad** es fundamental para **reducir el riesgo de lesiones graves o muerte** en caso de accidente, tal como promueven las **normas de seguridad vial** y el **Artículo 31 de la Ley N° 19.061**."
        },
        {
            pregunta: "20. La responsabilidad de garantizar que todos los pasajeros usen el cinturón de seguridad recae en:",
            opciones: [
                "A) Cada pasajero individualmente",
                "B) El conductor del vehículo",
                "C) Solo en los padres de los niños",
                "D) Las autoridades de tránsito"
            ],
            respuestaCorrecta: 1,
            explicacion: "El **conductor** es responsable de asegurar que todos los ocupantes utilicen el cinturón de seguridad, especialmente en el caso de menores de edad, conforme al **Artículo 31 de la Ley N° 19.061**."
        }
    ],
    test5: [
        {
            pregunta: "1. ¿Cuál es el límite permitido de alcohol en sangre para conductores en Uruguay?",
            opciones: [
                "A) 0.0 gramos por litro",
                "B) 0.3 gramos por litro",
                "C) 0.5 gramos por litro",
                "D) 0.8 gramos por litro"
            ],
            respuestaCorrecta: 0,
            explicacion: "La **Ley N° 18.191** establece la tolerancia cero de alcohol en sangre para conductores en Uruguay, es decir, 0.0 gramos por litro."
        },
        {
            pregunta: "2. Conducir bajo los efectos del alcohol es sancionado con:",
            opciones: [
                "A) Multa y suspensión de la licencia",
                "B) Solo advertencia verbal",
                "C) No se considera infracción",
                "D) Retiro del vehículo únicamente"
            ],
            respuestaCorrecta: 0,
            explicacion: "La **Ley N° 18.191** y la **Ley N° 19.061** establecen sanciones que incluyen multas y suspensión de la licencia para quienes conduzcan bajo los efectos del alcohol."
        },
        {
            pregunta: "3. ¿Está permitido conducir después de haber consumido drogas que afecten la capacidad de conducción?",
            opciones: [
                "A) Sí, si el conductor se siente bien",
                "B) No, está prohibido y es sancionado por la ley",
                "C) Solo en trayectos cortos",
                "D) Sí, si son medicamentos recetados"
            ],
            respuestaCorrecta: 1,
            explicacion: "Conducir bajo los efectos de drogas que afecten la capacidad de conducción está prohibido y sancionado por la **Ley N° 18.191** y la **Ley N° 19.061**."
        },
        {
            pregunta: "4. ¿Qué establece la Ley N° 18.191 respecto al consumo de alcohol y conducción?",
            opciones: [
                "A) Permite hasta 0.5 gramos de alcohol por litro de sangre",
                "B) Prohíbe conducir con cualquier nivel de alcohol en sangre",
                "C) No regula el consumo de alcohol",
                "D) Permite hasta 0.3 gramos de alcohol por litro de sangre"
            ],
            respuestaCorrecta: 1,
            explicacion: "La **Ley N° 18.191** establece la **tolerancia cero** al consumo de alcohol para conductores."
        },
        {
            pregunta: "5. ¿Qué tipo de pruebas pueden realizar las autoridades para detectar alcohol o drogas en conductores?",
            opciones: [
                "A) Solo pruebas de aliento (espiración)",
                "B) Pruebas de sangre, aliento y saliva",
                "C) Ninguna prueba sin orden judicial",
                "D) Solo pruebas de sangre"
            ],
            respuestaCorrecta: 1,
            explicacion: "Según el **Reglamento Nacional de Circulación Vial** y las **Ordenanzas Departamentales**, las autoridades pueden realizar pruebas de sangre, aliento y saliva para detectar alcohol o drogas."
        },
        {
            pregunta: "6. Negarse a realizar una prueba de alcoholemia o de detección de drogas puede resultar en:",
            opciones: [
                "A) No ocurre nada, es un derecho del conductor",
                "B) Suspensión de la licencia y sanciones equivalentes a conducir bajo influencia",
                "C) Solo una advertencia",
                "D) Multa menor que si se confirmara el consumo"
            ],
            respuestaCorrecta: 1,
            explicacion: "Negarse a realizar las pruebas es considerado una infracción grave y se sanciona como si el conductor estuviera bajo los efectos, según la **Ley N° 18.191**."
        },
        {
            pregunta: "7. ¿Cuál es la sanción por conducir bajo los efectos del alcohol o drogas en Uruguay?",
            opciones: [
                "A) Multa económica",
                "B) Suspensión de la licencia de conducir",
                "C) Retención del vehículo",
                "D) Todas las anteriores"
            ],
            respuestaCorrecta: 3,
            explicacion: "Las sanciones pueden incluir multa, suspensión de la licencia y retención del vehículo, según la **Ley N° 19.061** y las **Ordenanzas Departamentales**."
        },
        {
            pregunta: "8. El alcohol afecta la capacidad de conducción porque:",
            opciones: [
                "A) Mejora la concentración",
                "B) Disminuye los reflejos y la percepción",
                "C) No tiene ningún efecto",
                "D) Aumenta la agudeza visual"
            ],
            respuestaCorrecta: 1,
            explicacion: "El alcohol disminuye los reflejos, la percepción y la capacidad de reacción, poniendo en riesgo la seguridad vial, según estudios citados en la **Ley N° 18.191**."
        },
        {
            pregunta: "9. ¿Es permitido conducir después de haber consumido medicamentos que causen somnolencia?",
            opciones: [
                "A) Sí, si son recetados",
                "B) No, si afectan la capacidad de conducción",
                "C) Sí, en trayectos cortos",
                "D) Solo durante el día"
            ],
            respuestaCorrecta: 1,
            explicacion: "Conducir bajo efectos de medicamentos que afecten la capacidad de conducción está prohibido, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "10. ¿Qué se entiende por conducción responsable según las leyes uruguayas?",
            opciones: [
                "A) Conducir rápido para llegar a tiempo",
                "B) Conducir sin consumir alcohol o drogas y respetando las normas",
                "C) Conducir solo en buenas condiciones climáticas",
                "D) Conducir bajo presión para cumplir horarios"
            ],
            respuestaCorrecta: 1,
            explicacion: "La **Ley N° 18.191** promueve la conducción responsable, que implica no consumir alcohol o drogas y respetar las normas de tránsito."
        },
        {
            pregunta: "11. ¿Qué establece la Ley N° 18.113 en relación a la seguridad vial?",
            opciones: [
                "A) Normas para la protección del medio ambiente",
                "B) Regulaciones sobre el transporte de cargas peligrosas",
                "C) Disposiciones sobre educación y seguridad vial",
                "D) Reglas para el transporte público"
            ],
            respuestaCorrecta: 2,
            explicacion: "La **Ley N° 18.113** establece disposiciones sobre educación y seguridad vial, incluyendo campañas contra el consumo de alcohol y drogas al conducir."
        },
        {
            pregunta: "12. Según la normativa, ¿quién es responsable si un conductor profesional causa un accidente bajo los efectos del alcohol?",
            opciones: [
                "A) Solo el conductor",
                "B) El conductor y su empleador",
                "C) Nadie, es un accidente",
                "D) Las víctimas por estar en el lugar equivocado"
            ],
            respuestaCorrecta: 1,
            explicacion: "El conductor es responsable penal y civilmente, y el empleador puede ser responsable por negligencia, según el **Código Penal** y la **Ley N° 18.191**."
        },
        {
            pregunta: "13. ¿Qué significa conducción bajo los efectos de estupefacientes según la ley?",
            opciones: [
                "A) Conducir habiendo consumido sustancias ilegales",
                "B) Conducir sin haber dormido suficiente",
                "C) Conducir en estado de cansancio extremo",
                "D) Conducir después de tomar café"
            ],
            respuestaCorrecta: 0,
            explicacion: "Conducir bajo los efectos de estupefacientes se refiere a haber consumido sustancias que alteran las capacidades cognitivas, según la **Ley N° 18.191**."
        },
        {
            pregunta: "14. La conducción bajo efectos del alcohol o drogas es considerada una infracción:",
            opciones: [
                "A) Leve",
                "B) Grave",
                "C) Muy grave",
                "D) No es considerada infracción"
            ],
            respuestaCorrecta: 2,
            explicacion: "Es considerada una infracción **muy grave**, con sanciones severas, según la **Ley N° 19.061** y el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "15. ¿Es obligatorio informar al médico que se es conductor al recibir una prescripción?",
            opciones: [
                "A) No, no es relevante",
                "B) Sí, para evitar medicamentos que afecten la conducción",
                "C) Solo si se conduce vehículos pesados",
                "D) Solo si se conduce de noche"
            ],
            respuestaCorrecta: 1,
            explicacion: "Es recomendable y en algunos casos obligatorio informar al médico para evitar medicamentos que afecten la capacidad de conducción, según buenas prácticas y el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "16. ¿Qué efectos puede tener el consumo de drogas ilegales en la conducción?",
            opciones: [
                "A) Mejora la concentración",
                "B) Alteración de la percepción y reflejos",
                "C) Ningún efecto",
                "D) Aumento de habilidades motoras"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las drogas ilegales pueden alterar la percepción, disminuir los reflejos y aumentar el riesgo de accidentes, según estudios citados en la **Ley N° 18.191**."
        },
        {
            pregunta: "17. ¿Qué implica la tolerancia cero de alcohol en conductores profesionales?",
            opciones: [
                "A) Pueden tener hasta 0.3 gramos por litro",
                "B) No pueden tener ningún nivel de alcohol en sangre",
                "C) Se aplica solo en horarios laborales",
                "D) No se aplica a conductores profesionales"
            ],
            respuestaCorrecta: 1,
            explicacion: "La **Ley N° 18.191** establece tolerancia cero de alcohol para todos los conductores, incluyendo profesionales, en cualquier circunstancia."
        },
        {
            pregunta: "18. ¿Es legal conducir bajo los efectos de medicamentos que afecten la capacidad de conducción si son recetados?",
            opciones: [
                "A) Sí, siempre que sean recetados",
                "B) No, si afectan la capacidad de conducción está prohibido",
                "C) Solo si se lleva la receta médica",
                "D) Sí, pero solo durante el día"
            ],
            respuestaCorrecta: 1,
            explicacion: "Independientemente de ser medicamentos recetados, si afectan la capacidad de conducción, está prohibido conducir, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "19. ¿Qué debe hacer un conductor designado en un grupo que consume alcohol?",
            opciones: [
                "A) Puede beber si es en poca cantidad",
                "B) No consumir alcohol para garantizar la seguridad",
                "C) Beber solo cerveza o vino",
                "D) Conducir más despacio si ha bebido"
            ],
            respuestaCorrecta: 1,
            explicacion: "El conductor designado debe abstenerse de consumir alcohol para asegurar un transporte seguro, promovido por campañas de seguridad vial y respaldado por la **Ley N° 18.191**."
        },
        {
            pregunta: "20. ¿Qué organismo es responsable de realizar controles de alcoholemia en Uruguay?",
            opciones: [
                "A) La Policía Nacional de Tránsito",
                "B) El Ministerio de Salud Pública",
                "C) Las compañías de seguros",
                "D) Los hospitales públicos"
            ],
            respuestaCorrecta: 0,
            explicacion: "La **Policía Nacional de Tránsito** y las autoridades competentes son responsables de realizar controles de alcoholemia, según la **Ley N° 18.191** y las **Ordenanzas Departamentales**."
        }
    ],
    test6: [
        {
            pregunta: "1. ¿Qué acción debe tomar un conductor si se revienta un neumático mientras conduce?",
            opciones: [
                "A) Frenar de manera brusca.",
                "B) Retirar el pie del acelerador y sujetar firmemente el volante.",
                "C) Apagar el motor inmediatamente.",
                "D) Girar rápidamente hacia el lado donde ocurrió el reventón."
            ],
            respuestaCorrecta: 1,
            explicacion: "Ante el reventón de un neumático, es crucial mantener la calma, retirar el pie del acelerador y sostener el volante con firmeza, permitiendo que el vehículo reduzca la velocidad gradualmente. Frenar bruscamente o girar abruptamente puede provocar la pérdida de control. Esto se alinea con las recomendaciones del **Reglamento Nacional de Circulación Vial** sobre cómo actuar en situaciones de emergencia."
        },
        {
            pregunta: "2. Los peatones que transitan por la acera tienen prioridad de paso cuando un vehículo cruza para entrar o salir de un garaje.",
            opciones: [
                "A) Verdadero.",
                "B) Falso."
            ],
            respuestaCorrecta: 0,
            explicacion: "Los peatones siempre tienen prioridad en las aceras. Los conductores deben ceder el paso al entrar o salir de un garaje, según lo establecido en el **Artículo 36 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "3. Los inspectores de tránsito están autorizados a modificar las preferencias de paso cuando las circunstancias lo requieren.",
            opciones: [
                "A) Verdadero.",
                "B) Falso."
            ],
            respuestaCorrecta: 0,
            explicacion: "Los agentes de tránsito pueden dirigir y controlar el flujo vehicular, incluso alterando las preferencias establecidas, de acuerdo con el **Artículo 7 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "4. Incluso tomando descansos, no se debe conducir más de 9 horas continuas.",
            opciones: [
                "A) Verdadero.",
                "B) Falso."
            ],
            respuestaCorrecta: 0,
            explicacion: "La **Ley N° 18.191** y las normativas laborales recomiendan no exceder las 9 horas de conducción diaria para evitar la fatiga y garantizar la seguridad vial."
        },
        {
            pregunta: "5. Un vehículo estacionado correctamente debe estar con:",
            opciones: [
                "A) El motor apagado.",
                "B) Las ruedas giradas hacia el cordón de la acera.",
                "C) El freno de mano activado.",
                "D) Las opciones A y C son correctas."
            ],
            respuestaCorrecta: 3,
            explicacion: "Al estacionar, se debe apagar el motor y activar el freno de mano para evitar desplazamientos involuntarios, según el **Artículo 43 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "6. ¿Cuál es la velocidad máxima permitida en carreteras, salvo indicación en contrario?",
            opciones: [
                "A) 45 km/h.",
                "B) 60 km/h.",
                "C) 75 km/h.",
                "D) 90 km/h."
            ],
            respuestaCorrecta: 3,
            explicacion: "La velocidad máxima en carreteras es de 90 km/h, salvo señalización específica que indique otra limitación, según el **Artículo 33 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "7. Nunca se debe adelantar a un vehículo que está cediendo el paso a peatones.",
            opciones: [
                "A) Verdadero.",
                "B) Falso."
            ],
            respuestaCorrecta: 0,
            explicacion: "Es prohibido y peligroso adelantar en estas circunstancias, ya que puede poner en riesgo la seguridad de los peatones, conforme al **Artículo 37 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "8. ¿Qué indica una señal de tránsito que prohíbe adelantar?",
            opciones: [
                "A) Prohibido estacionar en doble fila.",
                "B) Advertencia de tránsito en sentido contrario.",
                "C) Vía de sentido único.",
                "D) Prohibición de adelantamiento."
            ],
            respuestaCorrecta: 3,
            explicacion: "La señal de 'Prohibido adelantar' indica que no se permite sobrepasar a otros vehículos en esa sección de la vía, según las especificaciones del **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "9. Los agentes de tránsito pueden retener la licencia de conducir entregando el recibo correspondiente:",
            opciones: [
                "A) Por cometer una infracción de tránsito.",
                "B) Por detectar presencia de alcohol en sangre por encima del límite legal.",
                "C) Ambas son correctas."
            ],
            respuestaCorrecta: 2,
            explicacion: "Los agentes están facultados para retener la licencia en casos de infracciones graves, como superar el límite de alcohol permitido, conforme al **Artículo 47 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "10. ¿Qué debe hacer un conductor al preparar un giro a la derecha?",
            opciones: [
                "A) Ubicarse lo más a la derecha posible y activar el señalero.",
                "B) Mantenerse en el centro del carril y activar el señalero.",
                "C) Ubicarse a la izquierda y activar el señalero.",
                "D) No es necesario señalizar."
            ],
            respuestaCorrecta: 0,
            explicacion: "Para girar a la derecha, se debe aproximar al borde derecho y señalizar con suficiente antelación, según el **Artículo 44 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "11. Las distracciones que pueden causar accidentes incluyen:",
            opciones: [
                "A) Fumar mientras conduce.",
                "B) Uso del teléfono celular.",
                "C) Manipular el sistema GPS.",
                "D) Todas las anteriores."
            ],
            respuestaCorrecta: 3,
            explicacion: "Cualquier actividad que desvíe la atención del conductor es peligrosa y puede provocar accidentes, tal como se advierte en las campañas de seguridad vial basadas en la **Ley N° 18.191**."
        },
        {
            pregunta: "12. En condiciones normales, un vehículo solo debe conducirse en reversa hasta:",
            opciones: [
                "A) 30 metros.",
                "B) 50 metros.",
                "C) La distancia mínima necesaria.",
                "D) No hay límite."
            ],
            respuestaCorrecta: 2,
            explicacion: "La marcha atrás debe limitarse a lo indispensable y realizarse con extrema precaución, según el **Artículo 40 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "13. Si encuentra una señal que indica 'No girar en U', usted debe entender que:",
            opciones: [
                "A) No puede girar en U.",
                "B) No puede girar a la izquierda.",
                "C) Puede girar a la izquierda con precaución.",
                "D) Está en una vía de sentido único."
            ],
            respuestaCorrecta: 0,
            explicacion: "La señal de 'Prohibido girar en U' indica que no se permite realizar este tipo de maniobra en ese lugar, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "14. Un vehículo que circula a 70 km/h necesita aproximadamente qué distancia para detenerse completamente?",
            opciones: [
                "A) 10 metros.",
                "B) 25 metros.",
                "C) 50 metros.",
                "D) 100 metros."
            ],
            respuestaCorrecta: 2,
            explicacion: "A 70 km/h, la distancia de frenado es de aproximadamente 50 metros, considerando el tiempo de reacción y la eficiencia del sistema de frenos, según estudios de seguridad vial."
        },
        {
            pregunta: "15. ¿Cuál es la velocidad recomendada para conducir de manera segura en carretera?",
            opciones: [
                "A) Entre 70 y 90 km/h.",
                "B) Entre 100 y 120 km/h.",
                "C) Entre 50 y 60 km/h.",
                "D) Depende de las condiciones de la vía."
            ],
            respuestaCorrecta: 0,
            explicacion: "Una velocidad entre 70 y 90 km/h es considerada segura en carreteras, permitiendo un buen control del vehículo y capacidad de reacción, según el **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "16. ¿Qué afecta cargar demasiado el baúl del automóvil?",
            opciones: [
                "A) No afecta la conducción.",
                "B) La dirección y estabilidad del vehículo.",
                "C) La altura y orientación de las luces delanteras.",
                "D) Las opciones B y C son correctas."
            ],
            respuestaCorrecta: 3,
            explicacion: "Una carga excesiva en el baúl puede alterar la distribución del peso, afectando la dirección y el enfoque de las luces, lo que puede ser peligroso, según recomendaciones del **Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "17. ¿Cómo se puede calcular la distancia de seguridad con el vehículo que va delante en carretera?",
            opciones: [
                "A) Manteniendo al menos la mitad de la velocidad en metros.",
                "B) Aplicando la regla de los 3 segundos.",
                "C) Duplicando la velocidad y traduciéndola en metros.",
                "D) Las opciones A y B son correctas."
            ],
            respuestaCorrecta: 3,
            explicacion: "Es recomendable mantener una distancia segura usando la regla de los 3 segundos o considerando la mitad de la velocidad en metros, para tener tiempo suficiente de reacción, según prácticas de conducción segura."
        },
        {
            pregunta: "18. ¿Está permitido estacionar en un cruce peatonal o a menos de 5 metros de él?",
            opciones: [
                "A) Sí, es permitido.",
                "B) No, está prohibido.",
                "C) Solo si no hay señalización que lo prohíba.",
                "D) Solo en zonas rurales."
            ],
            respuestaCorrecta: 1,
            explicacion: "Estacionar en un cruce peatonal o cerca de él obstruye el paso seguro de peatones y está prohibido por el **Artículo 45 del Reglamento Nacional de Circulación Vial**."
        },
        {
            pregunta: "19. La velocidad inadecuada y el consumo de alcohol son:",
            opciones: [
                "A) Factores de riesgo en siniestralidad vial.",
                "B) Pocas veces causan accidentes; depende de la persona.",
                "C) No son causas de accidentes de tránsito.",
                "D) Solo afectan en condiciones climáticas adversas."
            ],
            respuestaCorrecta: 0,
            explicacion: "La velocidad excesiva y el alcohol son dos de las principales causas de accidentes de tránsito, como se establece en la **Ley N° 18.191** y campañas de seguridad vial."
        },
        {
            pregunta: "20. ¿Es permitido que una motocicleta circule con dos ocupantes?",
            opciones: [
                "A) Sí, siempre que ambos usen casco.",
                "B) No, solo el conductor puede ir en la moto.",
                "C) Sí, pero solo en zonas urbanas.",
                "D) No, está prohibido llevar acompañantes."
            ],
            respuestaCorrecta: 0,
            explicacion: "Está permitido que circulen dos personas en una motocicleta, siempre que ambos utilicen casco homologado, según el **Artículo 31 de la Ley N° 19.061**."
        }
    ]


};

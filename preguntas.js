// preguntas.js
var preguntas = preguntas || {};

preguntas['test'] = [
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
    ];

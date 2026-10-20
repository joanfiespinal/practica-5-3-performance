Práctica 5.3 - Pruebas de Performance con k6

Descripción del proyecto

Este proyecto tiene como objetivo evaluar el rendimiento de una API pública utilizando Grafana k6. Se utiliza PokéAPI para simular solicitudes HTTP, medir tiempos de respuesta y analizar el comportamiento del servicio bajo una carga moderada.

Objetivos

Realizar pruebas de rendimiento sobre una API.

Simular usuarios virtuales.

Medir los tiempos de respuesta.

Identificar solicitudes fallidas.

Analizar la cantidad de solicitudes ejecutadas.

Documentar los resultados obtenidos.

Herramientas utilizadas

Grafana k6: herramienta de pruebas de rendimiento.

PokéAPI: API pública utilizada para las pruebas.

JavaScript: lenguaje utilizado para desarrollar el script.

Visual Studio Code: editor de código.

Git y GitHub: control de versiones y publicación del proyecto.

Estructura del proyecto

practica-5-3-performance/
├── tests/
│   └── performance.js
├── resultados/
│   └── resumen.json
├── evidencias/
├── INFORME.md
├── README.md
└── .gitignore

Configuración de la prueba

El script tests/performance.js simula una carga progresiva de hasta 10 usuarios virtuales durante aproximadamente 60 segundos.

Se realizan solicitudes a diferentes Pokémon y se comprueba que:

El estado HTTP sea 200.

La respuesta contenga el nombre esperado.

El tiempo de respuesta sea inferior a 2 segundos.

También se establecen umbrales para el porcentaje de solicitudes fallidas y el percentil 95 del tiempo de respuesta.

Cómo ejecutar el proyecto

1. Instalar k6

En Windows, con PowerShell, ejecutar:

winget install k6 --source winget

2. Ejecutar la prueba

Desde la carpeta raíz del proyecto, ejecutar:

k6 run tests/performance.js

3. Exportar los resultados

Para guardar un resumen en formato JSON, ejecutar:

k6 run --summary-export resultados/resumen.json tests/performance.js

Resultados de la primera ejecución

Métrica

Resultado

Solicitudes HTTP

293

Iteraciones completadas

293

Comprobaciones exitosas

100 %

Solicitudes HTTP fallidas

0 %

Tiempo promedio

78.75 ms

Percentil 95

150.96 ms

Máximo de usuarios virtuales

10

Solicitudes por segundo

4.84

Los resultados indican que la API respondió correctamente durante la ejecución registrada. Las métricas pueden variar en nuevas pruebas.

Informe y evidencias

Informe completo: INFORME.md

Script de rendimiento: tests/performance.js

Resultados exportados: resultados/resumen.json

Capturas de pantalla: carpeta evidencias/

Conclusión

Esta práctica permitió aplicar pruebas de rendimiento con k6, medir tiempos de respuesta y verificar el comportamiento de una API bajo carga. Los resultados obtenidos fueron satisfactorios para las condiciones evaluadas.
INFORME DE PRUEBAS DE RENDIMIENTO

Práctica 5.3: Pruebas de Performance con k6

Herramienta utilizada: Grafana k6
Aplicación evaluada: PokéAPI
URL: https://pokeapi.co/api/v2/pokemon/
Tipo de prueba: Prueba de rendimiento con usuarios virtuales

1. Introducción

El objetivo de esta práctica es evaluar el rendimiento de una API mediante una herramienta de pruebas de carga. Para realizar la evaluación se utilizó k6, que permite simular usuarios virtuales, medir tiempos de respuesta y comprobar el porcentaje de solicitudes fallidas.

La aplicación seleccionada fue PokéAPI, una API pública que proporciona información sobre Pokémon.

2. Herramienta utilizada

Se utilizó Grafana k6, una herramienta de pruebas de rendimiento que permite ejecutar solicitudes HTTP y analizar métricas como el tiempo de respuesta, el número de solicitudes procesadas y los errores.

3. Configuración de la prueba

La prueba se configuró con tres etapas:

Aumento progresivo hasta 5 usuarios virtuales durante 15 segundos.

Incremento hasta 10 usuarios virtuales durante 30 segundos.

Reducción progresiva de los usuarios virtuales a cero durante 15 segundos.

Cada iteración realizó una solicitud a la API, comprobó la respuesta y esperó un segundo antes de continuar.

4. Resultados obtenidos

Los resultados de la primera ejecución fueron los siguientes:

Métrica

Resultado

Solicitudes HTTP

293

Iteraciones completadas

293

Comprobaciones realizadas

879

Comprobaciones exitosas

100 %

Solicitudes HTTP fallidas

0 %

Tiempo de respuesta promedio

78.75 ms

Tiempo mínimo

50.56 ms

Tiempo máximo

237.79 ms

Percentil 90 (p90)

100.51 ms

Percentil 95 (p95)

150.96 ms

Solicitudes por segundo

4.84

Máximo de usuarios virtuales

10

5. Análisis de los resultados

La API respondió correctamente durante la ejecución de la prueba. Se completaron 293 solicitudes HTTP y no se registraron solicitudes fallidas.

El tiempo promedio de respuesta fue de 78.75 milisegundos, mientras que el percentil 95 fue de 150.96 milisegundos. Esto significa que el 95 % de las solicitudes respondió en aproximadamente ese tiempo o menos.

Las 879 comprobaciones realizadas fueron exitosas. Se verificó que el estado HTTP fuera 200, que el nombre del Pokémon coincidiera con el solicitado y que el tiempo de respuesta fuera inferior a dos segundos.

También se cumplieron los umbrales configurados para el porcentaje de solicitudes fallidas y el percentil 95 del tiempo de respuesta.

6. Conclusión

La prueba permitió comprobar el funcionamiento de k6 para evaluar el rendimiento de una API. Bajo las condiciones de carga utilizadas, PokéAPI presentó tiempos de respuesta bajos y no registró solicitudes HTTP fallidas.

Se concluye que el servicio tuvo un comportamiento satisfactorio durante esta prueba. Sin embargo, los resultados corresponden a una carga moderada de hasta 10 usuarios virtuales y no garantizan el mismo rendimiento ante un número mucho mayor de usuarios.

7. Evidencias

Las evidencias de la práctica se organizarán en la carpeta evidencias, mientras que el resumen generado por k6 se almacenará en la carpeta resultados.

El script de prueba se encuentra en tests/performance.js y permite repetir la evaluación para comparar los resultados de distintas ejecuciones. 
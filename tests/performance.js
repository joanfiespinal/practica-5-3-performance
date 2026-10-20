
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate, Trend } from 'k6/metrics';

// Métricas personalizadas
const errores = new Rate('solicitudes_fallidas');
const tiempoRespuesta = new Trend('tiempo_respuesta_pokemon');

// Configuración de la prueba
export const options = {
  stages: [
    { duration: '15s', target: 5 },
    { duration: '30s', target: 10 },
    { duration: '15s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.05'],
    http_req_duration: ['p(95)<2000'],
    solicitudes_fallidas: ['rate<0.05'],
  },
};

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export default function () {
  // Cada usuario virtual consulta un Pokémon
  const pokemon = ['pikachu', 'charizard', 'bulbasaur', 'squirtle', 'eevee'];
  const elegido = pokemon[Math.floor(Math.random() * pokemon.length)];

  const respuesta = http.get(`${BASE_URL}${elegido}`);

  const correcta = check(respuesta, {
    'Estado HTTP es 200': (r) => r.status === 200,
    'La respuesta contiene nombre': (r) => {
      try {
        return JSON.parse(r.body).name === elegido;
      } catch (_) {
        return false;
      }
    },
    'Tiempo de respuesta menor a 2 segundos': (r) =>
      r.timings.duration < 2000,
  });

  errores.add(!correcta);
  tiempoRespuesta.add(respuesta.timings.duration);

  sleep(1);
}

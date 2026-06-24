console.log("%cEtapa 1 · Los jugadores del torneo", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

const jugadores = [
  { nombre: "Aragorn", pais: "CL", puntajes: [120, 90, 150] },
  { nombre: "Legolas", pais: "AR", puntajes: [200, 180, 220] },
  { nombre: "Gimli",   pais: "CL", puntajes: [80, 60, 100] },
  { nombre: "Gandalf", pais: "PE", puntajes: [300, 250, 290] },
];

// Recorre 'jugadores' e imprime el nombre y el país de cada uno.
jugadores.forEach((jugador) => {
  console.log(`${jugador.nombre} (${jugador.pais})`);
});

console.log("")

console.log("%cEtapa 2 · Funciones utilitarias con arrow", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const puntajeTotal = (jugador) => ...
const puntajeTotal = (jugador) => {
  return jugador.puntajes.reduce((acc, p) => acc + p, 0);
};

// const promedio = (jugador) => ...   (reutiliza puntajeTotal)
const promedio = (jugador) => puntajeTotal(jugador) / jugador.puntajes.length;

// Prueba: muestra total y promedio de Aragorn y de Gandalf
const aragorn = jugadores[0];
const gandalf = jugadores[3];

console.log(`Aragorn: total ${puntajeTotal(aragorn)}, promedio ${promedio(aragorn)}`);
console.log(`Gandalf: total ${puntajeTotal(gandalf)}, promedio ${promedio(gandalf)}`);

console.log("")

console.log("%cEtapa 3 · Una arrow que devuelve un objeto", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const crearResumen = (jugador) => ({ ... });   // ¡ojo con los () !
const crearResumen = (jugador) => ({
  nombre: jugador.nombre,
  total: puntajeTotal(jugador),
  promedio: promedio(jugador),
});

// Muestra el resumen de Gandalf
console.log(crearResumen(gandalf));

console.log("")
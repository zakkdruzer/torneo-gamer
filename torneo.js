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

console.log("%cEtapa 4 · Tu propio 'para cada jugador' ", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const paraCadaJugador = (accion) => {
//   recorre 'jugadores' con un for y ejecuta accion(jugadores[i])
// };

const paraCadaJugador = (accion) => {
  for (let i = 0; i < jugadores.length; i++) {
    accion(jugadores[i]);
  }
};

// Pruébala con DOS arrow distintas:
// 1) que imprima solo el nombre
console.log("-- solo nombre --");
paraCadaJugador((j) => {
  console.log(j.nombre);
});

// 2) que imprima nombre + país
console.log("-- nombre y país --");
paraCadaJugador((j) => {
  console.log(`${j.nombre} - ${j.pais}`);
});

console.log("")

console.log("%cEtapa 5 · Arrow como 'condición' (predicado)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const contarJugadoresQue = (condicion) => {
//   recorre con for, suma 1 cuando condicion(jugador) sea true, y retorna la cuenta
// };
const contarJugadoresQue = (condicion) => {
  let cuenta = 0;

  for (let i = 0; i < jugadores.length; i++) {
    const jugador = jugadores[i];
    if (condicion(jugador)) {
      cuenta++;
    }
  }

  return cuenta;
};

// Prueba 1: cuántos tienen total >= 400
const con400PtsOMas = contarJugadoresQue(
  (j) => puntajeTotal(j) >= 400
);

console.log(`Con 400+ puntos: ${con400PtsOMas}`);

// Prueba 2: cuántos son de país "CL"
const delPaisCL = contarJugadoresQue(
  (j) => j.pais === "CL"
);

console.log(`Del país CL: ${delPaisCL}`);

console.log("")

console.log("%cEtapa 6 · Clasificar con valor por defecto", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const clasificar = (jugador, minimo = 400) => { ... return ... };
const clasificar = (jugador, minimo = 400) => {
  if (puntajeTotal(jugador) >= minimo) {
    return "Clasificado";
  }

  return "Eliminado";
};

// Prueba: Aragorn (sin mínimo), Gandalf (sin mínimo), Aragorn con 300
console.log(`Aragorn: ${clasificar(aragorn)}`);             // mínimo por defecto 400
console.log(`Gandalf: ${clasificar(gandalf)}`);             // mínimo por defecto 400
console.log(`Aragorn (mínimo 300): ${clasificar(aragorn, 300)}`);

console.log("")

console.log("%cEtapa 7 · Medalla por puntaje (guard clauses)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const medalla = (total) => { ... varios if con return ... };
const medalla = (total) => {
  if (total >= 800) return "🥇 Oro";
  if (total >= 500) return "🥈 Plata";
  if (total >= 300) return "🥉 Bronce";
  return "Sin medalla";
};

// Con paraCadaJugador, imprime: nombre, total y medalla de cada uno
paraCadaJugador((j) => {
  const total = puntajeTotal(j);
  const m = medalla(total);
  console.log(`${j.nombre} (${total}): ${m}`);
});

console.log("")

console.log("%cEtapa 7 · Medalla por puntaje (guard clauses)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const reporteTorneo = () => {
//   imprime el título
//   paraCadaJugador((j) => ... nombre, total, promedio, medalla, clasificar ...)
//   imprime estadísticas con contarJugadoresQue(...)
// };
const reporteTorneo = () => {
  console.log("===== TORNEO GAMER 2026 =====");
  console.log("");
  console.log("-- JUGADORES --");

  paraCadaJugador((j) => {
    const total = puntajeTotal(j);
    const prom = promedio(j);
    const m = medalla(total);
    const estado = clasificar(j); // usa mínimo por defecto 400

    console.log(
      `${j.nombre} ${total} pts (prom ${prom}) → ${m} → ${estado}`
    );
  });

  console.log("");
  console.log("-- ESTADÍSTICAS --");

  const clasificados = contarJugadoresQue((j) => puntajeTotal(j) >= 400);
  const deCL = contarJugadoresQue((j) => j.pais === "CL");

  console.log(`Clasificados a la final: ${clasificados}`);
  console.log(`Jugadores de CL: ${deCL}`);
};

// reporteTorneo();   // una sola llamada genera todo el informe
reporteTorneo();

console.log("")
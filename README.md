# 🏆 Torneo Gamer 2026

Pequeño proyecto en JavaScript para practicar arrays, funciones flecha (arrow functions) y funciones de orden superior, modelando un torneo entre jugadores.

## 🚀 Objetivo

A partir de un arreglo de jugadores, el programa:
- Calcula totales y promedios de puntaje.
- Clasifica jugadores según un puntaje mínimo.
- Asigna medallas según su desempeño.
- Genera un reporte completo del torneo en la consola.

## 📂 Archivo principal

El proyecto se resuelve en un único archivo:

- `torneo.js`

Se ejecuta en Node o desde la consola del navegador.

## 👥 Datos de los jugadores

Cada jugador es un objeto con:
- `nombre`: Nombre del jugador.
- `pais`: Código de país (por ejemplo, `"CL"`).
- `puntajes`: Arreglo de números con los puntajes obtenidos en distintas partidas.

Ejemplo del arreglo:

```js
const jugadores = [
  { nombre: "Aragorn", pais: "CL", puntajes:  },[1]
  { nombre: "Legolas", pais: "AR", puntajes:  },
  { nombre: "Gimli",   pais: "CL", puntajes:  },[2][3][4]
  { nombre: "Gandalf", pais: "PE", puntajes:  },
];
```

## 🧩 Funciones implementadas

El ejercicio se resuelve por etapas, creando funciones pequeñas que luego se combinan:

- `puntajeTotal(jugador)`: Devuelve la suma de los puntajes del jugador usando `reduce`.
- `promedio(jugador)`: Devuelve el promedio de puntajes reutilizando `puntajeTotal`.
- `crearResumen(jugador)`: Devuelve un objeto `{ nombre, total, promedio }`.
- `paraCadaJugador(accion)`: Recorre el arreglo `jugadores` y ejecuta la función `accion` para cada uno.
- `contarJugadoresQue(condicion)`: Cuenta cuántos jugadores cumplen una condición booleana (predicado).
- `clasificar(jugador, minimo = 400)`: Devuelve `"Clasificado"` o `"Eliminado"` según el puntaje total y un mínimo (por defecto 400).
- `medalla(total)`: Devuelve `"🥇 Oro"`, `"🥈 Plata"`, `"🥉 Bronce"` o `"Sin medalla"` según el total.
- `reporteTorneo()`: Función “orquestadora” que llama a todas las anteriores y genera el informe completo.

## 📊 Salida esperada (ejemplo)

Al ejecutar `reporteTorneo()` se imprime en consola algo equivalente a:

```txt
===== TORNEO GAMER 2026 =====

-- JUGADORES --
Aragorn: 360 pts (prom 120) → 🥉 Bronce → Eliminado
Legolas: 600 pts (prom 200) → 🥈 Plata → Clasificado
Gimli: 240 pts (prom 80) → Sin medalla → Eliminado
Gandalf: 840 pts (prom 280) → 🥇 Oro → Clasificado

-- ESTADÍSTICAS --
Clasificados a la final: 2
Jugadores de CL: 2
```

## 🧪 Cómo ejecutar

1. Clonar o descargar el repositorio.
2. Abrir el proyecto en VS Code.
3. Ejecutar en consola:

```bash
node torneo.js
```

O bien pegar el contenido en la consola del navegador y revisar la salida en la pestaña **Console** de las DevTools.

## Puedes ver el resultado en:

https://zakkdruzer.github.io/torneo-gamer/

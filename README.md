# Polla Mundial 2026 — VEHIDIESEL S.A.S

Aplicación web SPA de pronósticos deportivos para la Copa Mundial FIFA 2026.

## Características

- **SPA** — Interfaz de página única con navegación por pestañas
- **Autenticación** — Inicio de sesión con Google
- **Pronósticos inline** — Pronostica directamente desde las tarjetas de partidos
- **Sistema de puntos**: 3 pts (resultado exacto), 1 pt (ganador correcto/empate)
- **Leaderboard** — Posiciones en tiempo real con estadísticas detalladas
- **Estadísticas** — Global de aciertos, líder actual, top partidos acertados
- **Búsqueda** — Filtra partidos por nombre de equipo
- **Tema oscuro/claro** — Alterna entre temas
- **Panel Admin** — Sincronización con API, exportación CSV, gestión de datos
- **Modo Demo** — Funciona sin Firebase ni API (datos simulados)
- **Diseño Moderno** — Fuentes Barlow, animaciones, gradientes, responsive

## Ejecutar

```bash
python3 -m http.server 8080
# o
npx serve .
```

Luego visita `http://localhost:8080`

## Administradores

Los admins se definen por email en el array `ADMIN_EMAILS` (línea 969 del HTML).

## API

Por defecto usa datos simulados. Para API real:
1. Regístrate en [football-data.org](https://www.football-data.org/)
2. Cambia `API_CONFIG.USE_MOCK` a `false` en el HTML
3. Reemplaza `FOOTBALL_DATA_KEY` con tu API key

## Estructura

```
index.html  — App completa (todo en un archivo, CSS+JS inline)
css/style.css — (legacy, no utilizado)
js/flags.js   — (legacy, no utilizado)
README.md
```

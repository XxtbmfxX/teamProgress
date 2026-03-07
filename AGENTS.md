# AGENTS.md — teamProgress

## Descripción del Proyecto

**teamProgress** es una aplicación web interactiva de tipo "Roadmap de Conocimientos" que permite a los miembros de un equipo de desarrollo rastrear su progreso individual a través de 11 niveles de habilidades técnicas, desde fundamentos hasta arquitectura avanzada.

## Stack Tecnológico

- **Runtime:** Node.js
- **Framework:** React 19 con TypeScript
- **Bundler:** Vite 8
- **Styling:** TailwindCSS 4 (via `@tailwindcss/vite`)
- **Iconos:** Lucide React
- **Package Manager:** pnpm

## Estructura del Proyecto

```
src/
  App.tsx        — Componente principal con toda la lógica del roadmap
  main.tsx       — Entry point de React
  index.css      — Importa TailwindCSS
  assets/        — Assets estáticos
public/          — Archivos públicos
```

## Comandos

```bash
pnpm dev        # Servidor de desarrollo con HMR
pnpm build      # Build de producción (tsc + vite build)
pnpm preview    # Preview del build de producción
pnpm lint       # Linting con ESLint
```

## Directrices para Agentes de IA

### Arquitectura

- La app es un **SPA client-side** sin backend. Todo el estado de progreso se persiste en `localStorage`.
- El componente `App.tsx` contiene tanto los datos (`roadmapData`, `rolesData`) como la UI. Si el archivo crece, los datos deberían extraerse a `src/data/roadmap.ts`.
- No hay routing — es una single-page con acordeones interactivos.

### Datos

- Los skills están organizados en **11 niveles**, cada uno con categorías y skills individuales.
- Cada skill tiene un `id` único (ej: `"1.1"`, `"2.15"`, `"11.3"`).
- El progreso se almacena como un `Set<string>` de IDs de skills completados, serializado en `localStorage` bajo la key `roadmapProgress`.

### Convenciones de Código

- **TypeScript estricto** — usar tipos explícitos en funciones y estado.
- **TailwindCSS 4** — no usar archivos CSS custom; usar clases de utilidad de Tailwind.
- **Componentes funcionales** — usar hooks (`useState`, `useEffect`, `useMemo`).
- **Sin dependencias externas de state management** — el estado es local con React hooks.
- Los imports de iconos se hacen desde `lucide-react`.

### Al Hacer Cambios

1. No romper la persistencia en `localStorage` — el formato de serialización es `JSON.stringify(Array.from(set))`.
2. Mantener la estructura de `roadmapData` consistente (id numérico de nivel, categorías con name y skills).
3. Los IDs de skills deben seguir el patrón `"nivel.número"` (ej: `"3.5"`).
4. Al agregar nuevos niveles o skills, verificar que los cálculos de progreso en `progressData` sigan funcionando correctamente.
5. Ejecutar `pnpm build` para verificar que no hay errores de TypeScript antes de hacer commit.

### Testing

- No hay tests configurados actualmente. Si se agregan, usar **Vitest** como test runner.
- Para validar cambios: `pnpm build` (compila TypeScript) y `pnpm lint` (ESLint).

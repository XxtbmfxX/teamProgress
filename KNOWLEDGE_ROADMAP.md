# Roadmap de Conocimientos del Equipo

> Roadmap de conocimientos necesarios para que el equipo pueda desarrollar y mantener software profesional con el stack tecnológico utilizado. Organizado del nivel más básico al más avanzado.

---

## NIVEL 1 — Fundamentos (Obligatorio para todos)

### Programación General
1. Control de versiones con **Git** (branches, merge, rebase, pull requests, conflictos)
2. Línea de comandos (Bash/PowerShell) — navegación, scripts básicos
3. Variables de entorno y archivos `.env` — configuración segura
4. **JSON**, **YAML**, **Markdown** — formatos de datos y documentación
5. HTTP — métodos (GET/POST/PUT/DELETE), status codes, headers, cookies
6. APIs REST — diseño, consumo, autenticación (Bearer tokens, API keys)
7. Bases de datos relacionales — SQL básico (SELECT, JOIN, WHERE, INSERT, UPDATE)
8. **PostgreSQL** — motor de base de datos principal

### Desarrollo Web Básico
9. HTML5 y CSS3 — estructura y estilos
10. JavaScript moderno (ES6+) — arrow functions, destructuring, async/await, modules
11. TypeScript — tipos, interfaces, generics
12. NPM/Yarn/pnpm/Bun — gestores de paquetes, `package.json`, lockfiles

---

## NIVEL 2 — Frameworks & Lenguajes del Stack

### PHP / Laravel
13. PHP 8.4 — sintaxis moderna, typed properties, enums, match expressions
14. **Laravel 12** — routing, controllers, middleware, requests, responses
15. **Eloquent ORM** — modelos, relaciones, scopes, accessors/mutators
16. **Migraciones y Seeders** — esquema de BD versionado
17. **Artisan CLI** — comandos built-in y custom commands
18. **Laravel Queues** — jobs, workers, Redis como driver
19. Blade templates vs API-only — cuándo usar cada uno
20. **Laravel Sail** — entorno Docker para desarrollo
21. **Filament 4** — panel de administración, Resources, Forms, Tables

### Ruby / Rails
22. Ruby 3.4 — sintaxis, bloques, módulos, gems
23. **Ruby on Rails 7.1** — MVC, Active Record, Action Controller
24. **Active Record** — migraciones, asociaciones, validaciones, callbacks
25. **Sidekiq** — background jobs, crons, Redis queues
26. **Devise** — autenticación, estrategias, 2FA
27. **Pundit** — autorización por políticas
28. **ActionCable** — WebSockets en Rails
29. **ActionMailbox** — procesamiento de emails entrantes
30. **Wisper** — patrón pub/sub para desacoplar servicios

### JavaScript / Node.js
31. **Node.js** — event loop, streams, módulos (CommonJS vs ESM)
32. **Express.js** — middleware, routing, error handling
33. **Prisma ORM** — schema, migraciones, queries, relaciones

### React
34. **React 18** — componentes, hooks (useState, useEffect, useContext, useRef)
35. **React Router 6** — rutas, layouts, loaders
36. **React Query (TanStack)** — data fetching, caching, mutations, invalidation
37. **React Hook Form + Zod** — formularios con validación de schema

### Vue.js
38. **Vue 3** — Composition API, `<script setup>`, reactivity
39. **Pinia** — state management (reemplazo de Vuex)
40. **Vue Router 4** — navegación, guards, lazy loading

---

## NIVEL 3 — Herramientas de UI y Styling

41. **TailwindCSS** (3.x y 4.x) — utilities, responsive, dark mode, custom config
42. **Radix UI + shadcn/ui** — sistema de componentes accesibles
43. **Recharts / Chart.js** — visualización de datos y gráficos
44. **i18next / vue-i18n** — internacionalización (soporte multi-idioma)
45. **Lucide Icons / Iconify** — sistemas de iconos
46. **Vite** — bundler moderno, HMR, plugins, configuración de build
47. PostCSS + Autoprefixer — procesamiento avanzado de CSS

---

## NIVEL 4 — Bases de Datos & Almacenamiento

48. **PostgreSQL avanzado** — índices, JSONB, CTEs, funciones, partitioning
49. **pgvector** — embeddings vectoriales, búsqueda por similitud
50. **Redis** — caching, pub/sub, queues (BullMQ/Sidekiq), data structures
51. **SQLite** — bases embebidas para desarrollo y scripts
52. **Prisma** — esquema declarativo, migraciones, introspección
53. **Elasticsearch / OpenSearch** — full-text search (Searchkick)
54. **Supabase** — Auth, Realtime, Storage, Row Level Security
55. **AWS S3 / Cloudflare R2** — almacenamiento de objetos, presigned URLs, buckets

---

## NIVEL 5 — Autenticación & Seguridad

56. **JWT (JSON Web Tokens)** — generación, validación, refresh tokens
57. **OAuth 2.0** — flujos de autorización (Google, Microsoft)
58. **SAML** — SSO empresarial
59. **2FA (Two-Factor Authentication)** — TOTP, implementación con Devise
60. OWASP Top 10 — XSS, CSRF, SQL Injection, broken access control
61. **CORS** — configuración cross-origin para APIs
62. **Rate limiting** — protección contra abuso
63. Sanitización de inputs — **DOMPurify** (frontend), validaciones (backend)
64. HTTPS/TLS/SSL — certificados, conexiones seguras a PostgreSQL

---

## NIVEL 6 — DevOps & Infraestructura

65. **Docker** — Dockerfile, imágenes, capas, multi-stage builds
66. **Docker Compose** — orquestación multi-servicio, networks, volumes
67. **Nginx** — reverse proxy, configuración de server blocks, static files
68. **Supervisor** — gestión de procesos (queue workers, log streaming)
69. **CI/CD** — GitHub Actions, workflows de deploy automatizado
70. **Railway** — despliegue serverless, variables de entorno, toml configs
71. **Vercel** — despliegue de frontends, routing, edge functions
72. **Procfile / Foreman / Overmind** — gestión de procesos en desarrollo
73. Logs y monitoreo — **Winston**, **Laravel Pail**, **Sentry**, **Datadog**
74. Healthchecks — docker-healthcheck, endpoints de estado

---

## NIVEL 7 — IA & LLMs

75. Conceptos de LLM — tokens, prompts, temperature, context window, streaming
76. **Prompt Engineering** — system prompts, few-shot, chain-of-thought
77. **APIs de LLM** — OpenAI, Anthropic Claude, Google Gemini, DeepSeek, Cohere
78. **LangChain** — chains, agents, tools, memory
79. **MCP (Model Context Protocol)** — SDK, herramientas externas para LLMs
80. **Document Processing Pipeline** — LlamaParse (OCR/tablas), pdf-parse, Tesseract.js
81. **Agentic AI** — agentes autónomos, tool calling, multi-step reasoning

---

## NIVEL 8 — Web Scraping & Datos

83. **Puppeteer** — automatización de navegador, navegación, selectors, esperas
84. **Stealth plugins** — evasión de detección anti-bot
85. **Proxy rotation** — proxy-chain, Bright Data residential proxies
86. **Rate limiting & retry** — p-queue, p-retry, delays entre requests
87. **Data extraction** — parsing HTML, manejo de paginación, errores de red
88. **Data pipeline** — extracción → transformación → carga en SQLite/R2

---

## NIVEL 9 — Comunicación & Integraciones

89. **WebSockets** — ActionCable (Rails), Express WS (Node), real-time bidireccional
90. **Email** — Resend API, SMTP, ActionMailbox, templates
91. **Push Notifications** — Firebase Cloud Messaging, Web Push
92. **Chat channels** — integración con Facebook Messenger, Telegram, WhatsApp, Slack, Line
93. **Payment processing** — MercadoPago, Stripe
94. **Google Cloud APIs** — Translate, Dialogflow (NLU)
95. Webhooks — envío y recepción de eventos entre servicios

---

## NIVEL 10 — Testing & Calidad

96. **PHPUnit** — unit tests, feature tests, assertions, mocking
97. **Jest** — tests JavaScript, mocks, snapshots
98. **Vitest** — tests modernos Vue/React, migración desde Jest
99. **Vue Test Utils** — testing de componentes Vue
100. **RSpec** — tests Ruby, factories, request specs
101. Testing de APIs — assertions HTTP, testing de middlewares y autenticación
102. **Linting** — ESLint, Laravel Pint, RuboCop — consistencia de código
103. **Code coverage** — métricas de cobertura, v8 integration

---

## NIVEL 11 — Arquitectura & Patrones Avanzados

104. **Microservicios** — comunicación entre servicios del stack
105. **Queue-based architecture** — BullMQ (Node), Sidekiq (Ruby), Laravel Queues (PHP)
106. **Event-driven design** — pub/sub, listeners, observers
107. **Service layer pattern** — Services/ en Laravel, services/ en Rails
108. **Repository pattern** — abstracción de acceso a datos
109. **API versioning** — diseño de APIs estables y evolutivas
110. **Monorepo management** — pnpm workspaces, configuración compartida
111. **Database optimization** — query optimization, N+1 prevention, indexing strategies
112. **Caching strategies** — Redis caching, HTTP caching, query caching
113. **Multi-tenancy** — aislamiento de datos por cuenta
114. **Background job patterns** — retry strategies, dead letter queues, job chaining

---

## Mapa por Área de Desarrollo → Skills Prioritarios

| Área de Desarrollo | Skills críticos |
|---|---|
| **Backend PHP** | PHP, Laravel, Eloquent, JWT, Filament, PostgreSQL, Redis, Docker, LLM APIs |
| **Servicios de IA** | Node.js, Express, React, Prisma, LangChain, pgvector, BullMQ, Docker |
| **Plataforma de soporte** | Ruby, Rails, Vue 3, Pinia, Sidekiq, ActionCable, Devise, PostgreSQL, Redis |
| **Frontend** | React, TypeScript, Radix UI, TanStack Query, Supabase, Vite, Zod |
| **Scraping de datos** | TypeScript, Puppeteer, Stealth, Proxies, SQLite, Cloudflare R2 |
| **Integraciones** | Node.js/TypeScript, APIs de chat, webhook integration |

---

## Recomendación de Aprendizaje

- **Todos** deben dominar los **niveles 1-6** como base sólida antes de avanzar.
- **Niveles 7 (IA/LLMs)** y **9 (integraciones)** son transversales y aplican a múltiples áreas.
- Cada desarrollador debe especializarse en los niveles superiores según el área que le corresponda.
- El **nivel 11** es para leads técnicos y arquitectos que toman decisiones de diseño del sistema.

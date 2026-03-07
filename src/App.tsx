import { useState, useEffect, useMemo } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Target, BookOpen, Layers } from 'lucide-react';

// --- DATA STRUCTURE ---
// Estructura de datos extraída del roadmap proporcionado.
const roadmapData = [
  {
    id: 1,
    title: "NIVEL 1 — Fundamentos",
    mandatory: true,
    categories: [
      {
        name: "Programación General",
        skills: [
          { id: "1.1", text: "Control de versiones con Git (branches, merge, rebase, pull requests, conflictos)" },
          { id: "1.2", text: "Línea de comandos (Bash/PowerShell) — navegación, scripts básicos" },
          { id: "1.3", text: "Variables de entorno y archivos .env — configuración segura" },
          { id: "1.4", text: "JSON, YAML, Markdown — formatos de datos y documentación" },
          { id: "1.5", text: "HTTP — métodos (GET/POST/PUT/DELETE), status codes, headers, cookies" },
          { id: "1.6", text: "APIs REST — diseño, consumo, autenticación (Bearer tokens, API keys)" },
          { id: "1.7", text: "Bases de datos relacionales — SQL básico (SELECT, JOIN, WHERE, INSERT, UPDATE)" },
          { id: "1.8", text: "PostgreSQL — motor de base de datos principal" }
        ]
      },
      {
        name: "Desarrollo Web Básico",
        skills: [
          { id: "1.9", text: "HTML5 y CSS3 — estructura y estilos" },
          { id: "1.10", text: "JavaScript moderno (ES6+) — arrow functions, destructuring, async/await, modules" },
          { id: "1.11", text: "TypeScript — tipos, interfaces, generics" },
          { id: "1.12", text: "NPM/Yarn/pnpm/Bun — gestores de paquetes" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "NIVEL 2 — Frameworks & Lenguajes del Stack",
    categories: [
      {
        name: "PHP / Laravel",
        skills: [
          { id: "2.1", text: "PHP 8.4 — sintaxis moderna, typed properties, enums, match expressions" },
          { id: "2.2", text: "Laravel 12 — routing, controllers, middleware, requests, responses" },
          { id: "2.3", text: "Eloquent ORM — modelos, relaciones, scopes, accessors/mutators" },
          { id: "2.4", text: "Migraciones y Seeders — esquema de BD versionado" },
          { id: "2.5", text: "Artisan CLI — comandos built-in y custom commands" },
          { id: "2.6", text: "Laravel Queues — jobs, workers, Redis como driver" },
          { id: "2.7", text: "Blade templates vs API-only — cuándo usar cada uno" },
          { id: "2.8", text: "Laravel Sail — entorno Docker para desarrollo" },
          { id: "2.9", text: "Filament 4 — panel de administración, Resources, Forms, Tables" }
        ]
      },
      {
        name: "Ruby / Rails",
        skills: [
          { id: "2.10", text: "Ruby 3.4 — sintaxis, bloques, módulos, gems" },
          { id: "2.11", text: "Ruby on Rails 7.1 — MVC, Active Record, Action Controller" },
          { id: "2.12", text: "Active Record — migraciones, asociaciones, validaciones, callbacks" },
          { id: "2.13", text: "Sidekiq — background jobs, crons, Redis queues" },
          { id: "2.14", text: "Devise — autenticación, estrategias, 2FA" },
          { id: "2.15", text: "Pundit — autorización por políticas" },
          { id: "2.16", text: "ActionCable — WebSockets en Rails" },
          { id: "2.17", text: "ActionMailbox — procesamiento de emails entrantes" },
          { id: "2.18", text: "Wisper — patrón pub/sub para desacoplar servicios" }
        ]
      },
      {
        name: "JavaScript / Node.js",
        skills: [
          { id: "2.19", text: "Node.js — event loop, streams, módulos (CommonJS vs ESM)" },
          { id: "2.20", text: "Express.js — middleware, routing, error handling" },
          { id: "2.21", text: "Prisma ORM — schema, migraciones, queries, relaciones" }
        ]
      },
      {
        name: "React",
        skills: [
          { id: "2.22", text: "React 18 — componentes, hooks (useState, useEffect, useContext, useRef)" },
          { id: "2.23", text: "React Router 6 — rutas, layouts, loaders" },
          { id: "2.24", text: "React Query (TanStack) — data fetching, caching, mutations, invalidation" },
          { id: "2.25", text: "React Hook Form + Zod — formularios con validación de schema" }
        ]
      },
      {
        name: "Vue.js",
        skills: [
          { id: "2.26", text: "Vue 3 — Composition API, <script setup>, reactivity" },
          { id: "2.27", text: "Pinia — state management (reemplazo de Vuex)" },
          { id: "2.28", text: "Vue Router 4 — navegación, guards, lazy loading" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "NIVEL 3 — Herramientas de UI y Styling",
    categories: [
      {
        name: "Frontend Tooling",
        skills: [
          { id: "3.1", text: "TailwindCSS (3.x y 4.x) — utilities, responsive, dark mode, custom config" },
          { id: "3.2", text: "Radix UI + shadcn/ui — sistema de componentes accesibles" },
          { id: "3.3", text: "Recharts / Chart.js — visualización de datos y gráficos" },
          { id: "3.4", text: "i18next / vue-i18n — internacionalización (soporte multi-idioma)" },
          { id: "3.5", text: "Lucide Icons / Iconify — sistemas de iconos" },
          { id: "3.6", text: "Vite — bundler moderno, HMR, plugins, configuración de build" },
          { id: "3.7", text: "PostCSS + Autoprefixer — procesamiento avanzado de CSS" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "NIVEL 4 — Bases de Datos & Almacenamiento",
    categories: [
      {
        name: "Data & Storage",
        skills: [
          { id: "4.1", text: "PostgreSQL avanzado — índices, JSONB, CTEs, funciones, partitioning" },
          { id: "4.2", text: "pgvector — embeddings vectoriales, búsqueda por similitud" },
          { id: "4.3", text: "Redis — caching, pub/sub, queues (BullMQ/Sidekiq), data structures" },
          { id: "4.4", text: "SQLite — bases embebidas para desarrollo y scripts" },
          { id: "4.5", text: "Prisma — esquema declarativo, migraciones, introspección" },
          { id: "4.6", text: "Elasticsearch / OpenSearch — full-text search (Searchkick)" },
          { id: "4.7", text: "Supabase — Auth, Realtime, Storage, Row Level Security" },
          { id: "4.8", text: "AWS S3 / Cloudflare R2 — almacenamiento de objetos, presigned URLs, buckets" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "NIVEL 5 — Autenticación & Seguridad",
    categories: [
      {
        name: "Security",
        skills: [
          { id: "5.1", text: "JWT (JSON Web Tokens) — generación, validación, refresh tokens" },
          { id: "5.2", text: "OAuth 2.0 — flujos de autorización (Google, Microsoft)" },
          { id: "5.3", text: "SAML — SSO empresarial" },
          { id: "5.4", text: "2FA (Two-Factor Authentication) — TOTP, implementación con Devise" },
          { id: "5.5", text: "OWASP Top 10 — XSS, CSRF, SQL Injection, broken access control" },
          { id: "5.6", text: "CORS — configuración cross-origin para APIs" },
          { id: "5.7", text: "Rate limiting — protección contra abuso" },
          { id: "5.8", text: "Sanitización de inputs — DOMPurify (frontend), validaciones (backend)" },
          { id: "5.9", text: "HTTPS/TLS/SSL — certificados, conexiones seguras a PostgreSQL" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "NIVEL 6 — DevOps & Infraestructura",
    categories: [
      {
        name: "Infraestructura",
        skills: [
          { id: "6.1", text: "Docker — Dockerfile, imágenes, capas, multi-stage builds" },
          { id: "6.2", text: "Docker Compose — orquestación multi-servicio, networks, volumes" },
          { id: "6.3", text: "Nginx — reverse proxy, configuración de server blocks, static files" },
          { id: "6.4", text: "Supervisor — gestión de procesos (queue workers, log streaming)" },
          { id: "6.5", text: "CI/CD — GitHub Actions, workflows de deploy automatizado" },
          { id: "6.6", text: "Railway — despliegue serverless, variables de entorno, toml configs" },
          { id: "6.7", text: "Vercel — despliegue de frontends, routing, edge functions" },
          { id: "6.8", text: "Procfile / Foreman / Overmind — gestión de procesos en desarrollo" },
          { id: "6.9", text: "Logs y monitoreo — Winston, Laravel Pail, Sentry, Datadog" },
          { id: "6.10", text: "Healthchecks — docker-healthcheck, endpoints de estado" }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "NIVEL 7 — IA & LLMs",
    categories: [
      {
        name: "Inteligencia Artificial",
        skills: [
          { id: "7.1", text: "Conceptos de LLM — tokens, prompts, temperature, context window, streaming" },
          { id: "7.2", text: "Prompt Engineering — system prompts, few-shot, chain-of-thought" },
          { id: "7.3", text: "APIs de LLM — OpenAI, Anthropic Claude, Google Gemini, DeepSeek, Cohere" },
          { id: "7.4", text: "LangChain — chains, agents, tools, memory" },
          { id: "7.5", text: "MCP (Model Context Protocol) — SDK, herramientas externas para LLMs" },
          { id: "7.6", text: "Document Processing Pipeline — LlamaParse (OCR/tablas), pdf-parse, Tesseract.js" },
          { id: "7.7", text: "Agentic AI — agentes autónomos, tool calling, multi-step reasoning" }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "NIVEL 8 — Web Scraping & Datos",
    categories: [
      {
        name: "Extracción de Datos",
        skills: [
          { id: "8.1", text: "Puppeteer — automatización de navegador, navegación, selectors, esperas" },
          { id: "8.2", text: "Stealth plugins — evasión de detección anti-bot" },
          { id: "8.3", text: "Proxy rotation — proxy-chain, Bright Data residential proxies" },
          { id: "8.4", text: "Rate limiting & retry — p-queue, p-retry, delays entre requests" },
          { id: "8.5", text: "Data extraction — parsing HTML, manejo de paginación, errores de red" },
          { id: "8.6", text: "Data pipeline — extracción → transformación → carga en SQLite/R2" }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "NIVEL 9 — Comunicación & Integraciones",
    categories: [
      {
        name: "Integraciones",
        skills: [
          { id: "9.1", text: "WebSockets — ActionCable (Rails), Express WS (Node), real-time bidireccional" },
          { id: "9.2", text: "Email — Resend API, SMTP, ActionMailbox, templates" },
          { id: "9.3", text: "Push Notifications — Firebase Cloud Messaging, Web Push" },
          { id: "9.4", text: "Chat channels — integración con Facebook Messenger, Telegram, WhatsApp, Slack, Line" },
          { id: "9.5", text: "Payment processing — MercadoPago, Stripe" },
          { id: "9.6", text: "Google Cloud APIs — Translate, Dialogflow (NLU)" },
          { id: "9.7", text: "Webhooks — envío y recepción de eventos entre servicios" }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "NIVEL 10 — Testing & Calidad",
    categories: [
      {
        name: "Quality Assurance",
        skills: [
          { id: "10.1", text: "PHPUnit — unit tests, feature tests, assertions, mocking" },
          { id: "10.2", text: "Jest — tests JavaScript, mocks, snapshots" },
          { id: "10.3", text: "Vitest — tests modernos Vue/React, migración desde Jest" },
          { id: "10.4", text: "Vue Test Utils — testing de componentes Vue" },
          { id: "10.5", text: "RSpec — tests Ruby, factories, request specs" },
          { id: "10.6", text: "Testing de APIs — assertions HTTP, testing de middlewares y autenticación" },
          { id: "10.7", text: "Linting — ESLint, Laravel Pint, RuboCop — consistencia de código" },
          { id: "10.8", text: "Code coverage — métricas de cobertura, v8 integration" }
        ]
      }
    ]
  },
  {
    id: 11,
    title: "NIVEL 11 — Arquitectura & Patrones Avanzados",
    categories: [
      {
        name: "Arquitectura",
        skills: [
          { id: "11.1", text: "Microservicios — comunicación entre servicios del stack" },
          { id: "11.2", text: "Queue-based architecture — BullMQ (Node), Sidekiq (Ruby), Laravel Queues" },
          { id: "11.3", text: "Event-driven design — pub/sub, listeners, observers" },
          { id: "11.4", text: "Service layer pattern — Services/ en Laravel, services/ en Rails" },
          { id: "11.5", text: "Repository pattern — abstracción de acceso a datos" },
          { id: "11.6", text: "API versioning — diseño de APIs estables y evolutivas" },
          { id: "11.7", text: "Monorepo management — pnpm workspaces, configuración compartida" },
          { id: "11.8", text: "Database optimization — query optimization, N+1 prevention, indexing" },
          { id: "11.9", text: "Caching strategies — Redis caching, HTTP caching, query caching" },
          { id: "11.10", text: "Multi-tenancy — aislamiento de datos por cuenta" },
          { id: "11.11", text: "Background job patterns — retry strategies, dead letter queues, job chaining" }
        ]
      }
    ]
  }
];

const rolesData = [
  { area: "Backend PHP", skills: "PHP, Laravel, Eloquent, JWT, Filament, PostgreSQL, Redis, Docker, LLM APIs" },
  { area: "Servicios de IA", skills: "Node.js, Express, React, Prisma, LangChain, pgvector, BullMQ, Docker" },
  { area: "Plataforma de soporte", skills: "Ruby, Rails, Vue 3, Pinia, Sidekiq, ActionCable, Devise, PostgreSQL, Redis" },
  { area: "Frontend", skills: "React, TypeScript, Radix UI, TanStack Query, Supabase, Vite, Zod" },
  { area: "Scraping de datos", skills: "TypeScript, Puppeteer, Stealth, Proxies, SQLite, Cloudflare R2" },
  { area: "Integraciones", skills: "Node.js/TypeScript, APIs de chat, webhook integration" }
];

export default function App() {
  const [completedSkills, setCompletedSkills] = useState<Set<string>>(new Set());
  const [expandedLevels, setExpandedLevels] = useState<Set<number>>(new Set([1]));

  useEffect(() => {
    const saved = localStorage.getItem('roadmapProgress');
    if (saved) {
      try {
        setCompletedSkills(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error("Error parsing progress", e);
      }
    }
  }, []);

  const toggleSkill = (skillId: string) => {
    const newSet = new Set(completedSkills);
    if (newSet.has(skillId)) {
      newSet.delete(skillId);
    } else {
      newSet.add(skillId);
    }
    setCompletedSkills(newSet);
    localStorage.setItem('roadmapProgress', JSON.stringify(Array.from(newSet)));
  };

  const toggleLevel = (levelId: number) => {
    const newSet = new Set(expandedLevels);
    if (newSet.has(levelId)) {
      newSet.delete(levelId);
    } else {
      newSet.add(levelId);
    }
    setExpandedLevels(newSet);
  };

  const progressData = useMemo(() => {
    const data: Record<number, { total: number; completed: number; percentage: number }> = {};
    let firstIncompleteLevel: number | null = null;
    let totalSkillsOverall = 0;
    let totalCompletedOverall = 0;

    roadmapData.forEach(level => {
      let totalSkills = 0;
      let completedInLevel = 0;

      level.categories.forEach(cat => {
        cat.skills.forEach(skill => {
          totalSkills++;
          totalSkillsOverall++;
          if (completedSkills.has(skill.id)) {
            completedInLevel++;
            totalCompletedOverall++;
          }
        });
      });

      const percentage = totalSkills === 0 ? 0 : Math.round((completedInLevel / totalSkills) * 100);
      data[level.id] = { total: totalSkills, completed: completedInLevel, percentage };

      if (percentage < 100 && firstIncompleteLevel === null) {
        firstIncompleteLevel = level.id;
      }
    });

    return {
      levels: data,
      currentStage: firstIncompleteLevel || roadmapData[roadmapData.length - 1].id,
      overallProgress: totalSkillsOverall === 0 ? 0 : Math.round((totalCompletedOverall / totalSkillsOverall) * 100)
    };
  }, [completedSkills]);

  useEffect(() => {
    if (!expandedLevels.has(progressData.currentStage)) {
      setExpandedLevels(prev => new Set([...prev, progressData.currentStage]));
    }
  }, [progressData.currentStage]);


  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Minimalista */}
        <header className="mb-12 border-b border-zinc-200 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-900">
            Roadmap de Conocimientos
          </h1>
          <p className="text-zinc-600 mb-6 text-lg leading-relaxed">
            Estructurado del nivel fundamental al arquitectónico. Marca los conocimientos que dominas; el sistema identificará automáticamente tu frontera de aprendizaje actual.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 w-full sm:w-auto flex-1">
              <Target className="text-indigo-600 w-6 h-6" />
              <div>
                <span className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider">Tu Etapa Actual</span>
                <span className="block text-lg font-bold text-indigo-700">
                  Nivel {progressData.currentStage}
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col gap-2">
              <div className="flex justify-between text-sm text-zinc-600">
                <span>Progreso Global</span>
                <span className="font-mono">{progressData.overallProgress}%</span>
              </div>
              <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                  style={{ width: `${progressData.overallProgress}%` }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Recomendaciones */}
        <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-6 mb-10">
          <h3 className="flex items-center gap-2 font-bold text-indigo-900 mb-3">
            <BookOpen className="w-5 h-5" /> Principios de Navegación
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-indigo-800/80 text-sm md:text-base">
            <li>Dominar los <strong>Niveles 1-6</strong> es el requisito base antes de la especialización.</li>
            <li>Los niveles de <strong>IA (7)</strong> e <strong>Integraciones (9)</strong> son transversales.</li>
            <li>El <strong>Nivel 11</strong> está diseñado para roles con responsabilidad arquitectónica (Tech Leads).</li>
          </ul>
        </div>

        {/* Roadmap interactivo */}
        <div className="space-y-4">
          {roadmapData.map((level) => {
            const isCurrent = progressData.currentStage === level.id;
            const isExpanded = expandedLevels.has(level.id);
            const isComplete = progressData.levels[level.id].percentage === 100;
            
            return (
              <div 
                key={level.id} 
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                  isCurrent ? 'border-indigo-400 shadow-md ring-1 ring-indigo-400/20' : 
                  isComplete ? 'border-zinc-200 bg-zinc-50/50' : 'border-zinc-200 shadow-sm'
                }`}
              >
                {/* Cabecera del Nivel (Clickable) */}
                <button 
                  onClick={() => toggleLevel(level.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                      isComplete ? 'bg-emerald-100 text-emerald-700' :
                      isCurrent ? 'bg-indigo-600 text-white' : 'bg-zinc-100 text-zinc-500'
                    }`}>
                      {isComplete ? <CheckCircle2 className="w-5 h-5" /> : level.id}
                    </div>
                    <div>
                      <h2 className={`font-bold text-lg md:text-xl ${isComplete ? 'text-zinc-500' : 'text-zinc-900'}`}>
                        {level.title}
                        {('mandatory' in level && level.mandatory) && <span className="ml-2 text-xs font-semibold bg-red-100 text-red-700 px-2 py-0.5 rounded-full align-middle">Base</span>}
                      </h2>
                      <div className="text-sm text-zinc-500 mt-1 font-mono">
                        {progressData.levels[level.id].completed} / {progressData.levels[level.id].total} completados
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:block w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${isComplete ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                        style={{ width: `${progressData.levels[level.id].percentage}%` }}
                      />
                    </div>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-zinc-400" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
                  </div>
                </button>

                {/* Contenido del Nivel (Acordeón) */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 mt-4">
                      {level.categories.map((category, catIdx) => (
                        <div key={catIdx}>
                          <h4 className="font-semibold text-zinc-800 border-b border-zinc-200 pb-2 mb-3 text-sm uppercase tracking-wider">
                            {category.name}
                          </h4>
                          <ul className="space-y-2.5">
                            {category.skills.map((skill) => {
                              const checked = completedSkills.has(skill.id);
                              return (
                                <li key={skill.id}>
                                  <label className="flex items-start gap-3 group cursor-pointer">
                                    <button
                                      type="button"
                                      className="mt-0.5 focus:outline-none"
                                      onClick={() => toggleSkill(skill.id)}
                                    >
                                      {checked ? (
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 transition-colors" />
                                      ) : (
                                        <Circle className="w-5 h-5 text-zinc-300 group-hover:text-indigo-400 transition-colors" />
                                      )}
                                    </button>
                                    <span className={`text-sm md:text-base leading-snug transition-colors ${
                                      checked ? 'text-zinc-400 line-through' : 'text-zinc-700'
                                    }`}>
                                      {skill.text}
                                    </span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Roles Mapping Table */}
        <div className="mt-16 bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-zinc-50 px-6 py-4 border-b border-zinc-200 flex items-center gap-2">
            <Layers className="w-5 h-5 text-zinc-600" />
            <h3 className="font-bold text-zinc-800">Mapa por Área de Desarrollo</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  <th className="px-6 py-3 text-sm font-semibold text-zinc-600 uppercase tracking-wider w-1/3">Área</th>
                  <th className="px-6 py-3 text-sm font-semibold text-zinc-600 uppercase tracking-wider">Skills Críticos a Priorizar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {rolesData.map((role, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-zinc-900">{role.area}</td>
                    <td className="px-6 py-4 text-sm text-zinc-600 leading-relaxed">{role.skills}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <footer className="mt-12 text-center text-zinc-400 text-sm pb-8">
          Diseñado bajo principios de enfoque y claridad. Las métricas de progreso son locales.
        </footer>
      </div>
    </div>
  );
}

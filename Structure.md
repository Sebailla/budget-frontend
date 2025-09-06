# Propuesta de Reestructuración de Directorios – Proyecto `budget-frontend`

Este informe propone una reorganización de la estructura de directorios del proyecto con el objetivo de **reducir redundancias**, **mejorar la claridad**, y **alinear la arquitectura** con las prácticas modernas de **Next.js (App Router)**.

---

## Diagnóstico Actual

La estructura actual combina dos enfoques:

- **App Router moderno (`app/`, `components/`, `actions/`)**  
- **Estructura tradicional o heredada (`src/` con `api/`, `auth/`, `schemas/`, `utils/`)**

Este doble sistema introduce confusión, ya que existe lógica repetida o dispersa entre `src/` y las carpetas raíz.  
Ejemplo: `lib/utils.ts` vs `src/utils/`.

---

## Objetivos de la Reestructuración

1. **Consolidar todo el código de negocio en una única convención** (`app/` + `lib/` + `components/`).
2. **Separar por capas lógicas**:  
   - UI (componentes)  
   - Lógica de negocio (server actions, validaciones)  
   - Infraestructura (utils, librerías comunes)  
3. **Documentación integrada**: mantener `docs/` pero ligarlo a Typedoc.  
4. **Claridad de imports**: evitar imports confusos con rutas largas (`../../src/utils`).

---

## Nueva Estructura Propuesta

```bash
.
├── app/                      # Rutas y vistas (Next.js App Router)
│   ├── (public)              # Agrupar páginas públicas
│   │   ├── auth/             # Login, register
│   │   └── page.tsx
│   ├── (admin)               # Agrupar páginas de administración
│   │   ├── budgets/          # CRUD de presupuestos
│   │   └── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/               # UI y vistas compartidas
│   ├── ui/                   # Botones, inputs, modales (reutilizables)
│   ├── layout/               # Navbar, footer, wrappers
│   ├── auth/                 # Formularios de login/register
│   └── budgets/              # Tarjetas, tablas, etc.
│
├── actions/                  # Server Actions (Next.js)
│   ├── auth/                 # login, logout, register
│   ├── budget/               # createBudget, deleteBudget, etc.
│   └── index.ts
│
├── domain/                   # Lógica de dominio (reemplazo de src/)
│   ├── api/                  # Llamadas HTTP a backend
│   ├── schemas/              # Validaciones (Zod)
│   ├── auth/                 # Hooks y helpers de autenticación
│   └── utils/                # Helpers genéricos
│
├── lib/                      # Utilidades globales
│   └── utils.ts
│
├── public/                   # Logos e imágenes estáticas
│
├── docs/                     # Documentación autogenerada (Typedoc)
│
├── config/                   # Configuración centralizada
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── package.json
└── README.md
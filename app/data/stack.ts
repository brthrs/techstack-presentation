import React from "react";

export type TechTag = "openSource" | "euHosted" | "selfHosted" | "scaleway";

export const tagConfig: Record<TechTag, { label: string; color: string; icon: React.ReactNode }> = {
  openSource: {
    label: "Open Source",
    color: "bg-emerald-500/10 text-emerald-400/70 ring-1 ring-emerald-500/20",
    icon: React.createElement(
      "svg",
      { className: "h-2.5 w-2.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" },
      React.createElement("circle", { cx: "12", cy: "18", r: "3" }),
      React.createElement("circle", { cx: "6", cy: "6", r: "3" }),
      React.createElement("circle", { cx: "18", cy: "6", r: "3" }),
      React.createElement("path", { d: "M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" }),
      React.createElement("path", { d: "M12 12v3" }),
    ),
  },
  euHosted: {
    label: "EU Hosted",
    color: "bg-blue-500/10 text-blue-400/70 ring-1 ring-blue-500/20",
    icon: React.createElement("span", { className: "text-[9px] leading-none" }, "🇪🇺"),
  },
  selfHosted: {
    label: "Self-hosted",
    color: "bg-violet-500/10 text-violet-400/70 ring-1 ring-violet-500/20",
    icon: React.createElement(
      "svg",
      { className: "h-2.5 w-2.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" },
      React.createElement("rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }),
      React.createElement("rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }),
      React.createElement("line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }),
      React.createElement("line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }),
    ),
  },
  scaleway: {
    label: "Scaleway",
    color: "bg-purple-500/10 text-purple-400/70 ring-1 ring-purple-500/20",
    icon: React.createElement(
      "svg",
      { className: "h-2.5 w-2.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" },
      React.createElement("path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }),
    ),
  },
};

export interface TechItem {
  name: string;
  slug: string;
  description: string;
  whatIsIt: string;
  whyWeChoseIt?: string;
  href?: string;
  docsUrl?: string;
  tags?: TechTag[];
  pending?: boolean;
}

export interface StackCategory {
  title: string;
  icon: string;
  accent: string;
  items: TechItem[];
}

export const stack: StackCategory[] = [
  {
    title: "Core Language & Tooling",
    icon: "⚙️",
    accent: "from-blue-500/20 to-cyan-500/20",
    items: [
      {
        name: "TypeScript",
        slug: "typescript",
        description: "Strict mode enabled",
        whatIsIt: "A strongly typed superset of JavaScript that compiles to plain JS.",
        whyWeChoseIt:
          "Strict mode catches type errors at compile time rather than at runtime, drastically improving reliability and IDE intelligence across the entire codebase. Shared types between frontend and backend eliminate an entire class of integration bugs.",
        href: "https://www.typescriptlang.org",
        docsUrl: "https://www.typescriptlang.org/docs/",
        tags: ["openSource"],
      },
      {
        name: "asdf",
        slug: "asdf",
        description: "Runtime version manager",
        whatIsIt: "A single CLI tool that manages multiple language runtime versions via plugins.",
        whyWeChoseIt:
          "A single `.tool-versions` file in the repo root pins every runtime (Node, Python, etc.) to an exact version, ensuring every developer and CI environment runs identically without manual coordination.",
        href: "https://asdf-vm.com",
        docsUrl: "https://asdf-vm.com/guide/getting-started.html",
        tags: ["openSource"],
      },
      {
        name: "ESLint",
        slug: "eslint",
        description: "Linting",
        whatIsIt: "A pluggable static analysis tool for finding and fixing problems in JavaScript and TypeScript code.",
        whyWeChoseIt:
          "Enforces consistent code style and catches common mistakes — unused variables, unsafe patterns, import order — before they reach code review. The flat config format makes project-wide rules easy to reason about.",
        href: "https://eslint.org",
        docsUrl: "https://eslint.org/docs/latest/",
        tags: ["openSource"],
      },
      {
        name: "Git",
        slug: "git",
        description: "Version control",
        whatIsIt: "The industry-standard distributed version control system.",
        pending: true,
        href: "https://git-scm.com",
        docsUrl: "https://git-scm.com/doc",
      },
    ],
  },
  {
    title: "Backend & Frontend",
    icon: "🧩",
    accent: "from-violet-500/20 to-purple-500/20",
    items: [
      {
        name: "React Router",
        slug: "react-router",
        description: "Routing — frontend & server-side",
        whatIsIt: "A full-stack React framework providing file-based routing, server-side rendering, and data loading in a single library.",
        whyWeChoseIt:
          "v7 collapses the previously separate Remix and React Router projects into one. We get SSR, streaming, and nested routing without choosing between a meta-framework and a client router — one dependency covers both concerns.",
        href: "https://reactrouter.com",
        docsUrl: "https://reactrouter.com/start/framework/installation",
        tags: ["openSource"],
      },
      {
        name: "Vite",
        slug: "vite",
        description: "Build tooling",
        whatIsIt: "A next-generation frontend build tool powered by native ES modules and esbuild during development.",
        whyWeChoseIt:
          "Instant cold starts and sub-millisecond HMR eliminate the feedback-loop drag of Webpack. The production build via Rollup is optimised, and the plugin ecosystem covers everything from SVG imports to SSR.",
        href: "https://vitejs.dev",
        docsUrl: "https://vitejs.dev/guide/",
        tags: ["openSource"],
      },
      {
        name: "shadcn/ui + Radix + Tailwind",
        slug: "shadcn-radix-tailwind",
        description: "Component library & styling",
        whatIsIt: "Accessible, unstyled Radix UI primitives composed via shadcn/ui's copy-paste approach and styled with Tailwind CSS utility classes.",
        whyWeChoseIt:
          "Full ownership over component code (no opaque library to fight), accessible by default via Radix, and Tailwind v4's zero-config CSS approach keeps styles lean and collocated. We avoid the design-system black-box problem.",
        href: "https://ui.shadcn.com",
        docsUrl: "https://ui.shadcn.com/docs",
        tags: ["openSource"],
      },
      {
        name: "Zustand",
        slug: "zustand",
        description: "State management",
        whatIsIt: "A small, fast, and scalable state management library for React with a minimal API.",
        whyWeChoseIt:
          "No boilerplate, no providers, no reducers. A store is just a function. It scales from a single shared flag to complex cross-component state without the ceremony of Redux or the magic of MobX.",
        href: "https://zustand-demo.pmnd.rs",
        docsUrl: "https://zustand.docs.pmnd.rs/getting-started/introduction",
        tags: ["openSource"],
      },
      {
        name: "TanStack Query",
        slug: "tanstack-query",
        description: "Async data fetching & caching",
        whatIsIt: "An async state management library that handles data fetching, caching, synchronisation, and background updates for React.",
        whyWeChoseIt:
          "Eliminates the repetitive fetch-loading-error-cache pattern from every component. Background refetching, stale-while-revalidate, and optimistic updates are built in, so the UI stays fresh without manual orchestration.",
        href: "https://tanstack.com/query",
        docsUrl: "https://tanstack.com/query/latest/docs/framework/react/overview",
        tags: ["openSource"],
      },
      {
        name: "React Hook Form",
        slug: "react-hook-form",
        description: "Form handling",
        whatIsIt: "A performant, flexible form library for React that minimises re-renders through uncontrolled inputs.",
        whyWeChoseIt:
          "Compared to Formik, it causes far fewer re-renders (subscribing only to the fields that change). The native integration with Zod via the resolver API means validation logic is defined once and reused on both client and server.",
        href: "https://react-hook-form.com",
        docsUrl: "https://react-hook-form.com/get-started",
        tags: ["openSource"],
      },
      {
        name: "Zod",
        slug: "zod",
        description: "Schema validation",
        whatIsIt: "A TypeScript-first schema declaration and runtime validation library.",
        whyWeChoseIt:
          "A single Zod schema is the source of truth for data shapes — it generates TypeScript types and validates at runtime. This contract is shared between API boundaries, form validation, and Prisma inputs, eliminating drift between layers.",
        href: "https://zod.dev",
        docsUrl: "https://zod.dev/?id=basic-usage",
        tags: ["openSource"],
      },
      {
        name: "react-i18next",
        slug: "react-i18next",
        description: "Internationalization",
        whatIsIt: "An internationalisation framework for React built on top of i18next.",
        pending: true,
        href: "https://react.i18next.com",
        docsUrl: "https://react.i18next.com/getting-started",
        tags: ["openSource"],
      },
      {
        name: "Prisma",
        slug: "prisma",
        description: "ORM",
        whatIsIt: "A type-safe ORM and query builder for Node.js with an auto-generated client derived from your schema.",
        whyWeChoseIt:
          "The schema file is the single definition of the database structure. The generated client provides fully-typed queries — no raw SQL strings, no mismatched column names at runtime. Migrations are version-controlled and reproducible.",
        href: "https://www.prisma.io",
        docsUrl: "https://www.prisma.io/docs",
        tags: ["openSource"],
      },
      {
        name: "BullMQ",
        slug: "bullmq",
        description: "Queue processing & background jobs",
        whatIsIt: "A Redis-backed job and message queue library for Node.js.",
        whyWeChoseIt:
          "Reliable background processing with retries, rate limiting, priority queues, and scheduled jobs — all backed by the same Redis instance we already run. The TypeScript API is ergonomic and well-maintained.",
        href: "https://bullmq.io",
        docsUrl: "https://docs.bullmq.io",
        tags: ["openSource"],
      },
      {
        name: "LangGraph",
        slug: "langgraph",
        description: "Complex orchestration",
        whatIsIt: "A library for building stateful, multi-step, and multi-agent LLM workflows as directed graphs.",
        pending: true,
        href: "https://langchain-ai.github.io/langgraphjs",
        docsUrl: "https://langchain-ai.github.io/langgraphjs/tutorials/quickstart/",
        tags: ["openSource"],
      },
    ],
  },
  {
    title: "API",
    icon: "🔌",
    accent: "from-amber-500/20 to-orange-500/20",
    items: [
      {
        name: "tRPC",
        slug: "trpc",
        description: "API layer",
        whatIsIt: "End-to-end type-safe API layer that uses TypeScript inference instead of code generation.",
        whyWeChoseIt:
          "Types flow directly from server procedure definitions to the client without a build step or schema file. In a monorepo with a shared TypeScript codebase, this eliminates the entire API contract maintenance burden.",
        href: "https://trpc.io",
        docsUrl: "https://trpc.io/docs",
        tags: ["openSource"],
      },
      {
        name: "RESTful",
        slug: "restful",
        description: "API layer",
        whatIsIt: "An HTTP-based API architectural style using standard verbs and resource-oriented URLs.",
        whyWeChoseIt:
          "Used for public-facing endpoints where external clients — mobile apps, third-party integrations, or webhooks — need a stable, language-agnostic contract that does not depend on our TypeScript toolchain.",
      },
      {
        name: "API Documentation",
        slug: "api-documentation",
        description: "Provider tbd",
        whatIsIt: "Tooling that generates and hosts interactive API reference documentation from code or spec files.",
        pending: true,
      },
    ],
  },
  {
    title: "Data & Storage",
    icon: "🗄️",
    accent: "from-emerald-500/20 to-teal-500/20",
    items: [
      {
        name: "PostgreSQL",
        slug: "postgresql",
        description: "Relational database",
        whatIsIt: "A powerful open-source object-relational database with a strong reputation for reliability and standards compliance.",
        whyWeChoseIt:
          "Battle-tested durability, rich feature set (JSONB, full-text search, window functions), and Scaleway's managed offering removes the operational overhead of running it ourselves while keeping data inside the EU.",
        href: "https://www.scaleway.com/en/managed-postgresql-mysql/",
        docsUrl: "https://www.postgresql.org/docs/",
        tags: ["scaleway", "selfHosted", "euHosted"],
      },
      {
        name: "pgvector",
        slug: "pgvector",
        description: "Vector search extension",
        whatIsIt: "A PostgreSQL extension that adds vector data types and approximate nearest-neighbour search.",
        whyWeChoseIt:
          "Embedding storage and similarity search live directly inside our existing Postgres instance, avoiding a separate vector database service. This simplifies the architecture and keeps AI-related data collocated with structured data.",
        href: "https://github.com/pgvector/pgvector",
        docsUrl: "https://github.com/pgvector/pgvector#getting-started",
        tags: ["openSource", "selfHosted", "euHosted", "scaleway"],
      },
      {
        name: "Redis",
        slug: "redis",
        description: "Caching, jobs & queues",
        whatIsIt: "An in-memory data structure store used as a cache, message broker, and database.",
        whyWeChoseIt:
          "A single managed Redis instance serves three purposes: BullMQ job queues, session and API response caching, and rate-limiting counters. Scaleway's managed offering handles backups and failover.",
        href: "https://www.scaleway.com/en/managed-database-for-redistm/",
        docsUrl: "https://redis.io/docs/",
        tags: ["openSource", "selfHosted", "euHosted", "scaleway"],
      },
      {
        name: "S3-compatible Storage",
        slug: "s3-storage",
        description: "Object storage",
        whatIsIt: "Object storage for files, assets, and backups accessed via the S3 API.",
        whyWeChoseIt:
          "Scaleway Object Storage is S3-compatible, meaning standard AWS SDKs and tooling work without modification. EU data residency is guaranteed, and pricing is predictable compared to AWS S3.",
        href: "https://www.scaleway.com/en/object-storage",
        docsUrl: "https://www.scaleway.com/en/docs/storage/object/",
        tags: ["euHosted", "scaleway"],
      },
    ],
  },
  {
    title: "AI & LLM",
    icon: "🤖",
    accent: "from-fuchsia-500/20 to-pink-500/20",
    items: [
      {
        name: "GreenPT",
        slug: "greenpt",
        description: "AI model provider routing",
        whatIsIt: "A green-energy-powered EU AI model routing service that proxies requests to multiple LLM providers.",
        whyWeChoseIt:
          "Routes prompts to carbon-efficient, EU-hosted model endpoints. A single API key covers multiple models, and data never leaves the European Economic Area.",
        href: "https://greenpt.ai",
        tags: ["euHosted"],
      },
      {
        name: "EURouter",
        slug: "eurouter",
        description: "AI model provider routing",
        whatIsIt: "An EU-based OpenAI-compatible proxy that routes requests across multiple LLM providers.",
        whyWeChoseIt:
          "Provides a unified OpenAI-compatible endpoint for major models while guaranteeing EU data residency. Switching between providers is a one-line config change rather than an SDK migration.",
        href: "https://eurouter.ai",
        tags: ["euHosted"],
      },
      {
        name: "Evals",
        slug: "evals",
        description: "Framework tbd",
        whatIsIt: "A framework for systematically evaluating the quality and correctness of LLM outputs.",
        pending: true,
      },
    ],
  },
  {
    title: "Auth & Security",
    icon: "🔒",
    accent: "from-red-500/20 to-rose-500/20",
    items: [
      {
        name: "Better Auth + 2FA",
        slug: "better-auth",
        description: "Authentication",
        whatIsIt: "A framework-agnostic authentication library with built-in support for sessions, OAuth, email/password, and TOTP-based 2FA.",
        whyWeChoseIt:
          "No vendor lock-in, no monthly auth bill. The TypeScript-native API integrates cleanly with Prisma and React Router loaders. Built-in 2FA support means we don't need a separate service for OTP.",
        href: "https://www.better-auth.com",
        docsUrl: "https://www.better-auth.com/docs/introduction",
        tags: ["openSource"],
      },
      {
        name: "Audit Logging",
        slug: "audit-logging",
        description: "Provider tbd",
        whatIsIt: "Structured, immutable logging of user and system actions for compliance and forensic purposes.",
        pending: true,
      },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    icon: "☁️",
    accent: "from-sky-500/20 to-indigo-500/20",
    items: [
      {
        name: "Scaleway Kubernetes",
        slug: "scaleway-kubernetes",
        description: "Managed hosting",
        whatIsIt: "Scaleway Kapsule is a managed Kubernetes service running in European data centres.",
        whyWeChoseIt:
          "Removes control-plane maintenance entirely. EU-based infrastructure keeps us compliant with GDPR data residency requirements by default, and Scaleway's pricing is significantly lower than equivalent AWS or GCP offerings.",
        href: "https://www.scaleway.com/en/kubernetes-kapsule",
        docsUrl: "https://www.scaleway.com/en/docs/containers/kubernetes/",
        tags: ["euHosted", "scaleway"],
      },
      {
        name: "Devtron",
        slug: "devtron",
        description: "Kubernetes management & DevOps",
        whatIsIt: "An open-source software delivery workflow platform built on top of Kubernetes.",
        whyWeChoseIt:
          "Provides a GitOps-native UI for deployments, CI/CD pipelines, environment management, and rollbacks — without building custom Helm chart pipelines from scratch. Self-hosted, so no external SaaS dependency.",
        href: "https://devtron.ai",
        docsUrl: "https://docs.devtron.ai",
        tags: ["openSource", "selfHosted", "euHosted", "scaleway"],
      },
      {
        name: "CI/CD Pipeline",
        slug: "cicd-pipeline",
        description: "Provider tbd",
        whatIsIt: "An automated pipeline that runs tests, builds artefacts, and deploys on every code push.",
        pending: true,
      },
      {
        name: "Scaleway TEM",
        slug: "scaleway-tem",
        description: "Transactional email",
        whatIsIt: "Scaleway Transactional Email (TEM) is a managed email delivery service with SPF, DKIM, and DMARC built in.",
        whyWeChoseIt:
          "GDPR-compliant EU-hosted email delivery that integrates directly with the Scaleway ecosystem. No third-party SaaS like SendGrid is needed, keeping all data flows within the EU and within one provider's billing.",
        href: "https://www.scaleway.com/en/transactional-email-tem",
        docsUrl: "https://www.scaleway.com/en/docs/managed-services/transactional-email/",
        tags: ["euHosted", "scaleway"],
      },
    ],
  },
  {
    title: "Observability",
    icon: "📊",
    accent: "from-lime-500/20 to-green-500/20",
    items: [
      {
        name: "Sentry",
        slug: "sentry",
        description: "Error tracking",
        whatIsIt: "An application monitoring platform that captures errors, exceptions, and performance traces in production.",
        whyWeChoseIt:
          "Rich error context — stack traces with source maps, breadcrumbs, user context — dramatically reduces the time from 'something broke' to 'here is the exact line'. EU-hosted region keeps data inside Europe.",
        href: "https://sentry.io",
        docsUrl: "https://docs.sentry.io",
        tags: ["euHosted"],
      },
      {
        name: "Scaleway Cockpit",
        slug: "scaleway-cockpit",
        description: "Logging, monitoring & observability",
        whatIsIt: "A managed observability stack (Grafana + Loki + Prometheus) provided by Scaleway.",
        whyWeChoseIt:
          "Centralises logs, metrics, and dashboards within the same Scaleway account at no extra infrastructure cost. Data stays in the EU and we avoid running our own Grafana stack.",
        href: "https://www.scaleway.com/en/cockpit",
        docsUrl: "https://www.scaleway.com/en/docs/observability/cockpit/",
        tags: ["euHosted", "scaleway"],
      },
      {
        name: "Analytics",
        slug: "analytics",
        description: "Tbd",
        whatIsIt: "Product analytics tooling for tracking user behaviour, funnels, and feature adoption.",
        pending: true,
      },
    ],
  },
  {
    title: "Testing",
    icon: "🧪",
    accent: "from-cyan-500/20 to-blue-500/20",
    items: [
      {
        name: "Vitest",
        slug: "vitest",
        description: "Unit & integration testing",
        whatIsIt: "A Vite-native test runner with a Jest-compatible API.",
        whyWeChoseIt:
          "Shares the same Vite config and module resolution as the app, so tests run in the same environment as the code. Parallel execution and native ESM support make the test suite significantly faster than Jest.",
        href: "https://vitest.dev",
        docsUrl: "https://vitest.dev/guide/",
        tags: ["openSource"],
      },
      {
        name: "Playwright",
        slug: "playwright",
        description: "End-to-end testing",
        whatIsIt: "A browser automation framework for reliable end-to-end and cross-browser testing.",
        whyWeChoseIt:
          "Auto-waiting, multiple browser engines (Chromium, Firefox, WebKit), and a powerful locator API make end-to-end tests robust against timing issues. The trace viewer makes debugging flaky tests straightforward.",
        href: "https://playwright.dev",
        docsUrl: "https://playwright.dev/docs/intro",
        tags: ["openSource"],
      },
    ],
  },
  {
    title: "Mobile",
    icon: "📱",
    accent: "from-green-500/20 to-lime-500/20",
    items: [
      {
        name: "React Native",
        slug: "react-native",
        description: "Mobile development",
        whatIsIt: "A framework for building native iOS and Android applications using React and JavaScript.",
        whyWeChoseIt:
          "Shares component logic, TypeScript types, Zod schemas, and API client code with the web app. A single team can maintain both platforms without context-switching to Swift or Kotlin.",
        href: "https://reactnative.dev",
        docsUrl: "https://reactnative.dev/docs/getting-started",
        tags: ["openSource"],
      },
    ],
  },
  {
    title: "Developer Experience",
    icon: "💻",
    accent: "from-yellow-500/20 to-amber-500/20",
    items: [
      {
        name: "Cursor / Claude Code",
        slug: "cursor-claude-code",
        description: "AI-assisted coding",
        whatIsIt: "AI-powered code editors that embed LLM chat, inline completions, and multi-file edits directly into the development workflow.",
        whyWeChoseIt:
          "Context-aware suggestions, refactoring across files, and in-editor documentation lookup meaningfully accelerate feature development and code review. Rules and skills encode project conventions directly into the AI context.",
        href: "https://www.cursor.com",
      },
      {
        name: "Opinionated Starter",
        slug: "opinionated-starter",
        description: "Enforced architecture",
        whatIsIt: "A preconfigured project template that encodes the agreed stack, folder structure, and tooling conventions.",
        whyWeChoseIt:
          "Every new project starts from the same foundation — same linting rules, same folder layout, same CI scaffold. This removes setup bikeshedding and ensures conventions are enforced rather than suggested.",
        tags: ["openSource"],
      },
    ],
  },
];

export function findItemBySlug(slug: string): { item: TechItem; category: StackCategory } | undefined {
  for (const category of stack) {
    const item = category.items.find((i) => i.slug === slug);
    if (item) return { item, category };
  }
  return undefined;
}

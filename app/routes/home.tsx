import { Link, Outlet } from "react-router";
import type { Route } from "./+types/home";
import { stack, tagConfig } from "~/data/stack";
import type { TechItem, StackCategory } from "~/data/stack";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Techstack — Our Technology Stack" },
    {
      name: "description",
      content:
        "A modern, scalable technology stack built on TypeScript, React Router, and Scaleway infrastructure.",
    },
  ];
}

function TechTile({ item }: { item: TechItem }) {
  const className = `
    group relative rounded-xl border p-4 transition-all duration-300
    ${
      item.pending
        ? "border-dashed border-white/10 bg-white/2 hover:border-white/20 hover:bg-white/4"
        : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/8 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/3"
    }
    cursor-pointer
  `;

  return (
    <Link to={`/stack/${item.slug}`} preventScrollReset className={className}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-white/90 group-hover:text-white transition-colors">
          {item.name}
        </h3>
        <div className="flex shrink-0 items-center gap-1.5">
          {item.pending && (
            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase text-amber-400/80">
              tbd
            </span>
          )}
          <svg
            className="h-3.5 w-3.5 text-white/20 transition-colors group-hover:text-white/50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
      <p className="mt-1 text-sm text-white/50 group-hover:text-white/60 transition-colors">
        {item.description}
      </p>
      {item.tags && item.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => {
            const { label, color, icon } = tagConfig[tag];
            return (
              <span
                key={tag}
                title={label}
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${color}`}
              >
                {icon}
                {label}
              </span>
            );
          })}
        </div>
      )}
    </Link>
  );
}

function CategorySection({ category }: { category: StackCategory }) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br ${category.accent} text-lg ring-1 ring-white/10`}
        >
          {category.icon}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white/90">
            {category.title}
          </h2>
          <p className="text-xs text-white/40">
            {category.items.length}{" "}
            {category.items.length === 1 ? "technology" : "technologies"}
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <TechTile key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const total = stack.reduce((acc, cat) => acc + cat.items.length, 0);
  const decided = stack.reduce(
    (acc, cat) => acc + cat.items.filter((i) => !i.pending).length,
    0,
  );
  const pending = total - decided;

  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient mesh background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#09090b]" />
        <div className="absolute -left-[20%] top-[5%] h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute -right-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute -bottom-[5%] right-[20%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Hero */}
      <header className="relative border-b border-white/6">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-24 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/3 px-4 py-1.5 text-xs font-medium text-white/50 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Proposed Technology Stack
            </div>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-linear-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Techstack Overview
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
              A modern, full-stack technology foundation — TypeScript-first,
              deployed on European cloud infrastructure.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="mailto:janwillem@brthrs.nl?subject=Techstack%20Suggestion"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Submit a suggestion
              </a>
            </div>

            {/* Stats */}
            <div className="mt-4 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-white">{total}</div>
                <div className="text-sm text-white/40">Technologies</div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-emerald-400">
                  {decided}
                </div>
                <div className="text-sm text-white/40">Decided</div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-amber-400">
                  {pending}
                </div>
                <div className="text-sm text-white/40">Pending</div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">
                  {stack.length}
                </div>
                <div className="text-sm text-white/40">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stack grid */}
      <main className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-16">
          {stack.map((category) => (
            <CategorySection key={category.title} category={category} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col items-center gap-4 border-t border-white/6 pt-12">
          <a
            href="mailto:janwillem@brthrs.nl?subject=Techstack%20Suggestion"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/6 px-5 py-2 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Submit a suggestion
          </a>
          <div className="flex items-center gap-3">
            {["React Router v7", "shadcn/ui", "Tailwind CSS v4", "TypeScript"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs text-white/40"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
          <p className="text-xs text-white/25">
            This presentation was built with the same stack it proposes.
          </p>
        </div>
      </main>
    </div>
    <Outlet />
    </>
  );
}

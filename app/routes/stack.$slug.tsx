import { useEffect, useCallback } from "react";
import { useNavigate, data } from "react-router";
import type { Route } from "./+types/stack.$slug";
import { findItemBySlug, tagConfig } from "~/data/stack";

export function meta({ data: loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: "Not Found" }];
  return [
    { title: `${loaderData.item.name} — Techstack` },
    { name: "description", content: loaderData.item.whatIsIt },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const result = findItemBySlug(params.slug);
  if (!result) throw data(null, { status: 404 });
  return result;
}

export default function StackDetail({ loaderData }: Route.ComponentProps) {
  const { item, category } = loaderData;
  const navigate = useNavigate();

  const close = useCallback(() => navigate("/", { preventScrollReset: true }), [navigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 md:p-8"
      onClick={close}
    >
      {/* Panel — stops click propagation so clicking inside doesn't close */}
      <div
        className="relative flex w-full max-w-3xl flex-col rounded-2xl border border-white/10 bg-[#0d0d10] shadow-2xl"
        style={{ maxHeight: "calc(100vh - 4rem)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/[0.07] px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br ${category.accent} text-base ring-1 ring-white/10`}
            >
              {category.icon}
            </span>
            <span className="text-sm text-white/40">{category.title}</span>
          </div>
          <button
            onClick={close}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/30 transition hover:bg-white/8 hover:text-white/70"
            aria-label="Close"
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-6 py-8">
          {/* Title + badge */}
          <div className="mb-2 flex flex-wrap items-start gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {item.name}
            </h1>
            {item.pending && (
              <span className="mt-1.5 rounded-full bg-amber-500/10 px-3 py-0.5 text-xs font-medium tracking-wider uppercase text-amber-400/80 ring-1 ring-amber-500/20">
                tbd
              </span>
            )}
          </div>

          <p className="mb-5 text-base text-white/45">{item.description}</p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {item.tags.map((tag) => {
                const { label, color, icon } = tagConfig[tag];
                return (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${color}`}
                  >
                    {icon}
                    {label}
                  </span>
                );
              })}
            </div>
          )}

          {/* Content sections */}
          <div className="space-y-5">
            <section className="rounded-xl border border-white/10 bg-white/3 p-5">
              <h2 className="mb-2.5 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                What is it
              </h2>
              <p className="text-sm leading-relaxed text-white/70">
                {item.whatIsIt}
              </p>
            </section>

            <section
              className={`rounded-xl border p-5 ${
                item.pending
                  ? "border-dashed border-white/10 bg-white/2"
                  : "border-white/10 bg-white/3"
              }`}
            >
              <h2 className="mb-2.5 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                Why we chose it
              </h2>
              {item.whyWeChoseIt ? (
                <p className="text-sm leading-relaxed text-white/70">
                  {item.whyWeChoseIt}
                </p>
              ) : (
                <p className="text-sm leading-relaxed italic text-amber-400/60">
                  No decision has been made yet. This choice is still being evaluated.
                </p>
              )}
            </section>

            {/* Links */}
            {(item.href || item.docsUrl) && (
              <div className="flex flex-wrap gap-3 pt-1">
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                    Website
                  </a>
                )}
                {item.docsUrl && (
                  <a
                    href={item.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/6 px-5 py-2.5 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                    Documentation
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

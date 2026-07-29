"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.article
        initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.45,
          delay: prefersReducedMotion ? 0 : index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={
          prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.2 } }
        }
        className="group border-glow flex flex-col rounded-xl bg-bg-card overflow-hidden"
      >
        <div className="relative flex h-36 sm:h-40 items-end overflow-hidden border-b border-border bg-bg-elevated">
          <div
            className="absolute inset-0 bg-grid opacity-40"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-accent/5"
            aria-hidden
          />
          <span className="relative z-10 px-5 pb-3 heading-serif text-5xl sm:text-6xl text-accent/25 group-hover:text-accent/40 transition-colors">
            {project.number}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="heading-serif text-xl sm:text-2xl text-heading">
            {project.title}
          </h3>

          {project.metric ? (
            <p className="mt-2 inline-flex w-fit rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
              {project.metric}
            </p>
          ) : null}

          <p className="mt-3 flex-1 text-sm leading-relaxed text-body line-clamp-4">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 6).map((tag) => (
              <li
                key={tag}
                className="rounded border border-border bg-bg-elevated px-2 py-0.5 text-[11px] text-muted"
              >
                {tag}
              </li>
            ))}
            {project.tags.length > 6 ? (
              <li className="rounded border border-border px-2 py-0.5 text-[11px] text-muted">
                +{project.tags.length - 6}
              </li>
            ) : null}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-heading transition hover:border-accent/40 hover:text-accent"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-heading transition hover:border-accent/40 hover:text-accent"
              >
                <ExternalLink size={14} aria-hidden />
                Live Demo
              </a>
            ) : null}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="ml-auto inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium text-accent transition hover:bg-accent/10"
            >
              View Details
              <ChevronRight size={14} aria-hidden />
            </button>
          </div>
        </div>
      </motion.article>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
            aria-label="Close dialog"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-xl border border-border bg-bg-card p-6 sm:p-8 shadow-2xl"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  Project {project.number}
                </p>
                <h3
                  id={titleId}
                  className="heading-serif mt-1 text-2xl text-heading"
                >
                  {project.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-2 text-body hover:bg-bg-elevated hover:text-heading"
                aria-label="Close details"
              >
                <X size={18} />
              </button>
            </div>

            {project.metric ? (
              <p className="mt-3 text-sm font-semibold text-accent">
                {project.metric}
              </p>
            ) : null}

            <p className="mt-4 text-sm leading-relaxed text-body">
              {project.description}
            </p>

            {project.details && project.details.length > 0 ? (
              <div className="mt-5">
                <h4 className="text-sm font-medium text-heading mb-2">
                  Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-body"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-border bg-bg-elevated px-2 py-0.5 text-[11px] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg hover:bg-accent-dim"
              >
                <GitHubIcon size={16} />
                View on GitHub
              </a>
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-heading hover:border-accent/40"
                >
                  <ExternalLink size={16} aria-hidden />
                  Live Demo
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
}

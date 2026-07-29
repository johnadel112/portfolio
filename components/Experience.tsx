"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/Motion";
import { cn } from "@/lib/utils";

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="section-pad relative"
      aria-labelledby="experience-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="Professional Journey"
            description="Internships and roles that shaped my work in AI, software, and education."
          />
        </FadeIn>

        <div className="relative">
          <div
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-[19px]"
            aria-hidden
          />

          <ol className="space-y-6 sm:space-y-8">
            {experience.map((item, index) => (
              <motion.li
                key={item.id}
                initial={
                  prefersReducedMotion ? false : { opacity: 0, x: -16 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-10 sm:pl-14"
              >
                <span
                  className={cn(
                    "absolute left-2 top-5 flex h-3.5 w-3.5 sm:left-3 sm:h-4 sm:w-4 items-center justify-center rounded-full border-2",
                    item.featured
                      ? "border-accent bg-accent shadow-[0_0_12px_rgba(45,212,191,0.55)]"
                      : "border-secondary/60 bg-bg"
                  )}
                  aria-hidden
                />

                <article
                  className={cn(
                    "rounded-xl p-5 sm:p-6 transition-colors",
                    item.featured
                      ? "border-glow-strong bg-bg-card"
                      : "border border-border bg-bg-elevated/60 hover:border-border-glow"
                  )}
                >
                  {item.featured ? (
                    <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                      Featured
                    </span>
                  ) : null}

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="heading-serif text-lg sm:text-xl text-heading">
                      {item.role}
                      <span className="text-body font-sans text-base font-normal">
                        {" "}
                        — {item.company}
                      </span>
                    </h3>
                    <time className="shrink-0 text-xs sm:text-sm text-muted">
                      {item.period}
                    </time>
                  </div>

                  <p className="mt-3 text-sm sm:text-[0.95rem] leading-relaxed text-body">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs text-accent"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

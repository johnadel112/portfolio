"use client";

import { Code2, Globe, Database, Brain, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/Motion";

const iconMap: Record<SkillCategory["icon"], LucideIcon> = {
  code: Code2,
  globe: Globe,
  database: Database,
  brain: Brain,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative"
      aria-labelledby="skills-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            id="skills-heading"
            eyebrow="Capabilities"
            title="Technical Skills"
            description="A focused toolkit spanning languages, web systems, data platforms, and MLOps."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <FadeIn key={category.id} delay={index * 0.05}>
                <article className="h-full border-glow rounded-xl bg-bg-card p-5 sm:p-6 transition hover:border-accent/30">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-bg-elevated text-accent"
                      aria-hidden
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-heading">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-border bg-bg-elevated px-2.5 py-1 text-xs sm:text-[13px] text-body"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/Motion";

export function About() {
  const { education, about } = siteConfig;

  return (
    <section
      id="about"
      className="section-pad relative"
      aria-labelledby="about-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Education & Focus"
            description={about}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <article className="border-glow rounded-xl bg-bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-bg-elevated text-accent"
                  aria-hidden
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="heading-serif text-xl sm:text-2xl text-heading">
                    {education.school}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm sm:text-base text-body">
                    <li>{education.degree}</li>
                    <li>{education.major}</li>
                    <li className="text-muted">{education.period}</li>
                    <li className="pt-1 text-accent/90">{education.gpa}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-heading">
                <BookOpen size={16} className="text-accent" aria-hidden />
                Relevant coursework
              </div>
              <ul className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-md border border-border bg-bg-elevated px-3 py-1.5 text-xs sm:text-sm text-body"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}

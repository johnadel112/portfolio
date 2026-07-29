"use client";

import { featuredProjects, otherProjects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/Motion";
import { GitHubIcon } from "@/components/SocialIcons";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-pad relative"
      aria-labelledby="projects-heading"
    >
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            id="projects-heading"
            eyebrow="Featured Work"
            title="Selected Projects"
            description="End-to-end systems spanning machine learning, cybersecurity, and full-stack product engineering."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <FadeIn delay={0.1} className="mt-16 sm:mt-20">
          <h3 className="heading-serif text-xl sm:text-2xl text-heading mb-2">
            Other Projects
          </h3>
          <p className="mb-6 text-sm text-muted max-w-lg">
            Additional work that rounds out my engineering practice.
          </p>

          <ul className="space-y-3">
            {otherProjects.map((project) => (
              <li
                key={project.id}
                className="flex flex-col gap-3 rounded-lg border border-border/80 bg-bg-elevated/40 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="min-w-0">
                  <h4 className="text-base font-medium text-heading">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-sm text-body line-clamp-2">
                    {project.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-[11px] text-muted border border-border rounded px-1.5 py-0.5"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-md border border-border px-3 py-1.5 text-xs font-medium text-heading transition hover:border-accent/40 hover:text-accent sm:self-center"
                >
                  <GitHubIcon size={14} />
                  GitHub
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

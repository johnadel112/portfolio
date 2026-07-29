"use client";

import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/data/site";

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="border-t border-border bg-bg-elevated/40">
      <div className="container-narrow flex flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm text-body">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-muted">Cairo, Egypt</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-body transition hover:bg-bg-card hover:text-accent"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-body transition hover:bg-bg-card hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <button
            type="button"
            onClick={scrollTop}
            className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-heading transition hover:border-accent/40 hover:text-accent"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}

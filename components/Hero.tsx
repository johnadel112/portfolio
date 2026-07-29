"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowDown, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/data/site";

function ProfilePortrait() {
  const [imgError, setImgError] = useState(!siteConfig.hasProfileImage);

  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
      <div
        className="absolute -inset-2 rounded-2xl border border-accent/40"
        aria-hidden
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-bg-card border-glow">
        {!imgError ? (
          <Image
            src={siteConfig.profileImage}
            alt={`Professional portrait of ${siteConfig.name}`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 280px, 360px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-bg-elevated via-bg-card to-bg"
            role="img"
            aria-label={`${siteConfig.name} initials placeholder`}
          >
            <span className="heading-serif text-6xl sm:text-7xl text-accent/90 tracking-tight">
              {siteConfig.initials}
            </span>
            <span className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">
              Profile photo
            </span>
          </div>
        )}
      </div>
      <div className="absolute -bottom-3 left-1/2 z-10 w-max -translate-x-1/2 rounded-full border border-accent/40 bg-bg-elevated px-3 py-1.5 text-[11px] font-medium tracking-wide text-accent shadow-[0_0_20px_-6px_rgba(45,212,191,0.4)]">
        {siteConfig.graduation}
      </div>
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />

      <div className="container-narrow relative px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.p
              variants={item}
              className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-accent"
            >
              Portfolio
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="heading-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-balance"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-base sm:text-lg font-medium text-secondary"
            >
              {siteConfig.title}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-body"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-accent-dim focus-visible:outline-offset-4"
              >
                View Projects
                <ArrowDown size={16} aria-hidden />
              </a>
              <a
                href={siteConfig.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-md border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-heading transition hover:border-accent/50 hover:text-accent"
              >
                Download CV
                <Download size={16} aria-hidden />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-transparent px-5 py-2.5 text-sm font-medium text-body transition hover:text-accent"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-body transition hover:bg-bg-elevated hover:text-accent"
                aria-label="GitHub profile"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-body transition hover:bg-bg-elevated hover:text-accent"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-md p-2 text-body transition hover:bg-bg-elevated hover:text-accent"
                aria-label={`Email ${siteConfig.email}`}
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <ProfilePortrait />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

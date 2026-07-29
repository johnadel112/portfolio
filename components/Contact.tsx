"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/Motion";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  };

  return (
    <section
      id="contact"
      className="section-pad relative"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" aria-hidden />

      <div className="container-narrow relative">
        <FadeIn>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let’s Build Something Impactful"
            description="I am open to AI engineering, machine learning, software engineering, backend development, and cybersecurity internship opportunities."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-bg-card p-4 transition hover:border-accent/40"
              >
                <Mail className="shrink-0 text-accent" size={18} aria-hidden />
                <div className="min-w-0">
                  <p className="text-xs text-muted">Email</p>
                  <p className="truncate text-sm text-heading">{siteConfig.email}</p>
                </div>
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-bg-card p-4 transition hover:border-accent/40"
              >
                <GitHubIcon className="shrink-0 text-accent" size={18} />
                <div className="min-w-0">
                  <p className="text-xs text-muted">GitHub</p>
                  <p className="truncate text-sm text-heading">github.com/johnadel112</p>
                </div>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-bg-card p-4 transition hover:border-accent/40"
              >
                <LinkedInIcon className="shrink-0 text-accent" size={18} />
                <div className="min-w-0">
                  <p className="text-xs text-muted">LinkedIn</p>
                  <p className="truncate text-sm text-heading">john-adel-a14377181</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-bg-card p-4">
                <MapPin className="shrink-0 text-accent" size={18} aria-hidden />
                <div>
                  <p className="text-xs text-muted">Location</p>
                  <p className="text-sm text-heading">{siteConfig.location}</p>
                </div>
              </div>
            </aside>

            <form
              onSubmit={handleSubmit}
              className="border-glow rounded-xl bg-bg-card p-5 sm:p-6 space-y-4"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-md border border-border bg-bg-elevated px-3 py-2.5 text-sm text-heading placeholder:text-muted focus:border-accent/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-md border border-border bg-bg-elevated px-3 py-2.5 text-sm text-heading placeholder:text-muted focus:border-accent/50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-md border border-border bg-bg-elevated px-3 py-2.5 text-sm text-heading placeholder:text-muted focus:border-accent/50"
                  placeholder="Internship opportunity"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-md border border-border bg-bg-elevated px-3 py-2.5 text-sm text-heading placeholder:text-muted focus:border-accent/50"
                  placeholder="Tell me about the role or project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-accent-dim sm:w-auto"
              >
                Send Message
                <Send size={16} aria-hidden />
              </button>
              {status === "sent" ? (
                <p className="text-xs text-accent" role="status">
                  Opening your email client…
                </p>
              ) : (
                <p className="text-xs text-muted">
                  Uses mailto as a client-side fallback — no backend required.
                </p>
              )}
            </form>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

"use client";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`mb-12 flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="heading-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-balance"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base sm:text-lg text-body/90 leading-relaxed max-w-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}

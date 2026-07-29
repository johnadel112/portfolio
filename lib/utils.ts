export function cn(...inputs: (string | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function scrollToId(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

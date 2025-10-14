export async function loadContent() {
  const res = await fetch("/content/content.json", { cache: "no-store" });
  return res.json();
}

export function pickLang(available, preferred, fallback) {
  const lc = (preferred || "").toLowerCase();
  if (available.includes(lc)) return lc;
  return fallback || available[0];
}

export function t(obj, lang) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  if (typeof obj === "object" && lang in obj) return obj[lang];
  return Object.values(obj)[0] || "";
}
import { Locale } from "@/lib/i18n";

export const getStoredLang = (): Locale => {
  if (typeof window === "undefined") return "en";
  return (localStorage.getItem("lang") as Locale) || "en";
};

export const setStoredLang = (lang: Locale) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("lang", lang);
};

import en from "@/i18n/en.json";
import de from "@/i18n/de.json";

export type Locale = "en" | "de";

const dictionaries = {
  en,
  de,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.en;
}
export type Dictionary = typeof dictionaries.en;

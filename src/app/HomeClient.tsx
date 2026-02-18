"use client";

import { useSearchParams } from "next/navigation";
import { getDictionary, Locale } from "@/lib/i18n";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import HowWeCanHelp from "@/components/HowWeCanHelp";
import Testimonial from "@/components/Testimonial";
import { getStoredLang } from "@/lib/lang";

export default function Home() {
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang") as Locale | null;
const lang = urlLang || getStoredLang();
  const t = getDictionary(lang);

  return (
    <>
      {/* Header */}
      <Header lang={lang} />

      {/* Hero (pass t or lang as needed) */}
      <Hero t={t} />

      <Philosophy t={t} />
      <HowWeCanHelp t={t} />
      <Testimonial t={t} />

      {/* Footer */}
      <Footer lang={lang} />
    </>
  );
}

"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Dictionary, getDictionary, Locale } from "@/lib/i18n";
import { getStoredLang } from "@/lib/lang";
import { CONTAINER_CLASSES } from "@/components/Constants";

type Props = { t: Dictionary };

const Testimonial = ({ t }: Props) => {
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang") as Locale | null;
  const lang = urlLang || getStoredLang();


  return (
    <section className="py-20 md:py-32 bg-white">
      <div className={CONTAINER_CLASSES}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-primary-green/20 text-9xl font-serif mb-4">
            "
          </div>

          <blockquote className="font-serif text-3xl md:text-5xl leading-snug text-charcoal mb-10 italic">
            {t.testimonial.quote}
          </blockquote>

          <p className="text-charcoal/70 font-medium uppercase tracking-wider text-sm">
            {t.testimonial.author}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

"use client";

import React from "react";
import Link from "next/link";
import { CONTAINER_CLASSES } from "@/components/Constants";
import { useSearchParams } from "next/navigation";
import { Dictionary, getDictionary, Locale } from "@/lib/i18n";
import { getStoredLang } from "@/lib/lang";
type Props = { t: Dictionary };

const Hero: React.FC<Props> = ({ t }) => {
  const searchParams = useSearchParams();
 const urlLang = searchParams.get("lang") as Locale | null;
const lang = urlLang || getStoredLang();  
  
  

  return (
    <section className="relative bg-white overflow-hidden">
      {/* TEXT CONTAINER */}
      <div className={`relative z-10 ${CONTAINER_CLASSES}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px] md:min-h-[620px] items-center">
          {/* LEFT: TEXT */}
          <div className="py-12 md:py-0">
            <div className="max-w-lg">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6 text-charcoal" data-aos="fade-up">
                {t.hero.title}
              </h2>

              <p className="text-lg text-charcoal/60 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
                <Link
                  href={`/parents?lang=${lang}`}
                  className="bg-primary-green text-white px-6 py-2.5 rounded shadow-sm font-medium text-sm hover:shadow-md transition-shadow"
                >
                  {t.hero.boxes.parents}
                </Link>

                <Link
                  href={`/schools?lang=${lang}`}
                  className="border border-secondary-clay text-secondary-clay px-6 py-2.5 rounded font-medium text-sm
                             hover:bg-secondary-clay hover:text-white hover:border-secondary-clay
                             transition-colors duration-200"
                >
                  {t.hero.boxes.schools}
                </Link>
              </div>
            </div>
          </div>

          {/* EMPTY COLUMN (desktop layout only) */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* RIGHT: FULL-BLEED IMAGE (DESKTOP ONLY) */}
      <div className="absolute top-0 right-0 h-full w-full md:w-[55vw] hidden md:block select-none">
        <img
          src="images/hero-img.jpg"
          alt={t.hero.imageAlt}
          className="h-full w-full object-cover object-center"
        />

        {/* FADE INTO TEXT */}
        <div
          className="
            absolute inset-y-0 left-0
            w-[40%]
            bg-gradient-to-r
            from-white
            via-white/60
            to-transparent
          "
        />
      </div>

      {/* WAVE DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 100L60 92.5C120 85 240 70 360 65C480 60 600 65 720 72.5C840 80 960 90 1080 85C1200 80 1320 60 1380 50L1440 40V100H0Z"
            fill="#fcfbf7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

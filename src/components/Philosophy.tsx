"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Dictionary, Locale } from "@/lib/i18n";
import { getStoredLang } from "@/lib/lang";
import { CONTAINER_CLASSES } from "@/components/Constants";

type Props = { t: Dictionary };

const Philosophy = ({ t }: Props) => {
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang") as Locale | null;
  const lang = urlLang || getStoredLang();

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className={CONTAINER_CLASSES}>
        <div className="text-center mb-16">
          <span className="font-serif text-primary-green italic text-lg mb-4 block">
            {t.philosophy.eyebrow}
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal">
            {t.philosophy.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {/* Card 1 */}
          <div className="bg-gray-50 p-10 rounded-2xl border border-primary-green/10 hover:border-primary-green/40 hover:shadow-lg transition-all duration-300 group" data-aos="fade-up">
            <div className="w-16 h-16 bg-primary-green/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
              <i className="fa-solid fa-seedling text-3xl text-primary-green group-hover:text-white"></i>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-5">
              {t.philosophy.cards[0].title}
            </h3>
            <p className="text-charcoal/70 text-base leading-relaxed mb-6">
              {t.philosophy.cards[0].description}
            </p>
            <a
              href="#"
              className="text-primary-green font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all hover:underline"
            >
              {t.philosophy.learnMore}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-primary-green/5 p-10 rounded-2xl border-2 border-primary-green/40 hover:border-primary-green/80 hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-primary-green/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
              <i className="fa-solid fa-hands-holding-child text-3xl text-primary-green group-hover:text-white"></i>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-5">
              {t.philosophy.cards[1].title}
            </h3>
            <p className="text-charcoal/70 text-base leading-relaxed mb-6">
              {t.philosophy.cards[1].description}
            </p>
            <a
              href="#"
              className="text-primary-green font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all hover:underline"
            >
              {t.philosophy.learnMore}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-10 rounded-2xl border border-primary-green/10 hover:border-primary-green/40 hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-primary-green/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
              <i className="fa-solid fa-lightbulb text-3xl text-primary-green group-hover:text-white"></i>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-5">
              {t.philosophy.cards[2].title}
            </h3>
            <p className="text-charcoal/70 text-base leading-relaxed mb-6">
              {t.philosophy.cards[2].description}
            </p>
            <a
              href="#"
              className="text-primary-green font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all hover:underline"
            >
              {t.philosophy.learnMore}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

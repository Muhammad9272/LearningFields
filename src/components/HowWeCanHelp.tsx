"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Dictionary, getDictionary, Locale } from "@/lib/i18n";
import { getStoredLang } from "@/lib/lang";
import { CONTAINER_CLASSES } from "@/components/Constants";

type Props = { t: Dictionary };

const HowWeCanHelp = ({ t }: Props) => {
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang") as Locale | null;
  const lang = urlLang || getStoredLang();

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className={CONTAINER_CLASSES}>
        <h2 className="font-serif text-5xl md:text-6xl text-charcoal text-center mb-20">
          {t.help.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-10 md:p-12 rounded-2xl border border-primary-green/10 shadow-sm hover:shadow-xl hover:border-primary-green/40 transition-all duration-300 group" data-aos="fade-up">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-school text-3xl text-primary-green group-hover:text-white"></i>
              </div>

              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-xl text-charcoal mb-4">
                  {t.help.cards[0].title}
                </h3>

                <p className="text-charcoal/70 text-base leading-relaxed mb-6">
                  {t.help.cards[0].description}
                </p>

                <a
                  href="#"
                  className="text-primary-green font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all hover:underline"
                >
                  {t.help.learnMore}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 md:p-12 rounded-2xl border border-secondary-clay/10 shadow-sm hover:shadow-xl hover:border-secondary-clay/40 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-secondary-clay/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-clay group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-house-chimney-user text-3xl text-secondary-clay group-hover:text-white"></i>
              </div>

              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-xl text-charcoal mb-4">
                  {t.help.cards[1].title}
                </h3>

                <p className="text-charcoal/70 text-base leading-relaxed mb-6">
                  {t.help.cards[1].description}
                </p>

                <a
                  href="#"
                  className="text-secondary-clay font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all hover:underline"
                >
                  {t.help.learnMore}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelp;

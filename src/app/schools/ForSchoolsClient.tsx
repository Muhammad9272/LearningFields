"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTAINER_CLASSES } from "@/components/Constants";
import { useSearchParams } from "next/navigation";
import { getDictionary, Locale } from "@/lib/i18n";
import { getStoredLang } from "@/lib/lang";


export default function ForSchoolsClient() {
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang") as Locale | null;
  const lang = urlLang || getStoredLang();
  const t = getDictionary(lang);

  return (
    <div className="bg-bg-ivory min-h-screen">
      <Header lang={lang} />

      {/* Page Header */}
      <section className="bg-white py-16 md:py-24 border-b border-primary-green/20">
        <div className={CONTAINER_CLASSES}>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">
            {t.schools.pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-3xl leading-relaxed">
            {t.schools.pageDescription}
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-32">
        <div className={CONTAINER_CLASSES}>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-16">
            {t.schools.solutionsTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-20">
            {t.schools.solutions.map((solution: any, index: number) => (
              <div
                key={index}
                className="bg-white p-8 md:p-10 rounded-2xl border border-primary-green/10 shadow-sm hover:shadow-xl hover:border-primary-green/40 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-serif text-2xl md:text-xl text-charcoal mb-4 group-hover:text-primary-green transition-colors">
                  {solution.title}
                </h3>
                <p className="text-charcoal/70 mb-8 leading-relaxed text-base">
                  {solution.description}
                </p>
                <ul className="space-y-4">
                  {solution.features.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-charcoal/80"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="fa-solid fa-check text-primary-green text-sm"></i>
                      </div>
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why Partner */}
          <div className="bg-gradient-to-br from-primary-green/5 to-secondary-clay/5 p-10 md:p-16 rounded-3xl border border-primary-green/20">
            <h3 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 text-center">
              {t.schools.whyTitle}
            </h3>

            <div className="grid md:grid-cols-3 gap-12">
              {t.schools.stats.map((stat: any, i: number) => (
                <div key={i} className="text-center group">
                  <div className="text-6xl md:text-7xl text-primary-green font-bold mb-4 transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <p className="text-charcoal/70 font-semibold uppercase tracking-wider text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white py-20 md:py-32">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-green to-transparent"></div>
        <div className={`${CONTAINER_CLASSES} text-center`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
              {t.schools.cta.title}
            </h2>
            <p className="text-charcoal/70 text-lg md:text-xl mb-12 leading-relaxed">
              {t.schools.cta.description}
            </p>
            <a
              href={`/contact?lang=${lang}`}
              className="inline-block bg-primary-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-green/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t.schools.cta.button}
            </a>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}

"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTAINER_CLASSES } from "@/components/Constants";
import { useSearchParams } from "next/navigation";
import { getDictionary, Locale  } from "@/lib/i18n";
import { getStoredLang } from "@/lib/lang";

export default function AboutClient() {
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
            {t.about.pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-3xl leading-relaxed">
            {t.about.pageDescription}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className={CONTAINER_CLASSES}>
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-primary-green/10" data-aos="fade-up">
            <div className="space-y-8 text-charcoal/80 leading-relaxed">
              {t.about.story.paragraphs.map((p: string, i: number) => (
                <p key={i} className="text-lg md:text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className={CONTAINER_CLASSES}>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-20 text-center">
            {t.about.values.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.values.items.map((value: any, i: number) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-2xl border border-primary-green/10 shadow-sm hover:shadow-lg hover:border-primary-green/30 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-green group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <i className={`fa-solid ${value.icon} text-3xl`}></i>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      {t.about.team.founder && (
        <section className="py-20 md:py-32 bg-white">
          <div className={CONTAINER_CLASSES}>
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-20 text-center">
              {t.about.team.title}
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-primary-green/5 to-secondary-clay/5 rounded-3xl h-96 lg:h-[550px] overflow-hidden shadow-lg border border-primary-green/10" data-aos="fade-right">
                  <img
                    src="/images/sabina_website.png"
                    alt={t.about.team.founder.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-6" data-aos="fade-left">
                  <div>
                    <p className="text-primary-green font-semibold text-sm mb-2 uppercase tracking-wider">
                      {t.about.team.founder.role}
                    </p>
                    <h3 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
                      {t.about.team.founder.name}
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-primary-green/10 shadow-sm">
                    <p className="text-charcoal/80 leading-relaxed text-base md:text-lg">
                      {t.about.team.founder.bio}
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative bg-white py-20 md:py-32">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-green to-transparent"></div>
        <div className={`${CONTAINER_CLASSES} text-center`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
              {t.about.cta.title}
            </h2>
            <p className="text-charcoal/70 text-lg md:text-xl mb-12 leading-relaxed">
              {t.about.cta.description}
            </p>
            <a
              href={`/contact?lang=${lang}`}
              className="inline-block bg-primary-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-green/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t.about.cta.button}
            </a>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}

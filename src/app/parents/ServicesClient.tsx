"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTAINER_CLASSES } from "@/components/Constants";
import { useSearchParams } from "next/navigation";
import { getDictionary, Locale } from "@/lib/i18n";
import { getStoredLang } from "@/lib/lang";

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang") as Locale | null;
  const lang = urlLang || getStoredLang();
  const t = getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} />

      <main className="flex-grow bg-bg-ivory">
        {/* Page Header */}
        <section className="bg-white py-16 md:py-24 border-b border-primary-green/20">
          <div className={CONTAINER_CLASSES}>
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">
              {t.services.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-3xl leading-relaxed">
              {t.services.pageDescription}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className={CONTAINER_CLASSES}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {t.services.items.map((service: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary-green/10
                             hover:shadow-xl hover:border-primary-green/40 transition-all duration-300 hover:-translate-y-2 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-primary-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                    <i className={`fa-solid ${service.icon} text-3xl`}></i>
                  </div>
                  <h3 className="font-serif text-2xl md:text-xl text-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-white py-20 md:py-32">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-green to-transparent"></div>
          <div className={`${CONTAINER_CLASSES} text-center`}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
                {t.services.cta.title}
              </h2>
              <p className="text-charcoal/70 text-lg md:text-xl mb-12 leading-relaxed">
                {t.services.cta.description}
              </p>
              <a
                href={`/contact?lang=${lang}`}
                className="inline-block bg-primary-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-green/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t.services.cta.button}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

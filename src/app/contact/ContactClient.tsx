"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTAINER_CLASSES } from "@/components/Constants";
import { useSearchParams } from "next/navigation";
import { getDictionary, Locale } from "@/lib/i18n";
import { getStoredLang } from "@/lib/lang";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang") as Locale | null;
  const lang = urlLang || getStoredLang();
  const t = getDictionary(lang);

  // 🔹 form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // 🔹 handle inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bg-ivory min-h-screen">
      <Header lang={lang} />

      {/* Page Header */}
      <section className="bg-white py-16 md:py-24 border-b border-primary-green/20">
        <div className={CONTAINER_CLASSES}>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">
            {t.contact.pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-3xl leading-relaxed">
            {t.contact.pageDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className={CONTAINER_CLASSES}>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-primary-green/10" data-aos="fade-right">
                <h2 className="font-serif text-4xl text-charcoal mb-10">
                  {t.contact.form.title}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-charcoal">
                        {t.contact.form.name}
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.placeholders.name}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/40 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3 text-charcoal">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.placeholders.email}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/40 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 text-charcoal">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/40 transition"
                    >
                      <option value="">Select subject</option>
                      {t.contact.form.subjects.map((s: string, i: number) => (
                        <option key={i} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 text-charcoal">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={t.contact.form.placeholders.message}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/40 transition resize-none"
                    />
                  </div>

                  {/* status messages */}
                  {success && (
                    <p className="text-green-600 font-semibold p-4 bg-green-50 rounded-xl">
                      ✓ Message sent successfully.
                    </p>
                  )}
                  {error && (
                    <p className="text-red-600 font-semibold p-4 bg-red-50 rounded-xl">
                      Failed to send message. Please try again.
                    </p>
                  )}

                  <button
                    disabled={loading}
                    className="w-full bg-primary-green hover:bg-primary-green/90 text-white py-4 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : t.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-primary-green/10 sticky top-20" data-aos="fade-left">
                <h3 className="font-serif text-3xl text-charcoal mb-12">
                  {t.contact.services.title}
                </h3>

                <div className="space-y-10">
                  {t.contact.services.items.map((service: any, i: number) => (
                    <div key={i} className="pb-10 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <div className="flex gap-4 items-start">
                        <div className="w-14 h-14 bg-primary-green/10 rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-primary-green hover:text-white transition-all duration-300">
                          <i className={`fa-solid ${service.icon} text-2xl text-primary-green hover:text-white`}></i>
                        </div>
                        <div>
                          <h4 className="font-serif text-lg text-charcoal mb-2">
                            {service.title}
                          </h4>
                          <p className="text-charcoal/70 leading-relaxed text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white border-t border-primary-green/10">
        <div className={CONTAINER_CLASSES}>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-20 text-center">
            {t.contact.faq.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {t.contact.faq.items.map((faq: any, i: number) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-primary-green/10 hover:border-primary-green/30 transition-all duration-300">
                <h3 className="font-serif text-lg md:text-xl text-charcoal mb-4 text-primary-green">{faq.q}</h3>
                <p className="text-charcoal/70 leading-relaxed text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}

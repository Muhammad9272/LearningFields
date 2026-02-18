"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getDictionary, Locale } from "@/lib/i18n";
import { getStoredLang } from "@/lib/lang";

export default function RegisterPage() {
  const searchParams = useSearchParams();
 const urlLang = searchParams.get("lang") as Locale | null;
const lang = urlLang || getStoredLang();
  const t = getDictionary(lang);

  return (
    <>
      <Header lang={lang} />

      <main className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-gradient-to-br from-bg-ivory via-bg-ivory to-primary-sage/5 px-4 py-12">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-sage via-secondary-clay to-accent-clay rounded-full" />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-divider-olive/20 shadow-xl p-10">
            {/* Title */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-serif text-text-charcoal mb-3">
                {t.register.title}
              </h1>
              <p className="text-base text-text-charcoal/60">
                {t.register.subtitle}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm mb-2">
                  {t.register.form.fullName}
                </label>
                <input
                  placeholder={t.register.form.placeholders.name}
                  className="w-full rounded-xl border px-4 py-3.5"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  {t.register.form.email}
                </label>
                <input
                  placeholder={t.register.form.placeholders.email}
                  className="w-full rounded-xl border px-4 py-3.5"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  {t.register.form.password}
                </label>
                <input
                  type="password"
                  placeholder={t.register.form.placeholders.password}
                  className="w-full rounded-xl border px-4 py-3.5"
                />
                <p className="mt-2 text-xs opacity-60">
                  {t.register.form.passwordHint}
                </p>
              </div>

              <div>
                <label className="block text-sm mb-2">
                  {t.register.form.confirmPassword}
                </label>
                <input
                  type="password"
                  placeholder={t.register.form.placeholders.password}
                  className="w-full rounded-xl border px-4 py-3.5"
                />
              </div>

              {/* Terms */}
              <label className="flex gap-3 text-sm">
                <input type="checkbox" />
                <span>
                  {t.register.form.terms.text}{" "}
                  <Link href="/terms" className="text-accent-clay">
                    {t.register.form.terms.terms}
                  </Link>{" "}
                  {t.register.form.terms.and}{" "}
                  <Link href="/privacy" className="text-accent-clay">
                    {t.register.form.terms.privacy}
                  </Link>
                </span>
              </label>

              <button className="w-full border border-secondary-clay text-secondary-clay px-6 py-2.5 rounded hover:bg-secondary-clay hover:text-white">
                {t.register.form.submit}
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-divider-olive/30" />
              <span className="text-xs opacity-50 uppercase">
                {t.register.form.divider}
              </span>
              <div className="h-px flex-1 bg-divider-olive/30" />
            </div>

            {/* Google */}
            <button className="w-full border px-6 py-3.5 rounded-xl">
              {t.register.form.google}
            </button>

            {/* Footer */}
            <p className="text-center text-sm mt-8">
              {t.register.form.footer.text}{" "}
              <Link href="/login" className="text-accent-clay font-semibold">
                {t.register.form.footer.link}
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </>
  );
}

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getDictionary, Locale } from "@/lib/i18n";
import { getStoredLang } from "@/lib/lang";

export default function LoginClient() {
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang") as Locale | null;

  const lang: Locale =
    urlLang === "en" || urlLang === "de"
      ? urlLang
      : getStoredLang();

  const t = getDictionary(lang);

  return (
    <>
      <Header lang={lang} />

      <main
        className="min-h-[calc(100vh-160px)] flex items-center justify-center
        bg-gradient-to-br from-bg-ivory via-bg-ivory to-primary-sage/5 px-4 py-12"
      >
        <div className="w-full max-w-md">
          {/* Decorative top element */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-accent-clay via-secondary-clay to-primary-sage rounded-full" />
          </div>

          <div
            className="bg-white/80 backdrop-blur-sm rounded-3xl border
            border-divider-olive/20 shadow-xl shadow-primary-sage/5 p-10"
          >
            {/* Title */}
            <div className="text-center mb-10">
              <h1
                className="text-4xl font-serif text-text-charcoal mb-3"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {t.auth.welcomeBack}
              </h1>

              <p className="text-base text-text-charcoal/60 tracking-wide">
                {t.auth.signInSubtitle}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 text-text-charcoal/80 tracking-wide">
                  {t.auth.email}
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border-2 border-divider-olive/30
                    bg-bg-ivory/50 px-4 py-3.5 text-sm transition-all duration-300
                    focus:outline-none focus:border-primary-sage focus:bg-white
                    focus:shadow-md focus:shadow-primary-sage/10"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2 text-text-charcoal/80 tracking-wide">
                  {t.auth.password}
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border-2 border-divider-olive/30
                    bg-bg-ivory/50 px-4 py-3.5 text-sm transition-all duration-300
                    focus:outline-none focus:border-primary-sage focus:bg-white
                    focus:shadow-md focus:shadow-primary-sage/10"
                />
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm pt-1">
                <label className="flex items-center gap-2.5 text-text-charcoal/70 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-divider-olive/40
                      text-primary-sage focus:ring-2 focus:ring-primary-sage/30"
                  />
                  {t.auth.remember}
                </label>

                <Link
                  href={`/forgot-password?lang=${lang}`}
                  className="text-accent-clay font-medium hover:text-secondary-clay transition-colors"
                >
                  {t.auth.forgot}
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full border border-[#B48A5A] text-[#B48A5A]
                  px-6 py-2.5 rounded font-medium text-sm
                  hover:bg-[#B48A5A] hover:text-white
                  transition-colors duration-200"
              >
                {t.auth.signIn}
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-text-charcoal/60 mt-8">
              <Link
                href={`/register?lang=${lang}`}
                className="text-accent-clay font-semibold hover:text-secondary-clay transition-colors"
              >
                {t.auth.createAccount}
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </>
  );
}

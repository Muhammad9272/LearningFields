"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { getDictionary, Locale } from "@/lib/i18n";
import { getStoredLang, setStoredLang } from "@/lib/lang";

interface MobileNavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileNavbar = ({ open, setOpen, calendlyOpen, setCalendlyOpen }: any) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const urlLang = searchParams.get("lang") as Locale | null;
  const lang = urlLang || getStoredLang();
  const t = getDictionary(lang);

  const currentLang = urlLang || getStoredLang();

  const switchLanguage = (newLang: "en" | "de") => {
    setStoredLang(newLang);
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-bg-ivory z-50 shadow-lg transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            className="self-end text-2xl text-charcoal mb-8"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Navigation */}
          <nav className="flex flex-col gap-6 text-lg font-medium text-charcoal">
            <Link href={`/?lang=${lang}`} onClick={() => setOpen(false)} className="hover:text-primary-green transition-colors">
              {t.nav.home}
            </Link>

            <Link href={`/parents?lang=${lang}`} onClick={() => setOpen(false)} className="hover:text-primary-green transition-colors">
              {t.nav.services}
            </Link>

            <Link href={`/schools?lang=${lang}`} onClick={() => setOpen(false)} className="hover:text-primary-green transition-colors">
              {t.nav.schools}
            </Link>

            <Link href={`/about?lang=${lang}`} onClick={() => setOpen(false)} className="hover:text-primary-green transition-colors">
              {t.nav.about}
            </Link>

            <Link href={`/contact?lang=${lang}`} onClick={() => setOpen(false)} className="hover:text-primary-green transition-colors">
              {t.nav.contact}
            </Link>

            <Link
              href={`/login?redirect=/resources&lang=${lang}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 hover:text-primary-green transition-colors"
            >
              {t.nav.resources}
              <i className="fa-solid fa-lock text-xs opacity-60"></i>
            </Link>
          </nav>

          {/* Language Switch */}
          <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-300">
            <button
              type="button"
              onClick={() => switchLanguage("de")}
              title="Switch to German"
              className={`flex items-center gap-1.5 px-3 py-2 rounded transition-all ${
                currentLang === "de"
                  ? "bg-primary-green text-white font-semibold"
                  : "text-charcoal hover:bg-light-wash"
              }`}
            >
              <span className="text-sm font-bold uppercase">DE</span>
            </button>

            <button
              type="button"
              onClick={() => switchLanguage("en")}
              title="Switch to English"
              className={`flex items-center gap-1.5 px-3 py-2 rounded transition-all ${
                currentLang === "en"
                  ? "bg-primary-green text-white font-semibold"
                  : "text-charcoal hover:bg-light-wash"
              }`}
            >
              <span className="text-sm font-bold uppercase">EN</span>
            </button>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              setOpen(false);
              setTimeout(() => setCalendlyOpen(true), 300);
            }}
            className="mt-6 flex items-center justify-center gap-2 bg-[#B48A5A] text-white px-5 py-2.5 rounded-md text-base font-semibold hover:bg-[#9F7E5D] transition-all hover:shadow-md"
          >
            <i className="fa-regular fa-calendar-check"></i>
            {t.header.actions.bookMeeting}
          </button>
        </div>
      </aside>
    </>
  );
};

export default MobileNavbar;

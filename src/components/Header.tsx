"use client";

// components/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getDictionary, Locale } from "@/lib/i18n";
import { getStoredLang, setStoredLang } from "@/lib/lang";
import Image from "next/image";


const Header = ({ lang = "en" }: { lang?: Locale }) => {
  const t = getDictionary(lang);
  const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentLang =
  (searchParams.get("lang") as Locale) || getStoredLang();

  const switchLanguage = (lang: "en" | "de") => {
  setStoredLang(lang);

  const params = new URLSearchParams(searchParams.toString());
  params.set("lang", lang);

  router.push(`${pathname}?${params.toString()}`);
};
  return (
    <>

      <header className="sticky top-0 w-full z-50 bg-bg-ivory/95 backdrop-blur-sm border-b border-[#B48A5A]">
       <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-20 flex justify-between items-center relative">

          
          {/* Logo */}
         <Link href="/" className="flex items-center gap-3 shrink-0">
  <Image
    src="/images/logoo.png"
    alt="The Learning Field"
    width={220}
    height={55}
    className="h-12 md:h-12 w-auto object-contain"
    priority
  />
</Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-charcoal/80">
            <Link
              href="/"
              className={`hover:text-primary-green transition-colors py-2 border-b-2 ${
                pathname === '/' 
                  ? 'border-primary-green text-primary-green' 
                  : 'border-transparent hover:border-primary-green'
              }`}
            >
             {t.nav.home}
            </Link>

            <Link 
              href="/parents" 
              className={`hover:text-primary-green transition-colors py-2 border-b-2 ${
                pathname.startsWith('/parents') 
                  ? 'border-primary-green text-primary-green' 
                  : 'border-transparent hover:border-primary-green'
              }`}
            >
              {t.nav.services}
            </Link>

            <Link 
              href="/schools" 
              className={`hover:text-primary-green transition-colors py-2 border-b-2 ${
                pathname.startsWith('/schools') 
                  ? 'border-primary-green text-primary-green' 
                  : 'border-transparent hover:border-primary-green'
              }`}
            >
              {t.nav.schools}
            </Link>

            <Link 
              href="/about" 
              className={`hover:text-primary-green transition-colors py-2 text-nowrap border-b-2 ${
                pathname.startsWith('/about') 
                  ? 'border-primary-green text-primary-green' 
                  : 'border-transparent hover:border-primary-green'
              }`}
            >
              {t.nav.about}
            </Link>

            <Link 
              href="/contact" 
              className={`hover:text-primary-green transition-colors py-2 border-b-2 ${
                pathname.startsWith('/contact') 
                  ? 'border-primary-green text-primary-green' 
                  : 'border-transparent hover:border-primary-green'
              }`}
            >
              {t.nav.contact}
            </Link>

            <Link href="/login?redirect=/resources">
                {t.nav.resources}
              </Link>

          </div>

          {/* Right Utilities */}
          <div className="flex items-center gap-6">
            {/* Language Switch */}
           <div className="hidden sm:flex items-center gap-3 border-r border-gray-200 pr-6">
      {/* DE */}
      <button
        type="button"
        onClick={() => switchLanguage("de")}
        title="Switch to German"
        className={`flex items-center gap-1.5 transition-opacity
          ${currentLang === "de" ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
      >
        <span
          className={`text-[11px] font-bold uppercase tracking-wider hidden xl:block
            ${currentLang === "de" ? "border-b border-charcoal" : ""}`}
        >
          DE
        </span>
      </button>

      {/* EN */}
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        title="English"
        className={`flex items-center gap-1.5 transition-opacity
          ${currentLang === "en" ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
      >
        <span
          className={`text-[11px] font-bold uppercase tracking-wider hidden xl:block
            ${currentLang === "en" ? "border-b border-charcoal" : ""}`}
        >
          EN
        </span>
      </button>
    </div>
            {/* CTA */}
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#B48A5A] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#9F7E5D] transition-all hover:shadow-md"
            >
              <i className="fa-regular fa-calendar-check"></i>
              {t.header.actions.bookMeeting}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden absolute top-1/2 -translate-y-1/2 mr-2 text-charcoal text-2xl bg-[#B48A5A] p-2 rounded-md"
            style={{ right: "0.5rem" }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            type="button"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </nav>
      </header>

      {/* Mobile Navbar */}
      <MobileNavbar open={mobileOpen} setOpen={setMobileOpen} />
      
    </>
  );
};

export default Header;

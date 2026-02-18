"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getDictionary, Locale } from "@/lib/i18n";
import { CONTAINER_CLASSES } from "@/components/Constants";

type FooterProps = {
  lang?: Locale;
};

const Footer = ({ lang = "en" }: FooterProps) => {
  const t = getDictionary(lang);

  return (
    <footer className="bg-primary-green text-white py-16">
      <div className={`${CONTAINER_CLASSES} grid md:grid-cols-3 gap-12 text-sm`}>
        {/* Brand */}
        <div>
          {/* ✅ Logo only */}
          <Link href={`/?lang=${lang}`} className="inline-flex items-center mb-4">
            <Image
              src="/images/logoo.png"
              alt="The Learning Field"
              width={220}
              height={55}
              className="h-16 md:h-18 w-auto object-contain"
              priority
            />
          </Link>

          <p className="text-white/80 italic">{t.footer.tagline}</p>

          <Link
            href={`/contact?lang=${lang}`}
            className="bg-secondary-clay text-white px-6 py-3 rounded mt-4 inline-block hover:bg-[#9F7E5D] transition"
          >
            {t.footer.cta.getInTouch}
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-medium mb-6">{t.footer.quickLinks.title}</h5>
          <ul className="space-y-3 text-white">
            <li>
              <Link
                href={`/?lang=${lang}`}
                className="hover:text-white transition"
              >
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link
                href={`/parents?lang=${lang}`}
                className="hover:text-white transition"
              >
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link
                href={`/schools?lang=${lang}`}
                className="hover:text-white transition"
              >
                {t.nav.schools}
              </Link>
            </li>
            <li>
              <Link
                href={`/about?lang=${lang}`}
                className="hover:text-white transition"
              >
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link
                href={`/contact?lang=${lang}`}
                className="hover:text-white transition"
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-medium mb-6">{t.footer.contact.title}</h5>
          <ul className="space-y-3 text-white">
            <li>
              <i className="fa-solid fa-envelope mr-2"></i>{" "}
              {t.footer.contact.email}
            </li>
            <li>
              <i className="fa-solid fa-phone mr-2"></i>{" "}
              {t.footer.contact.phone}
            </li>

            {/* Social */}
            <li className="flex gap-5 pt-4 text-xl">
              <a
                href="#"
                aria-label={t.footer.social.facebook}
                className="hover:opacity-75 transition"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="#"
                aria-label={t.footer.social.instagram}
                className="hover:opacity-75 transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label={t.footer.social.linkedin}
                className="hover:opacity-75 transition"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="#"
                aria-label={t.footer.social.twitter}
                className="hover:opacity-75 transition"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label={t.footer.social.youtube}
                className="hover:opacity-75 transition"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

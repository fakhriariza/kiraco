"use client";

import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-black text-beige/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-ivory mb-2">Kira & Co.</h3>
            <p className="text-sm italic font-body text-beige/50 tracking-editorial">
              Cherished moments, beloved memories
            </p>
            <p className="mt-6 text-sm leading-relaxed font-body max-w-xs">
              Intimate event organizer yang berfokus pada penciptaan momen personal,
              tenang, dan bermakna.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm tracking-wide text-ivory mb-6 uppercase">
              Navigasi
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Beranda" },
                { href: "/services", label: "Layanan" },
                { href: "/about", label: "Tentang Kami" },
                { href: "/booking", label: "Konsultasi" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body hover:text-ivory transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm tracking-wide text-ivory mb-6 uppercase">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+6281285108188"
                className="flex items-center gap-3 text-sm font-body hover:text-ivory transition-colors"
              >
                <Phone size={14} className="text-rose-gold" />
                +62 812-8510-8188
              </a>
              <a
                href="mailto:hello@kiraandco.com"
                className="flex items-center gap-3 text-sm font-body hover:text-ivory transition-colors"
              >
                <Mail size={14} className="text-rose-gold" />
                hello@kiraandco.com
              </a>
              <a
                href="https://instagram.com/bykiraandco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-body hover:text-ivory transition-colors"
              >
                <Instagram size={14} className="text-rose-gold" />
                @bykiraandco
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-taupe/30 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-beige/40">
            &copy; {new Date().getFullYear()} Kira & Co. All rights reserved.
          </p>
          <p className="text-xs font-body text-beige/40 italic">
            Jakarta, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}

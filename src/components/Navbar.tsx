"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/venue", label: "Venue" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/booking", label: "Konsultasi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_rgba(146,131,119,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span
              className={`font-serif text-xl tracking-wide transition-colors duration-500 ${
                (!scrolled && isHomePage) && !isOpen ? "text-white" : "text-ink-black"
              }`}
            >
              Kira & Co.
            </span>
            <span
              className={`text-[10px] tracking-editorial font-body italic mt-[-2px] transition-colors duration-500 opacity-80 group-hover:opacity-100 ${
                (!scrolled && isHomePage) && !isOpen ? "text-white/80" : "text-taupe"
              }`}
            >
              Cherished moments, beloved memories
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-editorial hover:opacity-100 transition-opacity duration-300 font-body group drop-shadow-sm ${
                  !scrolled && isHomePage
                    ? "text-white hover:text-ivory"
                    : "text-charcoal-grey hover:text-ink-black"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    !scrolled && isHomePage ? "bg-white" : "bg-taupe"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              (!scrolled && isHomePage) && !isOpen ? "text-white" : "text-ink-black"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-ivory/98 backdrop-blur-md shadow-lg border-t border-beige/50 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base tracking-editorial text-charcoal-grey hover:text-ink-black transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

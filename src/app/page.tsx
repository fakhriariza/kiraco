"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Clock, Eye } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionDivider from "@/components/SectionDivider";

const services = [
  {
    title: "Romantic Dinner & Private Dining",
    description:
      "Malam yang dikurasi dengan penuh perhatian — dari menu, pencahayaan, hingga suasana yang membuat momen terasa hanya milik Anda berdua.",
    icon: Heart,
  },
  {
    title: "Proposal & Engagement",
    description:
      "Momen lamaran yang dirancang dengan ketenangannya sendiri. Setiap detail dirawat agar Anda bisa hadir sepenuhnya di momen itu.",
    icon: Sparkles,
  },
  {
    title: "Anniversary & Milestones",
    description:
      "Merayakan perjalanan dengan cara yang bermakna. Bukan tentang kemewahan, tetapi tentang rasa yang utuh dan personal.",
    icon: Clock,
  },
  {
    title: "Custom Curated Experiences",
    description:
      "Setiap momen punya cerita berbeda. Kami merancang pengalaman yang sepenuhnya disesuaikan dengan keinginan dan karakter Anda.",
    icon: Eye,
  },
];

const values = [
  {
    title: "Intimate",
    desc: "Setiap acara dirancang secara personal, tidak massal, dan tidak generik.",
  },
  {
    title: "Intentional",
    desc: "Setiap detail memiliki alasan. Tidak ada elemen yang hadir hanya sebagai dekorasi.",
  },
  {
    title: "Calm",
    desc: "Proses yang rapi, komunikasi jelas, dan pengalaman yang menenangkan.",
  },
  {
    title: "Thoughtful",
    desc: "Kepekaan terhadap emosi, konteks, dan momen yang sedang dirayakan.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-beige/20 to-ivory" />

        {/* Subtle decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-warm-sand-rose/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-blush/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-8">
              Intimate Event Organizer · Jakarta
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-ink-black leading-tight tracking-tight"
          >
            Cherished moments,
            <br />
            <span className="italic text-taupe">beloved memories</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <SectionDivider className="max-w-32 mx-auto my-8" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base md:text-lg text-charcoal-grey font-body leading-relaxed max-w-2xl mx-auto"
          >
            Ada momen yang ingin dirayakan dengan pelan.
            <br className="hidden md:block" />
            Bukan karena tidak istimewa — tetapi karena terlalu penting
            <br className="hidden md:block" />
            untuk dibuat terburu-buru.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/booking"
              className="group flex items-center gap-3 px-8 py-4 bg-ink-black text-ivory text-sm tracking-editorial uppercase font-body hover:bg-charcoal-grey transition-colors duration-300"
            >
              Mulai Konsultasi
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 text-sm tracking-editorial uppercase font-body text-taupe hover:text-ink-black transition-colors duration-300 border-b border-transparent hover:border-taupe"
            >
              Lihat Layanan
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-taupe/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* Brand Statement */}
      <section className="py-28 md:py-36 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-6">
              Filosofi Kami
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-black leading-relaxed italic">
              &ldquo;Kami tidak menjual skala.
              <br />
              Kami menjual rasa.&rdquo;
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.3}>
            <SectionDivider className="max-w-24 mx-auto my-8" />
            <p className="text-charcoal-grey font-body leading-relaxed max-w-xl mx-auto">
              Kira & Co. bukan sekadar penyedia acara, tetapi pendamping yang
              merawat setiap detail agar klien bisa benar-benar hadir di
              momennya sendiri.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-beige/30">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
                Nilai Kami
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink-black">
                Brand Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="bg-ivory/80 p-8 border border-beige/50 hover:border-taupe/20 transition-colors duration-500">
                  <h3 className="font-serif text-lg text-ink-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-charcoal-grey font-body leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
                Layanan
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink-black">
                What We Do
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-beige/50">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="bg-ivory p-10 group hover:bg-beige/10 transition-colors duration-500">
                  <service.icon
                    size={20}
                    className="text-rose-gold mb-5 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <h3 className="font-serif text-lg text-ink-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal-grey font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-14">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm tracking-editorial text-taupe hover:text-ink-black transition-colors font-body"
              >
                Lihat semua layanan
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 md:py-32 bg-ink-black text-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-6">
              Pendekatan Kami
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-relaxed text-beige">
              We don&apos;t just organize events.
              <br />
              We help people feel calm
              <br />
              in moments that matter.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="h-px bg-gradient-to-r from-transparent via-taupe/30 to-transparent max-w-24 mx-auto my-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
              {[
                "Kurasi konsep yang matang dan personal",
                "Proses komunikasi yang ringkas dan jelas",
                "Pengambilan keputusan yang disederhanakan",
                "Eksekusi yang rapi dan penuh perhatian",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-rose-gold mt-2.5 shrink-0" />
                  <p className="text-sm text-beige/80 font-body leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-36 bg-ivory relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-warm-sand-rose/8 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-6">
              Mulai Merencanakan
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="font-serif text-3xl md:text-4xl text-ink-black leading-snug mb-6">
              Ada momen yang ingin
              <br />
              <span className="italic text-taupe">Anda rayakan?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-charcoal-grey font-body leading-relaxed mb-10 max-w-lg mx-auto">
              Ceritakan kepada kami. Kami akan menemani Anda dari ide pertama
              hingga kenangan terakhir malam itu.
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <Link
              href="/booking"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-ink-black text-ivory text-sm tracking-editorial uppercase font-body hover:bg-charcoal-grey transition-colors duration-300"
            >
              Mulai Konsultasi
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

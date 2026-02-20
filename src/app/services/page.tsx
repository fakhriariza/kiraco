"use client";

import Link from "next/link";
import { ArrowRight, Heart, Sparkles, Clock, Users, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionDivider from "@/components/SectionDivider";

const services = [
  {
    icon: Heart,
    title: "Romantic Dinner & Private Dining",
    tagline: "Malam yang hanya milik Anda berdua.",
    description:
      "Kami mengurasi setiap detail makan malam — dari pemilihan venue yang tepat, menu yang disesuaikan, pencahayaan yang hangat, hingga sentuhan personal yang membuat momen terasa istimewa tanpa harus terasa berlebihan.",
    includes: [
      "Konsultasi konsep dan mood",
      "Kurasi venue & private dining",
      "Koordinasi menu khusus",
      "Dekorasi meja & ambiance",
      "Koordinasi musik/entertainment",
      "On-site management",
    ],
  },
  {
    icon: Sparkles,
    title: "Proposal & Engagement Moments",
    tagline: "Momen yang direncanakan, bukan ditinggalkan pada kebetulan.",
    description:
      "Lamaran adalah momen yang tidak bisa diulang. Kami merancang setiap detail — dari skenario, timing, hingga elemen kejutan — agar Anda bisa fokus pada satu hal yang paling penting: perasaan Anda saat itu.",
    includes: [
      "Perencanaan skenario lengkap",
      "Scouting dan negosiasi venue",
      "Koordinasi fotografer/videografer",
      "Setup dekorasi & instalasi",
      "Koordinasi surprise elements",
      "Full execution & standby team",
    ],
  },
  {
    icon: Clock,
    title: "Anniversary & Milestone Celebrations",
    tagline: "Merayakan perjalanan dengan rasa yang utuh.",
    description:
      "Setiap anniversary punya cerita berbeda. Kami membantu Anda merayakannya dengan cara yang mencerminkan perjalanan Anda — personal, bermakna, dan dirancang dengan ketenangan.",
    includes: [
      "Konsultasi personal & storytelling",
      "Pemilihan venue yang sesuai karakter",
      "Kurasi hadiah & personal touches",
      "Dekorasi tematik",
      "Koordinasi F&B",
      "Day-of coordination",
    ],
  },
  {
    icon: Users,
    title: "Intimate Private Gatherings",
    tagline: "Perayaan kecil, rasa yang besar.",
    description:
      "Untuk momen yang dirayakan bersama orang-orang terdekat — ulang tahun, reunions, atau sekadar gathering yang bermakna. Kami mengelola semuanya agar Anda bisa menikmati waktu bersama.",
    includes: [
      "Perencanaan konsep acara",
      "Venue sourcing & management",
      "Koordinasi catering & F&B",
      "Dekorasi & styling",
      "Entertainment & activities",
      "Full event management",
    ],
  },
  {
    icon: Star,
    title: "Custom Curated Experiences",
    tagline: "Karena tidak semua momen cocok masuk paket.",
    description:
      "Setiap cerita itu unik. Jika Anda memiliki ide atau momen yang tidak termasuk dalam kategori di atas, ceritakan kepada kami. Kami akan merancang pengalaman yang sepenuhnya disesuaikan.",
    includes: [
      "Discovery session mendalam",
      "Concept development",
      "Vendor curation",
      "Full production & setup",
      "On-site management",
      "Post-event documentation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
              Layanan Kami
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-5xl text-ink-black mb-6">
              What We Do
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <SectionDivider className="max-w-24 mx-auto mb-8" />
            <p className="text-charcoal-grey font-body leading-relaxed max-w-xl mx-auto">
              Kira & Co. menyediakan layanan perencanaan dan kurasi acara intim.
              Kami bekerja secara vendor-agnostic, memilih mitra terbaik yang
              sesuai dengan karakter acara dan kebutuhan Anda.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.1}>
              <div
                className={`py-16 ${
                  i < services.length - 1
                    ? "border-b border-beige/50"
                    : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                  {/* Left */}
                  <div className="lg:col-span-2">
                    <service.icon
                      size={22}
                      className="text-rose-gold mb-4 opacity-70"
                    />
                    <h2 className="font-serif text-xl md:text-2xl text-ink-black mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm italic text-taupe font-body">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-3">
                    <p className="text-charcoal-grey font-body leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div>
                      <p className="text-xs tracking-editorial uppercase text-taupe mb-4 font-body">
                        Yang Termasuk
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.includes.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5"
                          >
                            <div className="w-1 h-1 rounded-full bg-rose-gold mt-2 shrink-0" />
                            <span className="text-sm text-charcoal-grey font-body">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-beige/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl text-ink-black mb-4">
              Siap merencanakan momen Anda?
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-charcoal-grey font-body leading-relaxed mb-10 max-w-lg mx-auto">
              Ceritakan momen yang ingin Anda rayakan. Kami akan membantu
              merancang pengalaman yang sesuai dengan keinginan dan karakter Anda.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
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

"use client";

import { Phone, Mail, Instagram } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionDivider from "@/components/SectionDivider";
import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
              Konsultasi
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-5xl text-ink-black mb-6">
              Ceritakan Momen Anda
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <SectionDivider className="max-w-24 mx-auto mb-8" />
            <p className="text-charcoal-grey font-body leading-relaxed max-w-xl mx-auto">
              Isi formulir di bawah ini dan ceritakan momen yang ingin Anda
              rayakan. Tim kami akan menghubungi Anda untuk berdiskusi lebih
              lanjut.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <FadeIn direction="left" className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <div className="space-y-8">
                  <div>
                    <p className="text-xs tracking-editorial uppercase text-taupe font-body mb-3">
                      Proses Kami
                    </p>
                    <div className="space-y-4">
                      {[
                        { step: "01", text: "Isi formulir konsultasi" },
                        { step: "02", text: "Tim kami menghubungi Anda" },
                        { step: "03", text: "Diskusi konsep & budget" },
                        { step: "04", text: "Proposal & kurasi detail" },
                        { step: "05", text: "Eksekusi momen Anda" },
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-3">
                          <span className="text-xs text-rose-gold font-body mt-0.5">
                            {item.step}
                          </span>
                          <p className="text-sm text-charcoal-grey font-body leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-beige/50" />

                  <div>
                    <p className="text-xs tracking-editorial uppercase text-taupe font-body mb-3">
                      Hubungi Langsung
                    </p>
                    <div className="space-y-3">
                      <a
                        href="https://wa.me/6281285108188"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-charcoal-grey font-body hover:text-ink-black transition-colors"
                      >
                        <Phone size={13} className="text-rose-gold" />
                        +62 812-8510-8188
                      </a>
                      <a
                        href="mailto:hello@kiraandco.com"
                        className="flex items-center gap-2 text-sm text-charcoal-grey font-body hover:text-ink-black transition-colors"
                      >
                        <Mail size={13} className="text-rose-gold" />
                        hello@kiraandco.com
                      </a>
                      <a
                        href="https://instagram.com/bykiraandco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-charcoal-grey font-body hover:text-ink-black transition-colors"
                      >
                        <Instagram size={13} className="text-rose-gold" />
                        @bykiraandco
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.15} className="lg:col-span-3">
              <div className="bg-white/50 border border-beige/40 p-8 md:p-12">
                <BookingForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

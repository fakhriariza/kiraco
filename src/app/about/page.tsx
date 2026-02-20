"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionDivider from "@/components/SectionDivider";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
              Tentang Kami
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-5xl text-ink-black mb-6">
              Kira & Co.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <SectionDivider className="max-w-24 mx-auto mb-8" />
            <p className="text-lg italic text-taupe font-body">
              Cherished moments, beloved memories
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-6">
              Brand Overview
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-charcoal-grey font-body leading-relaxed">
              <p>
                Kira & Co. adalah intimate event organizer yang berfokus pada
                penciptaan momen personal, tenang, dan bermakna untuk pasangan dan
                klien terpilih. Kami hadir untuk membersamai klien dalam merancang
                pengalaman yang tidak hanya indah secara visual, tetapi juga
                terasa secara emosional.
              </p>
              <p>
                Berangkat dari kebutuhan akan perayaan yang lebih intim dan tidak
                hiruk-pikuk, Kira & Co. dirancang untuk klien yang ingin
                merayakan momen penting tanpa harus terbebani oleh detail teknis,
                keputusan vendor, dan tekanan logistik.
              </p>
              <p className="italic text-taupe">
                Kami percaya bahwa momen yang paling berharga seringkali lahir
                dari perhatian kecil yang dirawat dengan hati.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-beige/30">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-6">
              A Note from the Founder
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-ivory/80 p-8 md:p-12 border border-beige/50">
              <div className="space-y-5 text-charcoal-grey font-body leading-relaxed">
                <p className="italic text-ink-black">
                  Ada momen yang ingin dirayakan dengan cara yang sederhana. Bukan
                  karena tidak ingin terlihat istimewa, tetapi karena momen itu
                  terlalu penting untuk dibuat terburu-buru.
                </p>

                <p>
                  Kira & Co. lahir dari pengalaman pribadi saya. Saat menyiapkan
                  sebuah perayaan yang intim, saya memilih untuk mengurus
                  semuanya sendiri — mencari tempat, menghubungi vendor satu per
                  satu, menyiapkan hadiah, hingga menyesuaikan detail kecil yang
                  sering kali terlihat sepele.
                </p>

                <p>
                  Di proses itu, saya menyadari betapa melelahkannya menjaga
                  momen tetap terasa hangat, ketika pikiran justru dipenuhi oleh
                  urusan teknis.
                </p>

                <p className="text-taupe italic">
                  Beberapa kali venue harus diganti. Detail berubah. Ekspektasi
                  bergeser. Dan di tengah semua itu, rasa yang seharusnya hadir
                  justru perlahan tergeser oleh keribetan.
                </p>

                <p>
                  Dari pengalaman itulah Kira & Co. dibangun. Bukan sebagai
                  penyedia acara, tetapi sebagai pendamping yang merawat setiap
                  detail agar klien bisa benar-benar hadir di momennya sendiri.
                </p>

                <p>
                  Kami percaya, perayaan tidak harus besar untuk terasa bermakna.
                  Yang terpenting adalah ketenangan, kejelasan, dan perhatian
                  pada hal-hal kecil.
                </p>

                <div className="pt-6 border-t border-beige/50 mt-8">
                  <p className="font-serif text-ink-black text-lg">Maleo</p>
                  <p className="text-sm text-taupe">CEO, Kira & Co.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
                  Visi
                </p>
                <h3 className="font-serif text-xl text-ink-black mb-4">
                  Vision
                </h3>
                <p className="text-charcoal-grey font-body leading-relaxed">
                  Menjadi intimate event organizer paling tepercaya di Jakarta,
                  dikenal karena ketenangan proses, kepekaan rasa, dan pengalaman
                  yang berkesan secara emosional.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
                  Misi
                </p>
                <h3 className="font-serif text-xl text-ink-black mb-4">
                  Mission
                </h3>
                <div className="space-y-3">
                  {[
                    "Membantu klien merayakan momen penting dengan tenang dan penuh kehadiran.",
                    "Menyederhanakan proses perencanaan tanpa mengurangi kualitas dan makna.",
                    "Menghadirkan pengalaman yang terasa personal, hangat, dan curated.",
                    "Menjadi partner, bukan sekadar penyelenggara acara.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-rose-gold mt-2.5 shrink-0" />
                      <p className="text-sm text-charcoal-grey font-body leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Brand Personality */}
      <section className="py-20 bg-ink-black text-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
              Brand Personality
            </p>
            <h2 className="font-serif text-2xl md:text-3xl mb-12">
              Karakter Kami
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              {[
                "Tenang",
                "Hangat",
                "Dewasa",
                "Editorial",
                "Refined",
                "Emotionally Grounded",
              ].map((trait) => (
                <span
                  key={trait}
                  className="px-6 py-3 border border-taupe/30 text-sm tracking-editorial text-beige/80 font-body"
                >
                  {trait}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-beige/60 font-body italic max-w-xl mx-auto leading-relaxed">
              Kira & Co. tidak berteriak, tidak berlebihan, dan tidak mengejar
              kesan besar. Brand ini hadir dengan kehadiran yang lembut namun
              berkarakter.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Kira & Co */}
      <section className="py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
              Mengapa Memilih Kami
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-ink-black mb-12">
              Why Kira & Co.
            </h2>
          </FadeIn>

          <div className="space-y-6 max-w-xl mx-auto">
            {[
              "Fokus eksklusif pada intimate scale events",
              "Proses yang tenang dan tidak membebani klien",
              "Kurasi vendor yang selektif",
              "Pendekatan emosional, bukan sekadar visual",
              "Partner yang hadir dari awal hingga akhir",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="py-4 border-b border-beige/40 text-left">
                  <p className="text-charcoal-grey font-body">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="mt-12 font-serif text-lg italic text-taupe">
              Kami tidak berusaha menjadi yang terbesar.
              <br />
              Kami memilih untuk menjadi yang paling dirasakan.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-beige/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl text-ink-black mb-6">
              Mari berkenalan lebih dekat
            </h2>
            <p className="text-charcoal-grey font-body leading-relaxed mb-10 max-w-md mx-auto">
              Ceritakan momen Anda, dan kami akan menemani prosesnya dengan
              tenang.
            </p>
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

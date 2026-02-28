import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionDivider from "@/components/SectionDivider";
import { RESTAURANTS } from "@/data/restaurants";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Venue - Kira & Co.",
  description: "Eksplorasi pilihan venue restoran terbaik untuk momen istimewa Anda.",
};

export default function VenuePage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
              Venue Pilihan
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-5xl text-ink-black mb-6">
              Restoran & Venue Terbaik
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <SectionDivider className="max-w-24 mx-auto mb-8" />
            <p className="text-charcoal-grey font-body leading-relaxed max-w-xl mx-auto">
              Temukan tempat yang sempurna untuk perayaan Anda, dari fine-dining romantis hingga perayaan keluarga yang hangat.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 bg-ivory">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESTAURANTS.map((resto, i) => (
              <FadeIn key={resto.id} delay={0.05 * (i + 1)}>
                <Link
                  href={`/venue/${resto.id}`}
                  className="group block relative w-full overflow-hidden bg-white/50 border border-beige/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-rose-gold/50"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-beige/30">
                    <img
                      src={resto.image}
                      alt={resto.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl text-ink-black mb-1 group-hover:text-rose-gold transition-colors">
                      {resto.name}
                    </h3>
                    <p className="font-body text-xs text-rose-gold tracking-wide mb-3">
                      {resto.venue}
                    </p>
                    <p className="font-body text-[13px] text-charcoal-grey leading-relaxed line-clamp-2 mb-4">
                      {resto.description}
                    </p>
                    
                    <div className="flex items-center text-[10px] tracking-[0.1em] uppercase text-taupe group-hover:text-ink-black transition-colors font-body font-medium">
                      Lebih Lanjut 
                      <ArrowRight size={12} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

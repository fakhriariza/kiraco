import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import SectionDivider from "@/components/SectionDivider";
import { RESTAURANTS } from "@/data/restaurants";
import { ArrowLeft, MapPin, ChefHat, CheckSquare } from "lucide-react";

export function generateMetadata({ params }: { params: { id: string } }) {
  const venue = RESTAURANTS.find((r) => r.id === params.id);
  if (!venue) return { title: "Venue Not Found" };
  return { title: `${venue.name} - Venue - Kira & Co.` };
}

export function generateStaticParams() {
  return RESTAURANTS.map((r) => ({ id: r.id }));
}

export default function VenueDetailPage({ params }: { params: { id: string } }) {
  const venue = RESTAURANTS.find((r) => r.id === params.id);

  if (!venue) {
    notFound();
  }

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <Link
              href="/venue"
              className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase text-taupe font-body hover:text-ink-black transition-colors mb-10"
            >
              <ArrowLeft size={12} className="mr-2" />
              Kembali ke Venue
            </Link>
          </FadeIn>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Image Side */}
            <FadeIn delay={0.1} className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/5] bg-beige/30 p-2 md:p-3 shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-beige/40">
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 pt-4">
              <FadeIn delay={0.15}>
                <h1 className="font-serif text-3xl md:text-5xl text-ink-black mb-4">
                  {venue.name}
                </h1>
                <p className="font-body text-sm text-rose-gold tracking-wide mb-8">
                  {venue.venue} · {venue.floor}
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <SectionDivider className="max-w-16 mb-8" />
                <p className="text-charcoal-grey font-body leading-relaxed mb-10 text-[15px]">
                  {venue.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <div className="flex flex-col gap-2 p-5 bg-white/50 border border-beige/40">
                    <div className="flex items-center gap-2 mb-1 text-ink-black">
                      <ChefHat size={16} className="text-rose-gold" />
                      <span className="font-serif text-lg tracking-wide">Cuisine</span>
                    </div>
                    <span className="font-body text-xs text-charcoal-grey uppercase tracking-wider">
                      {venue.cuisine}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-2 p-5 bg-white/50 border border-beige/40">
                    <div className="flex items-center gap-2 mb-1 text-ink-black">
                      <MapPin size={16} className="text-rose-gold" />
                      <span className="font-serif text-lg tracking-wide">Lokasi</span>
                    </div>
                    <span className="font-body text-xs text-charcoal-grey uppercase tracking-wider">
                      {venue.venue}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-ink-black text-white gap-6">
                  <div>
                    <span className="block font-body text-[10px] tracking-[0.2em] uppercase text-taupe mb-2">
                      Estimasi Harga
                    </span>
                    <span className="font-serif text-xl">
                      {venue.priceRange}
                    </span>
                  </div>
                  <Link
                    href={`/booking`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ink-black hover:bg-rose-gold hover:text-white transition-colors duration-300 font-body text-xs font-semibold tracking-wider uppercase shrink-0"
                  >
                    Konsultasi Venue
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState, useRef } from "react";
import {
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Send,
  Check,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionDivider from "@/components/SectionDivider";

// ─── CONFIG ─────────────────────────────────────────────────
// Ganti 2 value di bawah ini dengan Telegram Bot Token & Chat ID kamu
const WA_NUMBER = "6281285108188";
const TELEGRAM_BOT_TOKEN = "8795481050:AAEZumOQ6oqup5yDKHtJn41MVwmq-QyhDow";
const TELEGRAM_CHAT_ID = "-5100061563";

import { RESTAURANTS } from "@/data/restaurants";

const EVENT_TYPES = [
  "Anniversary Dinner",
  "Birthday Celebration",
  "Proposal / Engagement",
  "Romantic Dinner",
  "Corporate Dinner",
  "Family Gathering",
  "Lainnya",
];

const GUEST_COUNTS = [
  "2 orang",
  "4–6 orang",
  "7–10 orang",
  "10–15 orang",
  "15+ orang",
];

// ═════════════════════════════════════════════════════════════
export default function BookingPage() {
  const [activeTab, setActiveTab] = useState<"konsultasi" | "booking">(
    "konsultasi",
  );

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-taupe font-body mb-4">
              Reservasi
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-5xl text-ink-black mb-6">
              Wujudkan Momen Istimewa
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <SectionDivider className="max-w-24 mx-auto mb-8" />
            <p className="text-charcoal-grey font-body leading-relaxed max-w-xl mx-auto">
              Konsultasikan ide momen Anda atau langsung booking venue impian di
              restoran-restoran terbaik Jakarta.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-ivory border-b border-beige/50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn delay={0.25}>
            <div className="flex justify-center gap-2">
              {(["konsultasi", "booking"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    relative px-8 py-3 font-body text-[11px] tracking-[0.25em] uppercase
                    border-none bg-transparent cursor-pointer transition-colors duration-300
                    ${activeTab === tab ? "text-ink-black" : "text-taupe hover:text-ink-black"}
                  `}
                >
                  {tab === "konsultasi" ? "Konsultasi" : "Booking Venue"}
                  <span
                    className={`
                      absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-rose-gold
                      transition-all duration-500 ease-out
                      ${activeTab === tab ? "w-full" : "w-0"}
                    `}
                  />
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-ivory">
        {activeTab === "konsultasi" ? <KonsultasiTab /> : <BookingTab />}
      </section>
    </>
  );
}

// ═════════════════════════════════════════════════════════════
// TAB 1: KONSULTASI → WhatsApp
// ═════════════════════════════════════════════════════════════
function KonsultasiTab() {
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Halo Kira & Co! Saya tertarik untuk konsultasi tentang event planning. Boleh diskusi lebih lanjut?",
  )}`;

  return (
    <div className="max-w-2xl mx-auto px-6 pt-16">
      <FadeIn>
        <div className="bg-white/50 border border-beige/40 p-8 md:p-14 text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-rose-gold/10 flex items-center justify-center mx-auto mb-7">
            <MessageCircle
              size={28}
              className="text-rose-gold"
              strokeWidth={1.5}
            />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-ink-black mb-4">
            Ceritakan Momen Anda
          </h2>
          <p className="font-body text-sm text-charcoal-grey leading-relaxed max-w-md mx-auto mb-8">
            Ingin berdiskusi tentang konsep, budget, atau detail acara? Tim kami
            siap membantu Anda merencanakan setiap detail melalui WhatsApp.
          </p>

          <div className="h-px bg-beige/50 w-8 mx-auto mb-8" />

          {/* Steps */}
          <div className="flex flex-wrap justify-center gap-5 mb-10">
            {[
              { num: "01", text: "Chat via WhatsApp" },
              { num: "02", text: "Diskusi konsep & budget" },
              { num: "03", text: "Proposal & kurasi" },
              { num: "04", text: "Eksekusi momen Anda" },
            ].map((step) => (
              <div key={step.num} className="flex items-center gap-2">
                <span className="text-[11px] text-rose-gold font-body font-semibold">
                  {step.num}
                </span>
                <span className="text-[13px] text-charcoal-grey font-body">
                  {step.text}
                </span>
              </div>
            ))}
          </div>

          {/* WA Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 px-10 py-[18px]
              bg-[#25D366] hover:bg-[#20BD5A] text-white
              font-body text-sm font-semibold tracking-wide
              transition-all duration-300 hover:-translate-y-0.5
              hover:shadow-[0_6px_20px_rgba(37,211,102,0.3)]
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat via WhatsApp
          </a>

          <p className="font-body text-xs text-taupe mt-5">
            Respon cepat · Senin – Sabtu · 09:00 – 21:00
          </p>
        </div>
      </FadeIn>

      {/* Contact */}
      <FadeIn delay={0.15}>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
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
      </FadeIn>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
// TAB 2: BOOKING → pilih resto + form → Telegram
// ═════════════════════════════════════════════════════════════
function BookingTab() {
  const [selectedResto, setSelectedResto] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [toastMsg, setToastMsg] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleRestoSelect = (id: string) => {
    setSelectedResto(id);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMsg({ text, type });
    setTimeout(() => setToastMsg(null), 4000);
  };

  const sendToTelegram = async () => {
    const resto = RESTAURANTS.find((r) => r.id === selectedResto);
    const message = `
🎉 *BOOKING BARU — Kira & Co*

👤 *Nama:* ${formData.name}
📱 *Telepon:* ${formData.phone}
📧 *Email:* ${formData.email || "–"}

🍽️ *Restoran:* ${resto?.name} — ${resto?.venue}
🎊 *Jenis Acara:* ${formData.eventType}
📅 *Tanggal:* ${formData.date}
⏰ *Waktu:* ${formData.time}
👥 *Jumlah Tamu:* ${formData.guests}

📝 *Catatan:*
${formData.notes || "–"}

───────────────
_Dikirim dari website kiraandco.com_
    `.trim();

    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      },
    );

    if (!res.ok) throw new Error("Telegram send failed");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedResto) {
      showToast("Pilih restoran terlebih dahulu", "error");
      return;
    }

    setSubmitting(true);
    try {
      await sendToTelegram();
      showToast(
        "Booking berhasil dikirim! Tim kami akan segera menghubungi Anda ✨",
      );
      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        date: "",
        time: "",
        guests: "",
        notes: "",
      });
      setSelectedResto(null);
    } catch {
      showToast(
        "Gagal mengirim. Coba lagi atau hubungi kami via WhatsApp.",
        "error",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const selectedRestoData = RESTAURANTS.find((r) => r.id === selectedResto);

  return (
    <div className="max-w-[960px] mx-auto px-6 pt-12">
      {/* Restaurant Selection */}
      <FadeIn>
        <div className="text-center mb-8">
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-taupe mb-2">
            Pilih Venue
          </p>
          <h2 className="font-serif text-2xl md:text-[32px] text-ink-black">
            Restoran Pilihan Kami
          </h2>
        </div>
      </FadeIn>

      {/* Resto Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {RESTAURANTS.map((resto, i) => (
          <FadeIn key={resto.id} delay={0.05 * (i + 1)}>
            <button
              type="button"
              onClick={() => handleRestoSelect(resto.id)}
              className={`
                group relative w-full text-left overflow-hidden
                bg-white/50 border transition-all duration-500 ease-out
                hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
                ${
                  selectedResto === resto.id
                    ? "border-rose-gold shadow-[0_0_0_1px] shadow-rose-gold/50"
                    : "border-beige/40 hover:border-rose-gold/50"
                }
              `}
            >
              {/* Selected check */}
              <div
                className={`
                  absolute top-3 right-3 z-10 w-5 h-5 rounded-full bg-rose-gold
                  flex items-center justify-center transition-all duration-300
                  ${
                    selectedResto === resto.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }
                `}
              >
                <Check size={12} className="text-white" strokeWidth={3} />
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-beige/30">
                <img
                  src={resto.image}
                  alt={resto.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Fallback — visible when image fails */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                  <span className="font-serif text-lg text-taupe/50">
                    {resto.name}
                  </span>
                  <span className="font-body text-[10px] text-taupe/40">
                    tambahkan foto
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-serif text-xl text-ink-black mb-1">
                  {resto.name}
                </h3>
                <p className="font-body text-xs text-rose-gold tracking-wide mb-3">
                  {resto.venue} · {resto.floor}
                </p>
                <p className="font-body text-[13px] text-charcoal-grey leading-relaxed mb-3">
                  {resto.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-beige/30">
                  <span className="font-body text-[10px] tracking-[0.1em] uppercase text-taupe">
                    {resto.cuisine}
                  </span>
                  <span className="font-body text-xs text-charcoal-grey">
                    {resto.priceRange}
                  </span>
                </div>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      {/* ─── Booking Form ─── */}
      <div ref={formRef} className="scroll-mt-8">
        <div className="h-px bg-gradient-to-r from-transparent via-beige to-transparent w-16 mx-auto mb-10" />

        {/* Selected badge */}
        {selectedRestoData && (
          <FadeIn>
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-rose-gold/10">
                <Check size={14} className="text-rose-gold" />
                <span className="font-body text-[13px] text-ink-black">
                  <strong>{selectedRestoData.name}</strong> —{" "}
                  {selectedRestoData.venue}
                </span>
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="max-w-[640px] mx-auto bg-white/50 border border-beige/40 p-8 md:p-12"
          >
            <h3 className="font-serif text-2xl text-ink-black mb-1">
              Detail Booking
            </h3>
            <p className="font-body text-[13px] text-taupe mb-8">
              Isi detail di bawah ini, tim kami akan konfirmasi via Telegram.
            </p>

            <div className="flex flex-col gap-5">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Nama Lengkap" required>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    required
                    className="w-full px-4 py-3.5 font-body text-sm border border-beige bg-white text-ink-black placeholder-taupe outline-none focus:border-rose-gold transition-colors"
                  />
                </FormField>
                <FormField label="No. Telepon" required>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 8xx-xxxx-xxxx"
                    required
                    className="w-full px-4 py-3.5 font-body text-sm border border-beige bg-white text-ink-black placeholder-taupe outline-none focus:border-rose-gold transition-colors"
                  />
                </FormField>
              </div>

              {/* Email */}
              <FormField label="Email">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@contoh.com"
                  className="w-full px-4 py-3.5 font-body text-sm border border-beige bg-white text-ink-black placeholder-taupe outline-none focus:border-rose-gold transition-colors"
                />
              </FormField>

              {/* Event Type */}
              <FormField label="Jenis Acara" required>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 font-body text-sm border border-beige bg-white text-ink-black outline-none focus:border-rose-gold transition-colors appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23A09486' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: 40,
                  }}
                >
                  <option value="">Pilih jenis acara</option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </FormField>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Tanggal Acara" required>
                  <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 font-body text-sm border border-beige bg-white text-ink-black outline-none focus:border-rose-gold transition-colors"
                  />
                </FormField>
                <FormField label="Waktu" required>
                  <input
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 font-body text-sm border border-beige bg-white text-ink-black outline-none focus:border-rose-gold transition-colors"
                  />
                </FormField>
              </div>

              {/* Guests */}
              <FormField label="Jumlah Tamu" required>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 font-body text-sm border border-beige bg-white text-ink-black outline-none focus:border-rose-gold transition-colors appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23A09486' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: 40,
                  }}
                >
                  <option value="">Pilih jumlah tamu</option>
                  {GUEST_COUNTS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </FormField>

              {/* Notes */}
              <FormField label="Catatan Tambahan">
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Dekorasi khusus, preferensi menu, kejutan, dll..."
                  className="w-full px-4 py-3.5 font-body text-sm border border-beige bg-white text-ink-black placeholder-taupe outline-none focus:border-rose-gold transition-colors resize-y min-h-[100px]"
                />
              </FormField>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting || !selectedResto}
                className="
                  mt-2 w-full flex items-center justify-center gap-2.5
                  px-8 py-4 bg-ink-black hover:bg-charcoal-grey
                  text-white font-body text-xs tracking-[0.2em] uppercase
                  transition-colors duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="animate-spin"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="31.4"
                        strokeDashoffset="10"
                        strokeLinecap="round"
                      />
                    </svg>
                    Mengirim...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={14} />
                    {selectedResto
                      ? "Kirim Booking"
                      : "Pilih Restoran Terlebih Dahulu"}
                  </span>
                )}
              </button>
            </div>
          </form>
        </FadeIn>

        {/* Footer note */}
        <p className="text-center font-body text-xs text-taupe mt-5 leading-relaxed">
          Booking akan dikirim ke tim kami via Telegram. Konfirmasi dalam 1×24
          jam.
          <br />
          Atau{" "}
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-gold underline hover:text-ink-black transition-colors"
          >
            hubungi kami via WhatsApp
          </a>{" "}
          untuk respons lebih cepat.
        </p>
      </div>

      {/* Toast */}
      {toastMsg && (
        <div
          className={`
            fixed bottom-8 left-1/2 -translate-x-1/2 z-50
            px-8 py-4 text-white font-body text-sm
            shadow-[0_8px_30px_rgba(0,0,0,0.15)]
            animate-[slideUp_0.4s_ease_forwards]
            ${toastMsg.type === "error" ? "bg-red-700" : "bg-ink-black"}
          `}
        >
          {toastMsg.text}
        </div>
      )}
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
// FORM FIELD HELPER
// ═════════════════════════════════════════════════════════════
function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block font-body text-[11px] tracking-[0.15em] uppercase text-taupe mb-2">
        {label}
        {required && " *"}
      </label>
      {children}
    </div>
  );
}

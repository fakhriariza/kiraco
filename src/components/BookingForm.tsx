"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";
import { createBooking, BookingData } from "@/lib/bookings";
import toast from "react-hot-toast";

const serviceOptions = [
  "Romantic Dinner & Private Dining",
  "Proposal & Engagement Moments",
  "Anniversary & Milestone Celebrations",
  "Intimate Private Gatherings",
  "Custom Curated Experiences",
];

const budgetOptions = [
  "< Rp 5.000.000",
  "Rp 5.000.000 – 10.000.000",
  "Rp 10.000.000 – 25.000.000",
  "Rp 25.000.000 – 50.000.000",
  "> Rp 50.000.000",
  "Belum menentukan",
];

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    eventDate: "",
    guestCount: "",
    venue: "",
    message: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simpan ke Firestore
      const result = await createBooking(form);

      // Kirim email via API route
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (result.success) {
        setSubmitted(true);
        toast.success(
          "Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.",
        );
      } else {
        toast.error(result.error || "Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch {
      toast.error("Terjadi kesalahan. Silakan coba lagi.");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <div className="w-16 h-16 rounded-full bg-warm-sand-rose/30 flex items-center justify-center mx-auto mb-6">
          <Check size={28} className="text-taupe" />
        </div>
        <h3 className="font-serif text-2xl text-ink-black mb-3">
          Terima kasih
        </h3>
        <p className="text-charcoal-grey font-body max-w-md mx-auto leading-relaxed">
          Pesan Anda telah kami terima. Tim Kira & Co. akan menghubungi Anda
          dalam 1×24 jam untuk mendiskusikan momen spesial Anda.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-ivory border border-beige rounded-none text-sm font-body text-ink-black placeholder:text-taupe/50 focus:border-taupe focus:ring-0 transition-colors duration-300";
  const labelClass =
    "block text-xs tracking-editorial uppercase text-taupe mb-2 font-body";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Nama Lengkap *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Nama Anda"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="email@anda.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Nomor Telepon / WhatsApp *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+62 812 xxxx xxxx"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Jenis Layanan *</label>
          <select
            name="serviceType"
            required
            value={form.serviceType}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="">Pilih layanan</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Event Details */}
      <div className="h-px bg-beige/50 my-2" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className={labelClass}>Tanggal Acara</label>
          <input
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Estimasi Tamu</label>
          <input
            type="text"
            name="guestCount"
            value={form.guestCount}
            onChange={handleChange}
            placeholder="Contoh: 2–10 orang"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Budget</label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="">Pilih range budget</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Preferensi Venue</label>
        <input
          type="text"
          name="venue"
          value={form.venue}
          onChange={handleChange}
          placeholder="Restaurant, rooftop, private villa, atau belum menentukan"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Ceritakan Momen Anda</label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Ceritakan konteks momen Anda — apa yang ingin dirayakan, suasana yang diinginkan, atau detail lain yang penting bagi Anda..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="group flex items-center gap-3 px-8 py-4 bg-ink-black text-ivory text-sm tracking-editorial uppercase font-body hover:bg-charcoal-grey transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              Kirim Konsultasi
              <Send
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </>
          )}
        </button>
        <p className="text-xs text-taupe/60 font-body mt-3 italic">
          Kami akan menghubungi Anda dalam 1×24 jam kerja.
        </p>
      </div>
    </form>
  );
}

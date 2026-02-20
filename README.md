# Kira & Co. — Website

Website resmi untuk **Kira & Co.**, intimate event organizer di Jakarta.

*Cherished moments, beloved memories*

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Firebase Firestore** (untuk menyimpan booking)
- **Framer Motion** (animasi)
- **Lucide React** (ikon)

---

## Setup & Instalasi

### 1. Install dependencies

```bash
npm install
```

### 2. Setup Firebase

1. Buat project baru di [Firebase Console](https://console.firebase.google.com/)
2. Aktifkan **Firestore Database** (mulai dalam mode test untuk development)
3. Buat Web App di Project Settings dan copy konfigurasi

### 3. Konfigurasi Environment

Copy file `.env.local.example` menjadi `.env.local`:

```bash
cp .env.local.example .env.local
```

Lalu isi dengan credentials Firebase Anda:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Firestore Rules (Development)

Untuk development, set rules di Firebase Console:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{booking} {
      allow create: if true;
      allow read: if false;
    }
  }
}
```

### 5. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## Halaman

| Route | Deskripsi |
|-------|-----------|
| `/` | Beranda — hero, values, layanan preview, CTA |
| `/services` | Detail semua layanan Kira & Co. |
| `/about` | Brand overview, CEO message, visi misi, brand personality |
| `/booking` | Form konsultasi/booking (tersimpan ke Firestore) |

---

## Brand Guidelines Applied

- **Warna**: Ivory (#F5F1EA), Beige (#E6DDCF), Taupe (#928377), Ink Black (#1F1F1F), Rose Gold (#D4937B)
- **Font**: Libre Baskerville (headings), Lora (body)
- **Tone**: Tenang, hangat, editorial, refined
- **Desain**: Minimalis, spacious, tidak berlebihan

---

## Build Production

```bash
npm run build
npm start
```

---

## Struktur Folder

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── booking/page.tsx    # Booking form
│   ├── services/page.tsx   # Services page
│   └── about/page.tsx      # About page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── BookingForm.tsx
│   ├── FadeIn.tsx
│   └── SectionDivider.tsx
└── lib/
    ├── firebase.ts         # Firebase config
    └── bookings.ts         # Firestore booking functions
```

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kira & Co. — Cherished moments, beloved memories",
  description:
    "Intimate event organizer di Jakarta. Romantic dinner, proposal, anniversary, dan private celebrations yang personal dan bermakna.",
  keywords: [
    "event organizer jakarta",
    "intimate event",
    "romantic dinner jakarta",
    "proposal planner",
    "anniversary celebration",
    "private dining jakarta",
  ],
  openGraph: {
    title: "Kira & Co. — Cherished moments, beloved memories",
    description:
      "Intimate event organizer yang berfokus pada penciptaan momen personal, tenang, dan bermakna.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="grain-overlay">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1F1F1F",
              color: "#F5F1EA",
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "14px",
              borderRadius: "0",
            },
          }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

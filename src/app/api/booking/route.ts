import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      serviceType,
      eventDate,
      guestCount,
      venue,
      message,
      budget,
    } = body;

    // Email ke admin/owner Kira & Co
    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL || "Kira & Co. <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL || "hello@kiraandco.com",
      subject: `Konsultasi Baru — ${name} (${serviceType})`,
      html: `
        <div style="font-family: Georgia, serif; color: #1F1F1F; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #F5F1EA; padding: 32px; border-bottom: 1px solid #E6DDCF;">
            <h1 style="font-size: 22px; margin: 0 0 4px 0; color: #1F1F1F;">Kira & Co.</h1>
            <p style="font-size: 12px; color: #928377; margin: 0; font-style: italic;">Cherished moments, beloved memories</p>
          </div>
          
          <div style="padding: 32px; background-color: #FFFFFF;">
            <h2 style="font-size: 18px; color: #1F1F1F; margin: 0 0 24px 0;">Permintaan Konsultasi Baru</h2>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="border-bottom: 1px solid #E6DDCF;">
                <td style="padding: 12px 0; color: #928377; width: 140px; vertical-align: top;">Nama</td>
                <td style="padding: 12px 0; color: #1F1F1F;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E6DDCF;">
                <td style="padding: 12px 0; color: #928377; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; color: #1F1F1F;"><a href="mailto:${email}" style="color: #D4937B;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #E6DDCF;">
                <td style="padding: 12px 0; color: #928377; vertical-align: top;">Telepon</td>
                <td style="padding: 12px 0; color: #1F1F1F;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="color: #D4937B;">${phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #E6DDCF;">
                <td style="padding: 12px 0; color: #928377; vertical-align: top;">Layanan</td>
                <td style="padding: 12px 0; color: #1F1F1F; font-weight: 600;">${serviceType}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E6DDCF;">
                <td style="padding: 12px 0; color: #928377; vertical-align: top;">Tanggal Acara</td>
                <td style="padding: 12px 0; color: #1F1F1F;">${eventDate || "Belum ditentukan"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E6DDCF;">
                <td style="padding: 12px 0; color: #928377; vertical-align: top;">Estimasi Tamu</td>
                <td style="padding: 12px 0; color: #1F1F1F;">${guestCount || "Belum ditentukan"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E6DDCF;">
                <td style="padding: 12px 0; color: #928377; vertical-align: top;">Budget</td>
                <td style="padding: 12px 0; color: #1F1F1F;">${budget || "Belum ditentukan"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E6DDCF;">
                <td style="padding: 12px 0; color: #928377; vertical-align: top;">Venue</td>
                <td style="padding: 12px 0; color: #1F1F1F;">${venue || "Belum ditentukan"}</td>
              </tr>
            </table>

            ${
              message
                ? `
            <div style="margin-top: 24px; padding: 20px; background-color: #F5F1EA; border-left: 3px solid #D4937B;">
              <p style="font-size: 12px; color: #928377; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.1em;">Pesan</p>
              <p style="font-size: 14px; color: #1F1F1F; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            `
                : ""
            }
          </div>

          <div style="padding: 24px 32px; background-color: #F5F1EA; text-align: center;">
            <p style="font-size: 12px; color: #928377; margin: 0;">Segera hubungi klien dalam 1×24 jam.</p>
          </div>
        </div>
      `,
    });

    // Email konfirmasi ke klien
    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL || "Kira & Co. <onboarding@resend.dev>",
      to: email,
      subject: "Terima kasih — Kira & Co.",
      html: `
        <div style="font-family: Georgia, serif; color: #1F1F1F; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #F5F1EA; padding: 32px; border-bottom: 1px solid #E6DDCF;">
            <h1 style="font-size: 22px; margin: 0 0 4px 0; color: #1F1F1F;">Kira & Co.</h1>
            <p style="font-size: 12px; color: #928377; margin: 0; font-style: italic;">Cherished moments, beloved memories</p>
          </div>

          <div style="padding: 32px; background-color: #FFFFFF;">
            <p style="font-size: 15px; color: #1F1F1F; line-height: 1.7; margin: 0 0 16px 0;">
              Dear ${name},
            </p>
            <p style="font-size: 15px; color: #1F1F1F; line-height: 1.7; margin: 0 0 16px 0;">
              Terima kasih telah menghubungi kami. Kami telah menerima permintaan konsultasi Anda untuk <strong>${serviceType}</strong>.
            </p>
            <p style="font-size: 15px; color: #1F1F1F; line-height: 1.7; margin: 0 0 16px 0;">
              Tim kami akan menghubungi Anda dalam <strong>1×24 jam kerja</strong> untuk mendiskusikan lebih lanjut mengenai momen spesial yang ingin Anda rayakan.
            </p>
            <p style="font-size: 15px; color: #1F1F1F; line-height: 1.7; margin: 0 0 8px 0;">
              Jika ada hal yang ingin ditambahkan, silakan balas email ini atau hubungi kami langsung.
            </p>
            
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #E6DDCF;">
              <p style="font-size: 14px; color: #928377; margin: 0 0 4px 0;">Dengan hangat,</p>
              <p style="font-size: 15px; color: #1F1F1F; margin: 0; font-weight: 600;">Tim Kira & Co.</p>
              <p style="font-size: 13px; color: #928377; margin: 4px 0 0 0;">
                +62 812-8510-8188 · @bykiraandco
              </p>
            </div>
          </div>

          <div style="padding: 20px 32px; background-color: #F5F1EA; text-align: center;">
            <p style="font-size: 11px; color: #928377; margin: 0; font-style: italic;">
              Ada momen yang ingin dirayakan dengan pelan. Tanpa terburu-buru.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengirim email" },
      { status: 500 },
    );
  }
}

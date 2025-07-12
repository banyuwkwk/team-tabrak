"use client";

import { FaDiscord, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] text-white px-6 py-24 flex flex-col items-center">
      {/* Judul */}
      <h2
        style={{ animationDelay: "0ms" }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 mt-16 animate-fadeInUp"
      >
        Kontak & Cara <span className="text-yellow-400">Bergabung</span>
      </h2>

      {/* Deskripsi */}
      <div
        style={{ animationDelay: "200ms" }}
        className="max-w-2xl w-full text-center text-white/80 text-sm md:text-base mb-12 animate-fadeInUp"
      >
        <p>
          Ingin bergabung dengan Team Tabrak? Kami selalu terbuka untuk member baru yang ingin
          berkembang, berkarya, dan berbagi pengalaman! Gabung di Discord resmi kami atau ikuti kami di TikTok
          untuk info dan update terbaru.
        </p>
      </div>

      {/* Card Discord & TikTok */}
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        <a
          href="https://discord.gg/dtv7ghgb"
          target="_blank"
          style={{ animationDelay: "400ms" }}
          className="group bg-white/5 hover:bg-yellow-400 border border-white/20 hover:border-yellow-400 transition rounded-xl p-6 w-[280px] text-center shadow-md hover:shadow-yellow-400/30 animate-fadeInZoom"
        >
          <FaDiscord size={40} className="mx-auto text-white group-hover:text-black transition mb-3" />
          <h3 className="font-semibold text-lg group-hover:text-black">Join Discord</h3>
          <p className="text-sm text-white/60 group-hover:text-black/70 mt-1">
            Komunitas aktif & diskusi seru setiap hari.
          </p>
        </a>

        <a
          href="https://www.tiktok.com/@team.tabrak.racing"
          target="_blank"
          style={{ animationDelay: "600ms" }}
          className="group bg-white/5 hover:bg-yellow-400 border border-white/20 hover:border-yellow-400 transition rounded-xl p-6 w-[280px] text-center shadow-md hover:shadow-yellow-400/30 animate-fadeInZoom"
        >
          <FaTiktok size={40} className="mx-auto text-white group-hover:text-black transition mb-3" />
          <h3 className="font-semibold text-lg group-hover:text-black">Follow TikTok</h3>
          <p className="text-sm text-white/60 group-hover:text-black/70 mt-1">
            Konten recap, event, dan keseruan kami!
          </p>
        </a>
      </div>
    </section>
  );
}

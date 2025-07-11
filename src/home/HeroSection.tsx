'use client';

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 400); // delay sedikit biar smooth
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/home/gunung.png")',
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Box teks dengan animasi */}
      <div
        className={`relative z-10 p-10 rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg border border-white/30 max-w-2xl text-center text-white transition-all duration-1000 ease-out transform
        ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-4xl font-extrabold drop-shadow-lg">
          Welcome To <br />
          <span className="text-yellow-500">Official Team Tabrak Website</span>
        </h1>
        <p className="mt-4 text-lg text-white/80">
        #SOLID #SOLID #SOLID
        </p>

        <a
          href="https://www.tiktok.com/@team.tabrak.racing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-white/20 hover:bg-white/30 border border-white/40 text-white rounded-full backdrop-blur-sm transition"
        >
          Discord Team Tabrak
        </a>
      </div>
    </section>
  );
}

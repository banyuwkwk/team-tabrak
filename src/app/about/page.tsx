"use client";

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] text-white px-6 py-24 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center space-y-12 mt-16">
        {/* Judul Halaman */}
        <h1
          className="text-3xl md:text-4xl font-bold animate-fadeInZoom"
          style={{ animationDelay: "0ms" }}
        >
          Tentang <span className="text-yellow-400">Team Tabrak</span>
        </h1>

        {/* Sejarah Singkat */}
        <div>
          <h2 className="text-xl font-semibold text-yellow-400 mb-2 animate-fadeInZoom" style={{ animationDelay: "100ms" }}>
            Siapa Kami?
          </h2>
          <p className="text-white/80 animate-typing" style={{ animationDelay: "200ms" }}>
            Team Tabrak adalah Team yang berdiri dari ide gabut kami bertiga (Banyu ,Grah ,Ade).
            Kami hadir sebagai ruang untuk para player roblox dari berbagai kalangan dari umur 14-99 yang ingin berkumpul, 
            main bareng, berbagi cerita, serta menciptakan konten positif dan berkesan.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h2 className="text-lg font-semibold text-yellow-400 mb-2 animate-fadeInZoom" style={{ animationDelay: "300ms" }}>
              Visi
            </h2>
            <p className="text-white/80 animate-typing" style={{ animationDelay: "400ms" }}>
              Menjadi Team modern yang menginspirasi lewat gaya hidup, solidaritas,
              dan kegiatan positif di dunia game (roblox).
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-yellow-400 mb-2 animate-fadeInZoom" style={{ animationDelay: "500ms" }}>
              Misi
            </h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              {[
                "Mengadakan event yang seru dan edukatif",
                "Menjadi wadah untuk kreativitas rider muda",
                "Membuat konten media yang positif & inspiratif",
                "Menjalin kebersamaan antar anggota & komunitas lain",
              ].map((text, idx) => (
                <li key={idx} className="animate-typing" style={{ animationDelay: `${600 + idx * 100}ms` }}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kegiatan */}
        <div>
          <h2 className="text-xl font-semibold text-yellow-400 mb-2 animate-fadeInZoom" style={{ animationDelay: "1000ms" }}>
            Apa yang Kami Lakukan?
          </h2>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            {[
              "📹 Membuat dokumentasi video recap setiap kegiatan",
              "🏍️ Mabar (Main Bareng)",
              "📱 Aktif di sosial media seperti TikTok & Discord",
            ].map((text, idx) => (
              <li key={idx} className="animate-typing" style={{ animationDelay: `${1100 + idx * 100}ms` }}>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Nilai-nilai */}
        <div>
          <h2 className="text-xl font-semibold text-yellow-400 mb-2 animate-fadeInZoom" style={{ animationDelay: "1400ms" }}>
            Nilai-nilai Kami
          </h2>
          <p className="text-white/80 animate-typing" style={{ animationDelay: "1500ms" }}>
            Kami menjunjung tinggi solidaritas, sportivitas, dan semangat kebersamaan.
            Tidak ada perbedaan – semua member adalah keluarga di Team Tabrak.
          </p>
        </div>
      </div>
    </section>
  );
}

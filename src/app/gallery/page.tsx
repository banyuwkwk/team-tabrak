"use client";

import Image from "next/image";

const images = [
  "/images/gallery/gunung.png",
  "/images/gallery/founder.png",
  "/images/gallery/laga.png",
  "/images/gallery/cinem1.png",
  "/images/gallery/cinem2.png",
  "/images/gallery/cdid1.png",
  "/images/gallery/cdid2.png",
  "/images/gallery/cdid3.png",
  "/images/gallery/cdid4.png",
  "/images/gallery/cdid5.png",
  "/images/gallery/cdid6.png",
  "/images/gallery/cdid7.png",
  "/images/gallery/cdid8.png",
];

export default function GalleryPage() {
  return (
    <section className="min-h-screen w-full bg-black text-white px-6 py-24 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 mt-16">
        Galeri <span className="text-yellow-400">Team Tabrak</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl justify-items-center">
        {images.map((src, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 100}ms` }}
            className="group overflow-hidden rounded-xl shadow-lg border border-white/10 animate-fadeInUp w-full max-w-[260px] md:max-w-[300px]"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

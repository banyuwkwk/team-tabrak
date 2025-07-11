"use client";

import Image from "next/image";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];

export default function GalleryPage() {
  return (
    <section className="min-h-screen w-full bg-black text-white px-6 py-24 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 mt-16">
        Galeri <span className="text-yellow-400">Team Tabrak</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {images.map((src, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 100}ms` }}
            className="group overflow-hidden rounded-xl shadow-lg border border-white/10 animate-fadeInUp"
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

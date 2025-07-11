"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WhyJoinSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: "/images/home/why/laga1.png",
      title: "Komunitas Solid",
      desc: "Solid, komunitas yang membantu membangun kesatuan dan kepercayaan antar anggota.",
    },
    {
      icon: "/images/home/why/gunungtala.png",
      title: "Konten & Dokumentasi",
      desc: "Setiap event ada dokumentasi video recap buat kenangan & media.",
    },
    {
      icon: "/images/home/why/joki.png",
      title: "Support & Edukasi",
      desc: "Belajar bareng, diskusi modif, safety riding, dan lainnya!",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full flex flex-col items-center gap-16">
        {/* Judul animasi */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-center drop-shadow transition-all duration-700 ease-out transform
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Kenapa Gabung <span className="text-yellow-400">Team Tabrak?</span>
        </h2>

        <div className="flex flex-col gap-12 w-full">
          {features.map((item, i) => {
            const isReverse = i % 2 === 1;
            const slideDirection = isVisible
              ? "translate-x-0 opacity-100"
              : isReverse
              ? "translate-x-20 opacity-0"
              : "-translate-x-20 opacity-0";

            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 transition-all duration-700 ease-out transform
                ${isReverse ? "md:flex-row-reverse" : ""}
                ${slideDirection}
                `}
                style={{ transitionDelay: `${i * 200 + 200}ms` }}
              >
                {/* Icon Box */}
                <div className="w-[160px] h-[160px] flex items-center justify-center bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-md shadow-lg">
                  <div className="relative w-full h-full hover:scale-105 transition-all duration-300">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="max-w-md text-center md:text-left">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FounderSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers = [
    {
      name: "Ade",
      role: "Founder , Leader , Cordinator",
      image: "/images/home/profile/adedes.png",
    },
    {
      name: "Nyu",
      role: "Founder , Leader , Streamer",
      image: "/images/home/profile/banyu.png",
    },
    {
      name: "Grah",
      role: "Founder , Leader , Coordinator",
      image: "/images/home/profile/anugrah.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-[#0a0a0a] text-white px-6 py-24 flex flex-col items-center"
    >
      {/* Judul dengan animasi */}
      <h2
        className={`
          text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ease-out transform
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
        style={{ transitionDelay: "0ms" }}
      >
        Founder <span className="text-yellow-400">Team Tabrak</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className={`
              group relative aspect-[300/420] w-full overflow-hidden rounded-xl bg-[#1a1a1a] border border-white/20 shadow-md
              transition duration-700 ease-out transform
              hover:border-yellow-400 hover:shadow-[0_0_20px_4px_rgba(250,204,21,0.6)]
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
            `}
            style={{ transitionDelay: `${i * 200 + 200}ms` }} // +200 agar muncul setelah judul
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative w-full aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 items-center justify-center p-4 text-center">
                <div>
                  <h3 className="text-white text-base font-semibold mb-1 group-hover:text-yellow-300 transition">
                    {member.name}
                  </h3>
                  <p className="text-white/60 text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

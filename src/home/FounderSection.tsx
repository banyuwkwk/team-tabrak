"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FounderSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers = [
    {
      name: "Ade",
      role: "Founder, Leader, Coordinator",
      image: "/images/home/profile/adedes.png",
    },
    {
      name: "Nyu",
      role: "Founder, Leader, Streamer",
      image: "/images/home/profile/banyu.png",
    },
    {
      name: "Grah",
      role: "Founder, Leader, Coordinator",
      image: "/images/home/profile/anugrah.png",
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

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full text-white px-6 py-24 flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home/founder.png')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 w-full">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Founder <span className="text-yellow-400">Team Tabrak</span>
        </h2>

        {/* Grid Responsive Card */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 200}ms` }}
              className={`
                group relative w-full 
                aspect-[300/420] overflow-hidden rounded-xl 
                bg-[#1a1a1a] border border-white/20 shadow-md 
                transition duration-300 
                hover:border-yellow-400 hover:shadow-[0_0_20px_4px_rgba(250,204,21,0.6)]
                ${isVisible ? "animate-fadeInUp" : "opacity-0"}
                ${i === 2 ? "mx-auto" : ""}
              `}
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
    <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-1 group-hover:text-yellow-300 transition">
      {member.name}
    </h3>
    <p className="text-white/60 text-xs sm:text-sm md:text-base">
      {member.role}
    </p>
  </div>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

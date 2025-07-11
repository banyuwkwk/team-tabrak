"use client";

import { useState } from "react";
import Image from "next/image";

const members = [
  {
    name: "Ade",
    role: "Founder, Leader, Coordinator ,Event Crew, Media, Editor, Joki",
    image: "/images/home/profile/adedes.png",
    category: "Founder",
  },
  {
    name: "Nyu",
    role: "Founder, Leader, Streamer, Event Crew, Media, Editor",
    image: "/images/home/profile/banyu.png",
    category: "Founder",
  },
  {
    name: "Grah",
    role: "Founder, Leader, Coordinator, Event Crew, Media, Editor ",
    image: "/images/home/profile/anugrah.png",
    category: "Founder",
  },
  {
    name: "Eltraa",
    role: "Support, Coordinator, Joki",
    image: "/images/home/profile/vano.png",
    category: "Staff",
  },
  {
    name: "Azrill",
    role: "Joki, Support",
    image: "/images/home/profile/vano.png",
    category: "Joki",
  },
  {
    name: "Rizky",
    role: "Member, Support",
    image: "/images/member/rizky.png",
    category: "Insider",
  },
  {
    name: "Qnell",
    role: "Member, Support",
    image: "/images/member/qnell.png",
    category: "Insider",
  },
  {
    name: "Vinzz",
    role: "Member, Support",
    image: "/images/member/vinz.png",
    category: "Insider",
  },
  {
    name: "Jevaro",
    role: "Member, Support",
    image: "/images/member/jevaro.png",
    category: "Insider",
  },
];

const categories = ["All", "Founder", "Staff", "Joki", "Insider"];

export default function AboutPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMembers =
    selectedCategory === "All"
      ? members
      : members.filter((m) => m.category === selectedCategory);

  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] text-white px-6 py-24 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 mt-16">
        Member <span className="text-yellow-400">Team Tabrak</span>
      </h2>

      {/* Category Filter */}
      <div className="mb-12 flex flex-wrap gap-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selectedCategory === cat
                ? "bg-yellow-400 text-black"
                : "bg-white/10 text-white border-white/20 hover:bg-yellow-500 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Member Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 100}ms` }}
              className="group relative aspect-[300/420] w-full overflow-hidden rounded-xl bg-[#1a1a1a] border border-white/20 shadow-md transition duration-300 hover:border-yellow-400 hover:shadow-[0_0_20px_4px_rgba(250,204,21,0.6)] animate-fadeInUp"
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
          ))
        ) : (
          <p className="text-white/50 col-span-full text-center">
            Belum ada anggota di kategori ini.
          </p>
        )}
      </div>
    </section>
  );
}

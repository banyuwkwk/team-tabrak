"use client";

import { FaDiscord, FaTiktok } from "react-icons/fa";

export default function ContactSection() {
  const contactLinks = [
    {
      name: "Discord",
      url: "https://discord.gg/dtv7ghgb",
      icon: <FaDiscord className="text-2xl" />,
      username: "discord.gg/dtv7ghgb",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@team.tabrak.racing",
      icon: <FaTiktok className="text-2xl" />,
      username: "@team.tabrak.racing",
    },
  ];

  return (
    <section className="w-full bg-white text-black py-24 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Kontak <span className="text-yellow-500">Kami</span>
        </h2>

        <div className="flex flex-col gap-6">
          {contactLinks.map((contact, i) => (
            <a
              key={i}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 border border-yellow-400 rounded-lg px-6 py-4 hover:bg-yellow-100 transition text-black"
            >
              <span className="text-yellow-500">{contact.icon}</span>
              <div className="text-left">
                <p className="font-semibold">{contact.name}</p>
                <p className="text-sm text-black/70">{contact.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

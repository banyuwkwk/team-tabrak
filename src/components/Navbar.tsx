'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Member", path: "/member" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`w-full z-50 flex justify-center transition-all duration-700 ${
        isSticky ? "fixed top-0" : "absolute top-0 mt-6"
      }`}
    >
      <div
        className="border border-white/20 rounded-full 
          px-4 py-2 sm:px-8 sm:py-3 
          flex items-center justify-between gap-4 sm:gap-6 w-full max-w-5xl
          shadow-[0_0_20px_5px_rgba(255,255,255,0.2)] 
          transition duration-700 
          bg-white/30 backdrop-blur-md"
      >
        {/* Logo */}
        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
          <Image
            src="/images/home/logo/logo.png"
            alt="Tabrak Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-3 sm:gap-6 text-xs sm:text-base">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`transition font-medium ${
                  pathname === item.path
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_white]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Discord */}
        <a
          href="https://discord.gg/dtv7ghgb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_white] transition font-medium text-xs sm:text-sm"
        >
          Discord
        </a>
      </div>
    </nav>
  );
}

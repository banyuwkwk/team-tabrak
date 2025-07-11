export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white px-6 py-16 relative z-10">
      {/* Glow line di atas footer */}
      <div className="h-[2px] w-full bg-gradient-to-r from-yellow-400 via-white to-blue-400 blur-sm opacity-40 mb-10" />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* KIRI: Logo dan copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-yellow-400 font-semibold">TabrakWebsite</span>. All rights reserved.
          </p>
        </div>

        {/* TENGAH: Menu navigasi */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {["Home", "Member", "Gallery", "Contact", "About"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="text-white/70 hover:text-yellow-400 transition hover:drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* KANAN: Discord & TikTok */}
        <div className="flex gap-4 items-center">
          <a
            href="https://discord.gg/dtv7ghgb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-blue-400 transition hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          >
            Discord
          </a>
          <a
            href="https://www.tiktok.com/@team.tabrak.racing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-pink-400 transition hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}

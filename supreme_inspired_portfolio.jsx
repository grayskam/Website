export default function SupremeInspiredPortfolio() {
  const menuItems = [
    "work",
    "projects",
    "about",
    "resume",
    "contact",
    "links",
    "gallery",
    "notes",
  ];

  const socials = [
    { label: "ig", href: "#" },
    { label: "yt", href: "#" },
    { label: "gh", href: "#" },
    { label: "li", href: "#" },
    { label: "x", href: "#" },
    { label: "mail", href: "#" },
  ];

  const footerLinks = ["terms", "privacy", "faq", "accessibility"];

  const now = new Date();
  const timeText = now.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-10 sm:px-8">
        <header className="flex flex-col items-center pt-2">
          <div className="bg-red-600 px-4 py-1 text-4xl font-bold italic leading-none tracking-tight text-white shadow-lg sm:text-5xl">
            YOUR NAME
          </div>
          <p className="mt-5 text-[13px] tracking-wide text-zinc-100">
            {timeText} NYC
          </p>
        </header>

        <section className="mt-28 flex-1">
          <nav>
            <ul className="space-y-5 text-[22px] leading-none sm:text-[24px]">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="inline-block transition-opacity hover:opacity-60"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-14 flex flex-wrap gap-3 text-[12px] uppercase tracking-wider text-zinc-400">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-zinc-700 px-3 py-1 transition-colors hover:border-zinc-500 hover:text-white"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </section>

        <footer className="pt-16">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-zinc-300">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="transition-opacity hover:opacity-60"
              >
                {link}
              </a>
            ))}
          </div>
        </footer>
      </div>

      <section id="work" className="border-t border-zinc-800 px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl text-zinc-300">selected work</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Project One", "Brand identity and web design"],
              ["Project Two", "Frontend build and motion"],
              ["Project Three", "Editorial portfolio system"],
              ["Project Four", "Creative developer showcase"],
            ].map(([title, desc]) => (
              <a
                key={title}
                href="#"
                className="rounded-2xl border border-zinc-800 p-5 transition-colors hover:border-zinc-600"
              >
                <div className="text-lg text-white">{title}</div>
                <div className="mt-2 text-sm text-zinc-400">{desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

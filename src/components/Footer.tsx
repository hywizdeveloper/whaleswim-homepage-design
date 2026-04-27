export function Footer() {
  const cols = [
    { title: "Expeditions", links: ["Tonga", "Norway", "Cook Islands", "Timor-Leste"] },
    { title: "Company", links: ["About", "Field Crew", "Conservation", "Press"] },
    { title: "Resources", links: ["Pre-trip Guide", "FAQ", "Insurance", "Contact"] },
  ];
  return (
    <footer id="contact" className="relative bg-background border-t border-hairline pt-20 pb-10 px-6 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="relative grid h-7 w-7 place-items-center">
                <span className="absolute inset-0 rounded-full border border-aqua/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
              </span>
              <span className="text-[13px] font-medium tracking-[0.18em] uppercase text-foreground">WhaleSwim</span>
            </div>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Intimate, ethical encounters with the ocean&rsquo;s apex giants. Operating since 2012.
            </p>
            <div className="mt-8 font-mono-meta text-muted-foreground">
              hello@whaleswim.co · +64 9 555 0188
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="font-mono-meta text-aqua mb-5">{c.title}</div>
              <ul className="space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 pt-8 border-t border-hairline flex flex-col md:flex-row gap-3 items-start md:items-center justify-between font-mono-meta text-muted-foreground/70">
          <span>© 2025 WhaleSwim Adventures · All rights reserved</span>
          <span>Member · World Cetacean Alliance</span>
        </div>
      </div>
    </footer>
  );
}

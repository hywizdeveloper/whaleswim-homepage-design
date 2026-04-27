import { useEffect, useRef } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

const items = [
  { img: g2, label: "Tail · 12m span", coord: "S 18°39′" },
  { img: g1, label: "Calf · 3 days old", coord: "S 21°08′" },
  { img: g4, label: "Surface · 06:42", coord: "Visibility 30m" },
  { img: g5, label: "Vessel · adrift", coord: "Engine cut" },
  { img: g3, label: "Breach · 14m", coord: "Dusk · 18:31" },
];

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const rect = track.parentElement!.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress 0..1 while section crosses viewport
        const p = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
        const max = track.scrollWidth - window.innerWidth;
        track.style.transform = `translate3d(${-p * max * 0.8}px,0,0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="journal" className="relative bg-background py-28 md:py-36 border-t border-hairline overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mb-14 md:mb-20 flex items-end justify-between gap-8">
        <div>
          <div className="font-mono-meta text-aqua mb-5">04 / Field Notes</div>
          <h2 className="font-display font-medium text-balance tracking-[-0.035em] leading-[1.02] text-foreground" style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}>
            From the water,
            <br />
            <span className="text-muted-foreground italic font-light">unedited.</span>
          </h2>
        </div>
        <p className="hidden md:block font-mono-meta text-muted-foreground/70 max-w-[20ch] text-right">
          Selected frames · Season 2024
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div ref={trackRef} className="flex gap-5 will-change-transform px-6 md:px-10" style={{ transition: "transform 0.1s linear" }}>
          {items.concat(items).map((it, i) => (
            <figure
              key={i}
              className="group relative shrink-0 w-[78vw] md:w-[42vw] lg:w-[32vw] aspect-[4/3] overflow-hidden rounded-2xl border border-hairline"
            >
              <img src={it.img} alt={it.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between font-mono-meta">
                <span className="text-foreground/90">{it.label}</span>
                <span className="text-aqua">{it.coord}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

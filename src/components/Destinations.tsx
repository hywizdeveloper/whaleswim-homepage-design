import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import tonga from "@/assets/dest-tonga.jpg";
import norway from "@/assets/dest-norway.jpg";
import cook from "@/assets/dest-cook.jpg";
import timor from "@/assets/dest-timor.jpg";

const destinations = [
  {
    name: "Tonga",
    img: tonga,
    season: "Jul — Oct",
    species: "Humpback",
    coords: "S 21°08′ · W 175°12′",
    blurb: "The world's only sanctioned in-water encounter with humpback mothers and calves.",
  },
  {
    name: "Norway",
    img: norway,
    season: "Nov — Jan",
    species: "Orca · Fin",
    coords: "N 69°41′ · E 18°57′",
    blurb: "Arctic fjords, polar twilight, and pods feeding on the great herring run.",
  },
  {
    name: "Cook Islands",
    img: cook,
    season: "Aug — Oct",
    species: "Humpback",
    coords: "S 21°14′ · W 159°47′",
    blurb: "Crystalline lagoons and uncrowded reef passes — encounters in solitude.",
  },
  {
    name: "Timor-Leste",
    img: timor,
    season: "Oct — Nov",
    species: "Blue · Pilot",
    coords: "S 08°33′ · E 125°34′",
    blurb: "Deep-water trench accessible from shore. Blue whales pass within sight of land.",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-2 font-mono-meta text-aqua">02 / Atlas</div>
          <Reveal as="h2" className="lg:col-span-7 font-display font-medium text-balance tracking-[-0.035em] leading-[1.0]" >
            <span className="text-foreground" style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}>
              Four oceans.
              <br />
              <span className="text-muted-foreground">A handful of perfect days.</span>
            </span>
          </Reveal>
          <Reveal delay={150} as="p" className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed max-w-prose">
            Each season we run a small number of expeditions to places where the wildlife —
            and the conditions — earn the journey.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <DestinationCard {...d} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard(props: {
  name: string; img: string; season: string; species: string; coords: string; blurb: string; index: number;
}) {
  return (
    <a
      href="#"
      className="group relative block overflow-hidden rounded-2xl border border-hairline bg-surface transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_30px_60px_-20px_rgba(0,229,255,0.15)]"
    >
      <div className="relative aspect-[4/3.2] overflow-hidden">
        <img
          src={props.img}
          alt={props.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-700 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Top HUD */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 font-mono-meta text-foreground/80">
          <span>0{props.index}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-aqua">{props.coords}</span>
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-3xl md:text-4xl tracking-[-0.03em] text-foreground">{props.name}</h3>
            <ArrowUpRight className="h-5 w-5 text-foreground/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-aqua" />
          </div>
          <div className="mt-2 flex items-center gap-3 font-mono-meta text-muted-foreground">
            <span>{props.season}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>{props.species}</span>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-7 py-5 text-sm leading-relaxed text-muted-foreground">
        {props.blurb}
      </div>
    </a>
  );
}

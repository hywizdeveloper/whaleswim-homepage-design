import { Reveal } from "./Reveal";

const pillars = [
  {
    eyebrow: "01 — Intimate",
    title: "Small Groups",
    metric: "4",
    metricLabel: "Guests max",
    body:
      "A single Zodiac. Four guests. Two crew. The ratio that lets the encounter belong to you and the animal — never the queue behind you.",
    diagram: <SmallGroupsDiagram />,
  },
  {
    eyebrow: "02 — Ethical",
    title: "Respect for Wildlife",
    metric: "100m",
    metricLabel: "Approach radius",
    body:
      "Strict adherence to marine-biology guidelines. Engines cut at distance. The wildlife decides whether the encounter happens — and how close.",
    diagram: <RadiusDiagram />,
  },
  {
    eyebrow: "03 — Credentialed",
    title: "Expert Guides",
    metric: "12+",
    metricLabel: "Years in field",
    body:
      "Working marine biologists and licensed in-water guides. Not influencers with GoPros. Every expedition is led by published researchers in their field.",
    diagram: <GuideDiagram />,
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative bg-background py-28 md:py-40 border-t border-hairline">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <Reveal>
            <div className="font-mono-meta text-aqua mb-6">03 / Method</div>
          </Reveal>
          <Reveal delay={100} as="h2" className="font-display font-medium text-balance tracking-[-0.035em] leading-[1.02] text-foreground" >
            <span style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}>
              The opposite of a
              <br />
              <span className="italic font-light text-muted-foreground">tourist boat.</span>
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group relative h-full rounded-2xl border border-hairline bg-surface/60 p-7 md:p-8 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-white/20 hover:bg-surface">
                <div className="flex items-center justify-between font-mono-meta text-muted-foreground">
                  <span>{p.eyebrow}</span>
                </div>

                <div className="mt-10 grid place-items-center h-44">
                  {p.diagram}
                </div>

                <div className="mt-10 flex items-baseline gap-3">
                  <div className="font-display text-5xl md:text-6xl tracking-[-0.04em] text-foreground tabular-nums">
                    {p.metric}
                  </div>
                  <div className="font-mono-meta text-muted-foreground">{p.metricLabel}</div>
                </div>

                <h3 className="mt-2 font-display text-2xl tracking-[-0.02em] text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-[42ch]">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmallGroupsDiagram() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full max-w-[220px]" fill="none" stroke="currentColor">
      <ellipse cx="100" cy="80" rx="70" ry="22" className="text-aqua/40" strokeWidth="1" />
      <path d="M40 80 Q100 100 160 80 L150 90 Q100 105 50 90 Z" className="text-aqua" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
      {[78, 92, 108, 122].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="74" r="3" className="text-foreground" fill="currentColor" />
          <line x1={x} y1="77" x2={x} y2="86" className="text-foreground" strokeWidth="1" />
        </g>
      ))}
      <text x="100" y="22" textAnchor="middle" className="fill-muted-foreground" style={{ font: "10px var(--font-mono)", letterSpacing: "0.14em" }}>
        VESSEL · 4 GUESTS
      </text>
    </svg>
  );
}

function RadiusDiagram() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full max-w-[220px]" fill="none" stroke="currentColor">
      <circle cx="100" cy="90" r="60" className="text-aqua/20" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="100" cy="90" r="40" className="text-aqua/40" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="100" cy="90" r="20" className="text-aqua" strokeWidth="1" />
      {/* Whale */}
      <ellipse cx="100" cy="90" rx="10" ry="4" className="text-foreground" fill="currentColor" />
      {/* Boat */}
      <path d="M155 88 L175 88 L172 94 L158 94 Z" className="text-foreground" fill="currentColor" />
      <line x1="100" y1="90" x2="155" y2="91" className="text-aqua/60" strokeWidth="0.8" strokeDasharray="2 3" />
      <text x="128" y="82" className="fill-aqua" style={{ font: "9px var(--font-mono)", letterSpacing: "0.1em" }}>100m</text>
    </svg>
  );
}

function GuideDiagram() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full max-w-[220px]" fill="none" stroke="currentColor">
      <rect x="40" y="30" width="120" height="100" rx="8" className="text-hairline" strokeWidth="1" />
      <circle cx="70" cy="60" r="10" className="text-aqua" strokeWidth="1" />
      <line x1="90" y1="55" x2="140" y2="55" className="text-foreground" strokeWidth="1" />
      <line x1="90" y1="65" x2="125" y2="65" className="text-muted-foreground" strokeWidth="1" />
      <line x1="55" y1="90" x2="145" y2="90" className="text-hairline" strokeWidth="1" />
      <line x1="55" y1="100" x2="135" y2="100" className="text-muted-foreground" strokeWidth="1" />
      <line x1="55" y1="110" x2="120" y2="110" className="text-muted-foreground" strokeWidth="1" />
      <text x="50" y="146" className="fill-muted-foreground" style={{ font: "8px var(--font-mono)", letterSpacing: "0.14em" }}>
        CRED · MARINE BIO · PHD
      </text>
    </svg>
  );
}

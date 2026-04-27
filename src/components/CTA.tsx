import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="cta" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-aqua">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 20%, rgba(5,11,20,0.6), transparent 60%), radial-gradient(circle at 80% 90%, rgba(5,11,20,0.5), transparent 55%)",
          }}
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 px-8 md:px-16 py-20 md:py-28">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="font-mono-meta text-background/70">05 / Embark</div>
            </Reveal>
            <Reveal delay={100} as="h2" className="mt-6 font-display font-medium text-balance tracking-[-0.04em] leading-[0.95] text-background" >
              <span style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
                Ready to experience
                <br />
                <span className="italic font-light">it for yourself?</span>
              </span>
            </Reveal>
            <Reveal delay={250} as="p" className="mt-8 max-w-[55ch] text-base md:text-lg text-background/75 leading-relaxed" >
              The 2025 season opens in March. Twelve expeditions across four oceans.
              Most will sell out within the week.
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#" className="group inline-flex h-12 items-center gap-2 rounded-full bg-background px-6 text-sm font-medium text-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_20px_40px_-10px_rgba(5,11,20,0.4)] active:translate-y-0 active:scale-[0.98]">
                  View Available Trips
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                </a>
                <a href="#" className="inline-flex h-12 items-center rounded-full border border-background/30 px-5 text-sm text-background hover:bg-background/10 transition-colors">
                  Speak with a guide
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-background/20 lg:pl-10 flex flex-col justify-end">
            <Reveal delay={500}>
              <div className="space-y-6 font-mono-meta text-background/70">
                <Stat value="12" label="Expeditions / Year" />
                <Stat value="04" label="Destinations" />
                <Stat value="48" label="Total Berths" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-background/20 pt-4 first:border-t-0 first:pt-0">
      <span>{label}</span>
      <span className="font-display text-3xl text-background tracking-[-0.03em] tabular-nums">{value}</span>
    </div>
  );
}

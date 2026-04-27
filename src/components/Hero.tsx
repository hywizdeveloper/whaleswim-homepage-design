import { Play, ArrowUpRight, Users, Compass } from "lucide-react";
import heroWhale from "@/assets/hero-whale.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background image */}
      <img
        src={heroWhale}
        alt="Humpback whale gliding through deep blue ocean"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        style={{ animation: "heroFade 2.4s cubic-bezier(0.16,1,0.3,1) both" }}
      />
      {/* Scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-6 md:px-10 pb-16 md:pb-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-7">
            <div
              className="font-mono-meta text-aqua flex items-center gap-3"
              style={{ animation: "fadeUp 800ms 600ms both cubic-bezier(0.16,1,0.3,1)" }}
            >
              <span className="h-px w-8 bg-aqua/60" />
              Ethical Marine Expeditions
            </div>

            <h1
              className="text-balance font-display font-medium text-foreground tracking-[-0.04em] leading-[0.92]"
              style={{
                fontSize: "clamp(3.25rem, 9vw, 8rem)",
                animation: "fadeUpBlur 1100ms 800ms both cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              Swim With
              <br />
              <span className="italic font-light text-foreground/95">Whales</span>
            </h1>

            <p
              className="max-w-[52ch] text-pretty text-base md:text-lg leading-relaxed text-muted-foreground"
              style={{ animation: "fadeUp 900ms 1100ms both cubic-bezier(0.16,1,0.3,1)" }}
            >
              Leave the thirty-passenger diesel boats behind. Intimate, marine-biologist-led
              encounters with the ocean&rsquo;s apex giants — in Tonga, Norway, the Cook Islands
              and Timor-Leste.
            </p>

            <div
              className="flex flex-wrap items-center gap-3 pt-2"
              style={{ animation: "fadeUp 900ms 1300ms both cubic-bezier(0.16,1,0.3,1)" }}
            >
              <a
                href="#destinations"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_20px_40px_-10px_rgba(0,229,255,0.25)] active:translate-y-0 active:scale-[0.98]"
              >
                Explore Tours
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </a>
              <a
                href="#video"
                className="group inline-flex h-12 items-center gap-3 rounded-full border border-hairline bg-white/5 px-5 text-sm text-foreground backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full border border-aqua/50">
                  <Play className="h-2.5 w-2.5 fill-aqua text-aqua" />
                </span>
                Watch Film
              </a>
            </div>
          </div>

          {/* Proof chip */}
          <div
            className="lg:col-span-5 lg:justify-self-end w-full max-w-md"
            style={{ animation: "fadeUp 1000ms 1500ms both cubic-bezier(0.16,1,0.3,1)" }}
          >
            <div className="rounded-2xl border border-hairline bg-white/5 backdrop-blur-xl p-5">
              <div className="flex items-center justify-between font-mono-meta text-muted-foreground">
                <span>Encounter Protocol</span>
                <span className="text-aqua">v.04</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <Metric icon={<Users className="h-3.5 w-3.5" />} value="04" label="Guests / Vessel" />
                <Metric icon={<Compass className="h-3.5 w-3.5" />} value="100m" label="Approach Radius" />
              </div>
              <div className="mt-5 pt-4 border-t border-hairline text-[12px] text-muted-foreground/90 leading-relaxed">
                Our custom Zodiacs let the wildlife dictate the encounter, on its own terms.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom HUD line */}
        <div className="mt-16 flex items-center justify-between font-mono-meta text-muted-foreground/70">
          <span>S 18°39&apos; · W 173°59&apos;</span>
          <span className="hidden md:inline">Scroll · Descend</span>
          <span>Visibility 30m</span>
        </div>
      </div>

      <style>{`
        @keyframes heroFade { from { opacity: 0; transform: scale(1.04); } to { opacity: 0.9; transform: scale(1); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeUpBlur { from { opacity: 0; transform: translateY(40px); filter: blur(10px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
      `}</style>
    </section>
  );
}

function Metric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-aqua">{icon}<span className="font-mono-meta">{label}</span></div>
      <div className="mt-2 font-display text-3xl tracking-[-0.03em] text-foreground tabular-nums">{value}</div>
    </div>
  );
}

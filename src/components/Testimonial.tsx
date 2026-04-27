import { Reveal } from "./Reveal";

export function Testimonial() {
  return (
    <section className="relative bg-background py-32 md:py-48 border-t border-hairline">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 text-center">
        <Reveal>
          <div className="font-mono-meta text-aqua mb-10 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-aqua/50" />
            Field Account
            <span className="h-px w-8 bg-aqua/50" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <blockquote
            className="font-display font-light text-balance text-foreground tracking-[-0.025em] leading-[1.18]"
            style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.85rem)" }}
          >
            &ldquo;She turned, and watched us for what felt like an hour. No one moved. No one spoke.
            It was the most quiet I have ever heard the ocean be — and the loudest moment of my life.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-surface-elevated border border-hairline font-mono-meta text-aqua">
              EM
            </div>
            <div className="text-left">
              <div className="text-sm text-foreground">Elena Marchetti</div>
              <div className="font-mono-meta text-muted-foreground">Marine Photographer · Tonga &apos;24</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

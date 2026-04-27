import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Destinations } from "@/components/Destinations";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WhaleSwim Adventures — Swim With Whales" },
      {
        name: "description",
        content:
          "Intimate, marine-biologist-led whale encounters in Tonga, Norway, the Cook Islands and Timor-Leste. Four guests per vessel. Strict 100m approach radius.",
      },
      { property: "og:title", content: "WhaleSwim Adventures — Swim With Whales" },
      {
        property: "og:description",
        content: "Ethical, small-group ocean expeditions to swim with the world's apex giants.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Destinations />
      <Experience />
      <Gallery />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}

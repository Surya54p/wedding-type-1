import { Navbar } from "@/components/wedding/Navbar";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { Couple } from "@/components/wedding/Couple";
import { Events } from "@/components/wedding/Events";
import { Gallery } from "@/components/wedding/Gallery";
import { Story } from "@/components/wedding/Story";
import { Guestbook } from "@/components/wedding/Guestbook";
import { Footer } from "@/components/wedding/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <Countdown />
      <Couple />
      <Events />
      <Gallery />
      <Story />
      <Guestbook />
      <Footer />
    </main>
  );
}

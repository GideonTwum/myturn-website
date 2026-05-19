import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Groups } from "@/components/sections/Groups";
import { FlyerShowcase } from "@/components/sections/FlyerShowcase";
import { ContributionPlans } from "@/components/sections/ContributionPlans";
import { Testimonials } from "@/components/sections/Testimonials";
import { FutureOfMyTurn } from "@/components/sections/FutureOfMyTurn";
import { ApplyForm } from "@/components/sections/ApplyForm";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChoose />
        <Groups />
        <FlyerShowcase />
        <ContributionPlans />
        <Testimonials />
        <FutureOfMyTurn />
        <ApplyForm />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

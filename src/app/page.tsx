"use client";

import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillSection from "@/components/skill-section";
import PortfolioSection from "@/components/portofolio-section";
import TestimonialSection from "@/components/testimonial-section";
import Navbar from "@/components/navbar";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="text-white pt-20">
        <HeroSection />
        <h1 className="sr-only">
          Alfian - Full Stack Web Developer | Portfolio Website
        </h1>
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
        <PortfolioSection />
        <TestimonialSection />
        <ContactSection />
      </main>
    </>
  );
}

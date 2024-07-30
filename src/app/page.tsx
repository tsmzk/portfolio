import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section id="about" title="About me">
        <About />
      </Section>
      <Section id="skills" title="Skills">
        <Skills />
      </Section>
      <Section id="works" title="Works">
        <Works />
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </div>
  );
}

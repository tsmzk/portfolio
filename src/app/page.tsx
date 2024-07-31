import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Section from "@/components/section/Section";
import Skills from "@/components/skills/Skills";
import Works from "@/components/works/Works";

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

import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
const About = () => {
  return (
    <Section delay={0.1}>
      <SectionTitle underline>About</SectionTitle>
      <p>
        As a self-taught web developer with 3 years of experience, I specialize
        in building captivating web interfaces using the React.js library.
        Passionate about aesthetics, UI design, and delivering exceptional user
        experiences, I consistently apply best practices to create fast,
        performant, and reliable software solutions. Additionally, I actively
        pursue continuous learning to stay abreast of modern technologies and
        industry trends, ensuring that I can contribute to cutting-edge web
        development projects.
      </p>
      <br />

      <div className="mt-6 text-center">
        <Link passHref href="/projects">
          <button className="btn btn-primary">
            My Portfolio <MdKeyboardArrowRight className="ms-2" size={20} />
          </button>
        </Link>
      </div>
    </Section>
  );
};

export default About;

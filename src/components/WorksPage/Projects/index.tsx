import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import sweetatLogo from "../../../../public/images/sweetatlogo.jpg";
import mrglogo from "../../../../public/images/mrglogo.jpg";
import ProjectCard from "../ProjectCard";
const Projects = () => {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          thumbnail={sweetatLogo}
          description="Sweets shop"
          title="Sweetat"
          // link="https://sweetat.co"
          link="/works/sweetat"
        />
        <ProjectCard
          thumbnail={mrglogo}
          description="E commerce"
          title="MRG"
          // link="https://mrg-mall.com"
          link="/works/mrg"
        />
      </div>
    </Section>
  );
};

export default Projects;

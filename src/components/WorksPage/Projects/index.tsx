import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import sweetatLogo from "../../../../public/images/sweetatlogo.jpg";
import mrglogo from "../../../../public/images/mrglogo.jpg";
import danahlogo from "../../../../public/images/danahlogo.jpg";
import knackuilogo from "../../../../public/images/knackuilogo.jpg";
import crashmania from "../../../../public/images/crashmania.jpg";
import ProjectCard from "../ProjectCard";
const Projects = () => {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
        <ProjectCard
          thumbnail={crashmania}
          description="Official E-commerce website for Al Danah Fisheries in Kuwait"
          title="CrashMania"
          link="/works/danah"
        />
        <ProjectCard
          thumbnail={knackuilogo}
          description="Official E-commerce website for Al Danah Fisheries in Kuwait"
          title="Knack-UI"
          link="/works/danah"
        />
        <ProjectCard
          thumbnail={danahlogo}
          description="Official E-commerce website for Al Danah Fisheries in Kuwait"
          title="Al Danah Fisheries"
          link="/works/danah"
        />
        <ProjectCard
          thumbnail={sweetatLogo}
          description="An online sweets ordering platform active in Kuwait "
          title="Sweetat"
          link="/works/sweetat"
        />
        <ProjectCard
          thumbnail={mrglogo}
          description="Official E-commerce website for MRG mall in Kuwait"
          title="MRG"
          link="/works/mrg"
        />
      </div>
    </Section>
  );
};

export default Projects;

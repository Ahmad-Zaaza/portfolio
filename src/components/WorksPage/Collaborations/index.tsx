import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import ProjectCard from "../ProjectCard";
import hissahLogo from "../../../../public/images/hissahlogo.jpg";

const Collaborations = () => {
  return (
    <Section>
      <SectionTitle>Collaborations</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProjectCard
          thumbnail={hissahLogo}
          description="Hissah is an educational platform, where students can find online tutors "
          title="Hissah"
          // link="https://www.hissah.com/"
          link="/works/hissah"
        />
      </div>
    </Section>
  );
};

export default Collaborations;

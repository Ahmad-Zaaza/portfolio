import { Project } from "@/lib/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { baseURL } from "@/lib/config";
import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Projects = ({ projects }: PageProps) => {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-x-8 gap-y-10 grid-cols-[repeat(auto-fill,minmax(215px,1fr))] md:grid-cols-2">
        {projects.map(project => (
          <ProjectCard
            key={project.name}
            thumbnail={project.logo}
            description={project.description}
            title={project.name}
            link={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps<{
  projects: Project[];
}> = async () => {
  const json = await fetch(`${baseURL}/projects.json`);
  const projects = await json.json();
  return {
    props: { projects }
  };
};

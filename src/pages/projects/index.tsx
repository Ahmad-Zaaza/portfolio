import { Project } from "@/lib/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
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

import path from "path";
import fs from "fs/promises";
export const getStaticProps: GetStaticProps<{
  projects: Project[];
}> = async () => {
  // const json = await fetch(`${baseURL}/projects.json`);
  const filePath = path.join(process.cwd(), "projects.json");

  const fileData = await fs.readFile(filePath);
  const projects = JSON.parse(fileData as any) as Project[];
  return {
    props: { projects }
  };
};

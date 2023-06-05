import { Project } from "@/lib/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Project = ({ projects }: PageProps) => {
  console.log({ projects });
  return <div>Project</div>;
};

export default Project;

export const getStaticProps: GetStaticProps<{
  projects: Project[];
}> = async () => {
  const json = await fetch("/projects/projects.json");
  const projects = await json.json();
  return {
    props: { projects }
  };
};

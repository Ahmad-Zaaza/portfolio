import WorkLayout from "@/components/layouts/WorkLayout";
import SectionTitle from "@/components/Section/SectionTitle";
import { Meta, WorkTitle, WorkYear } from "@/components/Work/work";
import { baseURL } from "@/lib/config";
import { Project } from "@/lib/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import React from "react";
import { GoLinkExternal } from "react-icons/go";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Project = ({ project }: PageProps) => {
  return (
    <WorkLayout title={project.name}>
      <WorkTitle>
        {project.name} <WorkYear>{project.year}</WorkYear>
      </WorkTitle>
      <ul className="grid grid-cols-1 gap-1 my-4">
        <li className="flex items-center">
          <Meta>Website</Meta>
          <a
            className="ml-4 text-primary"
            target="_blank"
            rel="noreferrer"
            href={project.href}
          >
            {project.href}
            <GoLinkExternal className="inline" />
          </a>
        </li>
        <li className="flex items-center">
          <Meta>Stack</Meta>
          <p className="inline ml-4">
            {/* @ts-expect-error */}
            {project.stack.reduce((prev, curr) => [prev, ", ", curr])}
          </p>
        </li>
      </ul>
      <p>{project.description}</p>
      {project.screenshots.length > 0 && (
        <>
          <SectionTitle underline>Screenshots</SectionTitle>
          <div className="grid grid-cols-1 gap-8 mt-8">
            {project.screenshots.map(image => (
              <Image
                key={image}
                height={550}
                src={image}
                width={450}
                className="mx-auto rounded"
                alt="app-screenshot"
              />
            ))}
          </div>
          {project.mobileScreenshots.length > 0 && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-8 mt-8">
              {project.mobileScreenshots.map(image => (
                <Image
                  key={image}
                  src={image}
                  height={450}
                  width={250}
                  className="mx-auto rounded"
                  alt="app-mobile-screenshot"
                />
              ))}
            </div>
          )}
        </>
      )}
    </WorkLayout>
  );
};

export default Project;

export const getStaticProps: GetStaticProps<{
  project: Project;
}> = async ({ params }) => {
  const json = await fetch(`${baseURL}/projects.json`);

  const projects = (await json.json()) as Project[];
  const project = projects.find(p => p.slug === params?.slug);
  if (project) {
    return {
      props: { project }
    };
  } else {
    return {
      notFound: true
    };
  }
};
export const getStaticPaths: GetStaticPaths = async () => {
  const json = await fetch(`${baseURL}/projects.json`);
  const projects = (await json.json()) as Project[];
  const paths = projects.map(p => ({ params: { slug: p.slug } }));
  return {
    paths,
    fallback: "blocking"
  };
};

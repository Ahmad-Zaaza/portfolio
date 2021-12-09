import Collaborations from "@/components/WorksPage/Collaborations";
import Projects from "@/components/WorksPage/Projects";
import type { NextPage } from "next";

const WorksPage: NextPage = () => {
  return (
    <article>
      <Projects />
      <Collaborations />
    </article>
  );
};

export default WorksPage;

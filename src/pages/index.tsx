import Section from "@/components/Section";
import Bio from "@/components/Sections/Bio";
import OnTheWeb from "@/components/Sections/OnTheWeb";
import Work from "@/components/Sections/Works";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <article>
      <Section>
        <div className="flex-col md:flex md:justify-between md:items-center md:flex-row ">
          <div>
            <h1 className="font text-4xl font-bold">Ahmad Zaaza</h1>
            <p className="font-medium">
              Frontend web developer (React JS / Next js)
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/ahmad.jpg"
              alt="profile"
              className="border-white inline-block border-2 rounded-full w-24 h-24 mt-4 md:ml-4 md:mt-0"
            />
          </div>
        </div>
      </Section>
      <Work />
      <Bio />
      <OnTheWeb />
    </article>
  );
};

export default Home;

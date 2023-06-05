import Section from "@/components/Section";
import OnTheWeb from "@/components/Sections/OnTheWeb";
import About from "@/components/Sections/About";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <article>
      <Section>
        <div className="flex-col md:flex md:justify-between md:items-center md:flex-row ">
          <div>
            <h1 className="text-4xl font-bold font">Ahmad Zaaza</h1>

            <p className="font-medium">
              Frontend software developer (React JS / Next js)
            </p>
          </div>
          {/* <div className="text-center">
            <Image
              src="/images/ahmad.jpg"
              alt="profile"
              width={100}
              height={100}
              className="inline-block object-cover mt-4 border-2 border-white rounded-full md:ml-4 md:mt-0"
            />
          </div> */}
        </div>
      </Section>
      <About />
      {/* <Bio /> */}
      <OnTheWeb />
    </article>
  );
};

export default Home;

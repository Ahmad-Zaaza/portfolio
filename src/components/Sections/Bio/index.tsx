import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";

const Bio = () => {
  return (
    <Section delay={0.2}>
      <SectionTitle underline>Bio</SectionTitle>
      <div className="bio-section">
        <span className="bio-year">1994</span>
        <p>Born in Abudhabi, UAE.</p>
      </div>
      <div className="bio-section">
        <span className="bio-year">2016</span>
        <p>
          Graduated from Faculty of dentistry in Damascus University, Syria.
        </p>
      </div>
      <div className="bio-section">
        <span className="bio-year">2017</span>
        <p>Worked as a dentist.</p>
      </div>
      <div className="bio-section">
        <span className="bio-year">8/2019</span>
        <p>Wrote his first line of code.</p>
      </div>
      <div className="bio-section">
        <span className="bio-year">2/2020 to 12/2021 </span>
        <p>
          Worked at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-primary"
            href="https://mamacgroup.com"
          >
            MAMAC group
          </a>{" "}
          as a React Developer.
        </p>
      </div>
      <div className="bio-section">
        <span className="bio-year">8/2021 to 10/2021 </span>
        <p>
          Worked at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-primary"
            href="https://tradinos.com"
          >
            Tradinos UG
          </a>{" "}
          as a React Developer for a two months contract.
        </p>
      </div>
    </Section>
  );
};

export default Bio;

import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const OnTheWeb = () => {
  return (
    <Section delay={0.3}>
      <SectionTitle underline>On the web</SectionTitle>
      <ul role="list" className="flex gap-4">
        <li>
          <a
            className="hover:no-underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ahmad-zaaza"
          >
            <button className="btn btn-primary">
              <AiFillLinkedin className="mr-2" size={20} />
              Linkedin
            </button>
          </a>
        </li>
        <li>
          <a
            className="hover:no-underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Ahmad-Zaaza"
          >
            <button className="btn btn-primary">
              <AiFillGithub className="mr-2" size={20} />
              GitHub
            </button>
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default OnTheWeb;

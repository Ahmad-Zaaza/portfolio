import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import { AiFillLinkedin } from "react-icons/ai";
const OnTheWeb = () => {
  return (
    <Section delay={0.3}>
      <SectionTitle underline>On the web</SectionTitle>
      <ul role="list">
        <li>
          <a
            className="hover:no-underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ahmad-zaaza-51417b1a1"
          >
            <button className="btn btn-primary">
              <AiFillLinkedin className="mr-2" size={20} />
              @ahmad-zaaza
            </button>
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default OnTheWeb;

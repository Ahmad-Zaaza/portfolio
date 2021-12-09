import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import { AiFillLinkedin } from "react-icons/ai";
const OnTheWeb = () => {
  return (
    <Section>
      <SectionTitle underline>On the web</SectionTitle>
      <ul role="list">
        <li>
          <a
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

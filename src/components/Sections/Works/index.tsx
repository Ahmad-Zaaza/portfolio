import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
const Work = () => {
  return (
    <Section delay={0.1}>
      <SectionTitle underline>Work</SectionTitle>
      <p>
        Ahmad Zaaza is a self taught web developer based in Dubai, UAE with a
        passion for building user interfaces.
      </p>
      <p>
        He originally studied dentistry, but when he first came in touch with
        code
      </p>
      <div className="text-center mt-2">
        <Link passHref href="/works">
          <button className="btn btn-primary">
            My Portfolio <MdKeyboardArrowRight className="ml-2" size={20} />
          </button>
        </Link>
      </div>
    </Section>
  );
};

export default Work;

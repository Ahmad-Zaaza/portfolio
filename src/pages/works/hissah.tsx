import WorkLayout from "@/components/layouts/WorkLayout";
import SectionTitle from "@/components/Section/SectionTitle";
import { Meta, WorkTitle, WorkYear } from "@/components/Work/work";
import hissah1 from "../../../public/images/hissah1.png";
import hissah2 from "../../../public/images/hissah2.png";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";

const Mrg = () => {
  return (
    <WorkLayout title="Hissah">
      <WorkTitle>
        Hissah <WorkYear>2021</WorkYear>
      </WorkTitle>
      <p>
        Hissah is an educational platform where students can find tutors and
        take online lessons (Video and audio), with an interactive interface.
        This project is based in Dubai, UAE.
      </p>
      <ul className="my-4 grid grid-cols-1 gap-1">
        <li className="flex items-center">
          <Meta>Website</Meta>
          <a
            target="_blank"
            rel="noreferrer"
            className="ml-4 text-primary"
            href="https://hissah.com"
          >
            https://hissah.com <GoLinkExternal className="inline" />
          </a>
        </li>
        <li className="flex items-center">
          <Meta>Stack</Meta>
          <p className="ml-4 inline">
            React, Laravel, Firebase, AWS, PostgreSQL.
          </p>
        </li>
      </ul>

      <SectionTitle underline>Gallery</SectionTitle>
      <div className="grid grid-cols-1 gap-8 mt-8">
        <Image src={hissah1} className="rounded" alt="hissah preview" />
        <Image src={hissah2} className="rounded" alt="hissah preview" />
      </div>
    </WorkLayout>
  );
};

export default Mrg;

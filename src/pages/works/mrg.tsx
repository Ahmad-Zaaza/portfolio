import WorkLayout from "@/components/layouts/WorkLayout";
import SectionTitle from "@/components/Section/SectionTitle";
import { Meta, WorkTitle, WorkYear } from "@/components/Work/work";
import mrg1 from "../../../public/images/mrg1.png";
import mrg2 from "../../../public/images/mrg2.png";
import mrg3 from "../../../public/images/mrg3.png";
import mrg4 from "../../../public/images/mrg4.png";
import { GoLinkExternal } from "react-icons/go";

import Image from "next/image";
const Mrg = () => {
  return (
    <WorkLayout title="MRG">
      <WorkTitle>
        MRG <WorkYear>2020</WorkYear>
      </WorkTitle>
      <p>
        MRG is the official website for MRG group in Kuwait. you can order MRG
        products online and it supports delivery.
      </p>
      <ul className="my-4 grid grid-cols-1 gap-1">
        <li className="flex items-center">
          <Meta>Website</Meta>
          <a
            className="ml-4 text-primary"
            target="_blank"
            rel="noreferrer"
            href="https://mrg-mall.com"
          >
            https://mrg-mall.co <GoLinkExternal className="inline" />
          </a>
        </li>
        <li className="flex items-center">
          <Meta>Stack</Meta>
          <p className="ml-4 inline">React, Laravel, PostgreSQL. </p>
        </li>
      </ul>

      <SectionTitle underline>Gallery</SectionTitle>
      <div className="grid grid-cols-1 gap-8 mt-8">
        <Image src={mrg1} className="rounded" alt="mrg-preview" />
        <Image src={mrg2} className="rounded" alt="mrg-preview" />
        <div className="grid grid-cols-2 gap-4">
          <Image src={mrg3} className="rounded" alt="mrg-preview" />
          <Image src={mrg4} className="rounded" alt="mrg-preview" />
        </div>
      </div>
    </WorkLayout>
  );
};

export default Mrg;

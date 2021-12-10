import WorkLayout from "@/components/layouts/WorkLayout";
import SectionTitle from "@/components/Section/SectionTitle";
import { Meta, WorkTitle, WorkYear } from "@/components/Work/work";
import sweetat1 from "../../../public/images/sweetat1.png";
import sweetat2 from "../../../public/images/sweetat2.png";
import sweetat3 from "../../../public/images/sweetat3.png";
import sweetat4 from "../../../public/images/sweetat4.png";
import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";
const Sweetat = () => {
  return (
    <WorkLayout title="Sweetat">
      <WorkTitle>
        Sweetat <WorkYear>2021</WorkYear>
      </WorkTitle>
      <p>
        Sweetat is an online shop for ordering and delivering sweets based in
        Kuwait.
      </p>

      <ul className=" my-4 grid grid-cols-1 gap-1">
        <li className="flex items-center">
          <Meta>Website</Meta>
          <a className="ml-4 text-primary" href="https://sweetat.co">
            https://sweetat.co <GoLinkExternal className="inline" />
          </a>
        </li>
        <li className="flex items-center">
          <Meta>Stack</Meta>
          <p className="ml-4 inline">React, Laravel, PostgreSQL. </p>
        </li>
      </ul>

      <SectionTitle underline>Gallery</SectionTitle>
      <div className="grid grid-cols-1 gap-8 mt-8">
        <Image src={sweetat1} className="rounded" alt="sweetat preview" />
        <Image src={sweetat2} className="rounded" alt="sweetat preview" />
        <div className="grid grid-cols-2 gap-4">
          <Image src={sweetat3} className="rounded" alt="sweetat preview" />
          <Image src={sweetat4} className="rounded" alt="sweetat preview" />
        </div>
      </div>
    </WorkLayout>
  );
};

export default Sweetat;

import WorkLayout from "@/components/layouts/WorkLayout";
import SectionTitle from "@/components/Section/SectionTitle";
import { Meta, WorkTitle, WorkYear } from "@/components/Work/work";
import mrg1 from "../../../public/images/mrg1.png";
import mrg2 from "../../../public/images/mrg2.png";
import mrg3 from "../../../public/images/mrg3.png";
import mrg4 from "../../../public/images/mrg4.png";
import { GoLinkExternal } from "react-icons/go";

import Image from "next/image";
const Crash = () => {
  return (
    <WorkLayout title="CrashMania">
      <WorkTitle>
        CrashMania <WorkYear>2023</WorkYear>
      </WorkTitle>
      <ul className="grid grid-cols-1 gap-1 my-4">
        <li className="flex items-center">
          <Meta>Website</Meta>
          <a
            className="ml-4 text-primary"
            target="_blank"
            rel="noreferrer"
            href="https://crashmania-git-new-approach-gencko94.vercel.app/"
          >
            https://crashmania-git-new-approach-gencko94.vercel.app/
            <GoLinkExternal className="inline" />
          </a>
        </li>
        <li className="flex items-center">
          <Meta>Stack</Meta>
          <p className="inline ml-4">React, Next js, WebSocket </p>
        </li>
      </ul>
      <p>
        This is a guessing game based on random numbers that progresses through
        a series of rounds. The goal of this game is to observe the rising
        Multiplier value, predict at which point it will freeze, and place
        points based on the prediction. At the beginning of each round, each
        player will be given a certain amount of points to start with. The
        starting points will be the same for all players. If a player guessed
        correctly, they win the round and will gain points calculated by the
        points placed multiplied by the Multiplier (points * multiplier).
        Otherwise, all points placed are lost.
      </p>

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

export default Crash;

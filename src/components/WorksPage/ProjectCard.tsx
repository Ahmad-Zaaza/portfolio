import Link from "next/link";
import Image from "next/image";
interface IProjectCardProps {
  link: string;
  title: string;
  description: string;
  thumbnail: StaticImageData;
}

const ProjectCard = ({
  description,
  link,
  title,
  thumbnail
}: IProjectCardProps) => {
  return (
    <div className="hover:-translate-y-1  transition-transform ease-in-out duration-300">
      <Link href={link} passHref>
        <a target="_blank" rel="noreferrer">
          <Image src={thumbnail} alt="title" className="rounded-lg" />

          <h3 className="text-gray-900 font-system  text-xl  text-center">
            {title}
          </h3>
          <p className="text-center text-grey-700 font-system">{description}</p>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
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
    <div className="transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <Link href={link} passHref>
        <Image src={thumbnail} alt="title" className="rounded-lg" />

        <h3 className="mt-4 mb-1 text-xl font-medium text-center">{title}</h3>
        <p className="text-center text-muted font-system">{description}</p>
      </Link>
    </div>
  );
};

export default ProjectCard;

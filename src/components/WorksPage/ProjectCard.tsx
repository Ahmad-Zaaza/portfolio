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
        <a>
          <Image src={thumbnail} alt="title" className="rounded-lg" />

          <h3 className="font-medium  text-xl  text-center">{title}</h3>
          <p className="text-center text-muted font-system">{description}</p>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;

import Link from "next/link";
import Image from "next/image";
interface IProjectCardProps {
  link: string;
  title: string;
  description: string;
  thumbnail: string;
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
        <div className="relative mx-auto max-w-[225px] h-[125px]">
          <Image
            fill
            src={thumbnail}
            alt="title"
            className="object-fill rounded-lg"
          />
          g
        </div>

        <h3 className="mt-4 mb-1 text-xl font-medium text-center">{title}</h3>
        <p className="text-center text-muted font-system line-clamp-3">{description}</p>
      </Link>
    </div>
  );
};

export default ProjectCard;

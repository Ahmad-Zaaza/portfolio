import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
export const WorkTitle: React.FC = ({ children }) => {
  return (
    <div className="mb-4">
      <Link href="/works" passHref>
        <a className="text-primary  inline-block">Works</a>
      </Link>
      <span>
        <BiChevronRight size={20} className="inline" />
      </span>
      <h2 className="font-bold inline text-xl font-body">{children}</h2>
    </div>
  );
};
export const WorkYear: React.FC = ({ children }) => {
  return (
    <span className="px-1 align-middle rounded text-xs bg-primary text-center">
      {children}
    </span>
  );
};
export const Meta: React.FC = ({ children }) => {
  return (
    <span className="px-1 font-bold align-middle rounded text-xs inline-block text-color-inverted bg-secondary uppercase  text-center">
      {children}
    </span>
  );
};

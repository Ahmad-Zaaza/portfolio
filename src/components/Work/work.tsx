import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
export const WorkTitle: React.FC = ({ children }) => {
  return (
    <div className="mb-4">
      <Link className="inline-block text-primary" href="/projects" passHref>
        Projects
      </Link>
      <span>
        <BiChevronRight size={20} className="inline" />
      </span>
      <h2 className="inline text-xl font-bold font-body">{children}</h2>
    </div>
  );
};
export const WorkYear: React.FC = ({ children }) => {
  return (
    <span className="px-1 text-xs text-center align-middle rounded bg-primary">
      {children}
    </span>
  );
};
export const Meta: React.FC = ({ children }) => {
  return (
    <span className="inline-block px-1 text-xs font-bold text-center uppercase align-middle rounded text-inverted bg-secondary">
      {children}
    </span>
  );
};

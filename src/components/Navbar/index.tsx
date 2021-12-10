import { NAV_MAX_WIDTH } from "@/lib/constants";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import classNames from "classnames";
import { useMemo } from "react";
import ThemeToggle from "../ThemeToggle";
const Navbar: NextPage = () => {
  const history = useRouter();

  return (
    <div className="fixed bg-opacity-75 bg-nav z-[1] backdrop-blur-md  top-0 left-0 right-0">
      <nav className={`container flex items-center ${NAV_MAX_WIDTH} py-4`}>
        <Link href="/">
          <a className="text-xl hover:no-underline font-bold">Ahmad Zaaza</a>
        </Link>
        <div className="ml-5">
          <LinkItem path={history.pathname} href="/works">
            Works
          </LinkItem>
          <LinkItem path={history.pathname} href="/contact">
            Contact
          </LinkItem>
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
};

export default Navbar;

const LinkItem: React.FC<{ path: string; href: string }> = ({
  href,
  path,
  children
}) => {
  const activeLink = useMemo(() => {
    return href === path;
  }, [path, href]);
  return (
    <Link href={href}>
      <a
        className={`${classNames("p-2 font-system rounded", {
          "bg-fill-primary text-primary-inverted": activeLink
        })}`}
      >
        {children}
      </a>
    </Link>
  );
};

import { NAV_MAX_WIDTH } from "@/lib/constants";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import classNames from "classnames";
import { useMemo } from "react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../ThemeToggle"), { ssr: false });

const Navbar: NextPage = () => {
  const history = useRouter();

  return (
    <div className="fixed bg-opacity-25 bg-nav z-[1] backdrop-blur-md  top-0 left-0 right-0">
      <nav className={`container flex items-center ${NAV_MAX_WIDTH} py-4`}>
        <Link className="text-xl font-bold hover:no-underline" href="/">
          Ahmad Zaaza
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
    <Link
      className={`${classNames("p-2 text-sm md:text-base font-system rounded", {
        "bg-primary text-inverted": activeLink
      })}`}
      href={href}
    >
      {children}
    </Link>
  );
};

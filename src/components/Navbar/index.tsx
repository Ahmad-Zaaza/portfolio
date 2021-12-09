import { NAV_MAX_WIDTH } from "@/lib/constants";
import { NextPage } from "next";

const Navbar: NextPage = () => {
  return (
    <div className="fixed bg-opacity-75 bg-gray-50 z-[1] backdrop-blur-md  top-0 left-0 right-0">
      <nav className={`container ${NAV_MAX_WIDTH} py-4`}>
        <h1 className="text-xl font-bold">Ahmad Zaaza</h1>
      </nav>
    </div>
  );
};

export default Navbar;

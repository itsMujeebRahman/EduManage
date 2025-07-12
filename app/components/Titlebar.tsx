import { Menu } from "lucide-react";
import React from "react";

interface props {
  setEnableNav: React.Dispatch<React.SetStateAction<boolean>>;
  selectMenu: string;
}

const Titlebar = ({ setEnableNav, selectMenu }: props) => {
  return (
    <div
      className="flex items-center justify-start md:p-[1vw] p-[3vw] gap-[3vw] bg-white shadow
    rounded-t-xl border-b border-gray-200 h-1/10"
    >
      <Menu
        className="md:hidden w-[10vw] h-[5vh] "
        onClick={() => setEnableNav(true)}
      />
      <div>
        <p className="font-semibold text-l md:text-[1.5vw]">
          {selectMenu}{" "}
          {selectMenu === "Teachers" ? " / Mujeeb Rahman" : selectMenu}
        </p>
      </div>
    </div>
  );
};

export default Titlebar;

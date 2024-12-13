import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="h-14 bg-gray-200 flex justify-center">
      <ul className="max-w-[768px] m-auto grid grid-cols-5 gap-4">
        <NavItem label={"Design"} />
        <NavItem label={"Gallery"} />
        <NavItem label={"Video"} />
        <NavItem label={"Building Solutions"} />
        <NavItem label={"About Us"} />
      </ul>
    </nav>
  );
};

export default Navbar;

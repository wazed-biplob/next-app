"use client";
import React from "react";
import NavLinks from "./NavLinks";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blog",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="border flex flex-row justify-between">
          {navLinks.map(({ path, title }) => (
            <li key={path}>
              <NavLinks activeClassName="bg-sky-500" href={path}>
                {title}
              </NavLinks>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

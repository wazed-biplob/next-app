'use client'
import React from "react";
import NavLinks from "./NavLinks";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/blog",
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
        <ul className="border bg-slate-600 flex flex-row justify-between text-white">
          {navLinks.map(({ path, title }) => (
            <li key={path}>
              <NavLinks activeClassName='text-blue-500' href={path}>{title}</NavLinks>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

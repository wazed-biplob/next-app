import Link from "next/link";
import React from "react";
const navLinks = [
  { path: "/dashboard", title: "Dashboard" },
  { path: "/dashboard/add-product", title: "Add Product" },
  { path: "/", title: "Home" },
];
const Sidebar = () => {
  return (
    <aside>
      <h1>Sidebar</h1>
      <ul>
        {navLinks.map(({ path, title }) => (
          <li key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

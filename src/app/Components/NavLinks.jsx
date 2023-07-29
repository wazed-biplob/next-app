import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "@/utils/classNames";

const NavLinks = ({ children, href, activeClassName, ...props }) => {
  const path = usePathname();

  const active = path.startsWith(href);

  const classes = classNames(props.className, active && activeClassName);
  if (classes) {
    props.classes = classes;
  }
  return (
    <div>
      <Link href={href} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default NavLinks;

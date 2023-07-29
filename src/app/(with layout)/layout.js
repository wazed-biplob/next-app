import Link from "next/link";
import React from "react";
import Navbar from "../Components/Navbar";

const WithLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      {children}
      <footer>
        <h1 className="text-center bg-sky-300 border">Footer</h1>
      </footer>
    </div>
  );
};

export default WithLayout;

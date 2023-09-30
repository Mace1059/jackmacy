import React from "react";
import Link from "next/link";
import "./navbar.scss";

const NavBar = (props) => {
  return (
    <header>
      <div className="navbar">
        <div className="name">
          <h2>Jack Macy</h2>
        </div>
        <div className="buttons">
          <Link href={`/`}>
            Home
          </Link>
          <Link href={"/work"}>
            Work
          </Link>
          <Link href={"/about"}>
            About
          </Link>
          <Link href={"/gallery"}>
            Gallery
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

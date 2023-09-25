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
            <button>Home</button>
          </Link>
          <Link href={"/work"}>
            <button>Work</button>
          </Link>
          <Link href={"/about"}>
            <button>About</button>
          </Link>
          <Link href={"/gallery"}>
            <button>Gallery</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

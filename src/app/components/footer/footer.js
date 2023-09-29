import React from "react";
import "./footer.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="waves"></div>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", zIndex: "999" }}>
        <Link
          href="https://drive.google.com/file/d/1NPkW0gf9p0VO6W4eGUWdPyRlGs_tScCW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
        •
        <Link
          href="https://www.linkedin.com/in/jack-macy-b227a8239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

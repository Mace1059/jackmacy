import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./workcontainer.scss";

const WorkContainer = (props) => {
  const slug = props.id;
  console.log(slug);
  return (
    <Link
      // href="/"
      href={`/work/${encodeURIComponent(slug)}`}
      className="work-container"
    >
      <div className="work-left-container">
        <h1>{props.title}</h1>
        {props.subtitle ? <h2>{props.subtitle}</h2> : null}
        <h4>{props.text}</h4>
      </div>
      {props.image ? (
        <div className="cropper">
          <Image
            className="image"
            src={props.image}
            width={500}
            height={500}
            alt="Work Photo"
          />
        </div>
      ) : null}
    </Link>
  );
};

export default WorkContainer;

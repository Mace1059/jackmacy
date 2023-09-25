import "./home.scss";
import Image from "next/image";
import Labels from "./components/labels/labels";

import fish from "./photos/jack_fish.png";
import mountain from "./images/mountain.svg";

const colors = [
  "#006633",
  "#a463d6",
  "#3f60a6",
  "#d9705b",
  "#273187",
  "#c4af52",
  "#540094",
  "#00b5b2",
];

const labels = [
  { text: "Dartmouth College Undergraduate", color: "#006633" },
  { text: "Computer Science Major", color: "#a463d6" },
  { text: "Mathematical Finance Major", color: "#3f60a6" },
  { text: "DALI Lab Full Stack Developer", color: "#d9705b" },
  { text: "Video Editor", color: "#273187" },
  { text: "Sigma Nu Delta Beta Fraternity Executive", color: "#c4af52" },
  { text: "Fantasy Football Champion", color: "#540094" },
  { text: "AI/ML Programmer", color: "#a463d6" },
  { text: "Neukom Scholar", color: "#d9705b" },
  { text: "Swim Instructor", color: "#00b5b2" },
  { text: "Skate Instructor", color: "#00b5b2" },
  { text: "mGame, Chambiar, and BrackIt! Developer", color: "#d9705b" },
  { text: "Proud Owner of Frankenfish", color: "#006633" },
];

export default function Home() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    // <div className="center">
      <div className="container">
        <Image
          className="mountains"
          src={mountain}
          width={500}
          height={500}
          alt="mountains"
        />
        <div className="left-container">
          <h1>
            Hi, I'm <span>Jack, </span>
            <span style={{ fontSize: "50px", verticalAlign: "center" }}>
              and I'm a
            </span>
          </h1>

          <Labels labels={labels} />

          <h3 className="work-text">Take a look at my work!</h3>
        </div>
        <Image
          className="image"
          src={fish}
          // layout={"fill"}
          objectFit={"contain"}
          alt="Picture of the author"
        />
      </div>
    // </div>
  );
}

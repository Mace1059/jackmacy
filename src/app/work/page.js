import WorkContainer from "../components/WorkContainer/workcontainer";
// images
import pic from "../photos/jack_fish.png";
import mGame from "../photos/mGame.png"
import DALI from "../photos/DALI.png"

import "./work.scss"

const jsonFile = require("./work.json");




export default function Page() {
  return (
    <div>
      <div className="work-page-container">
        {jsonFile.map((work) => (
          <WorkContainer
            key={work.title}
            title={work.title}
            subtitle={work.subtitle}
            // text={work.text}
            id={work.id}
            // image={work.image}
          ></WorkContainer>
        ))}
      </div>
    </div>
  );
}

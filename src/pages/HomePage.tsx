import CSS from "csstype";
import "../styles/components.scss"
import 'animate.css';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import WorkSection from "../components/worksection";
import WorkItem from "../components/workitem";
import TSE from "/tse.png"
import Markov from "/markov.png"
import mgame from "/mgame.png"
import mural from "/mural.jpg"
import coldwar from "/coldwar.png"
import plastic from "/plastic.png"
import forumsys from "/forumsys.jpg"
import chambiar from "/chambiar.svg"
import comingsoon from "/comingsoon.jpg"
import inforest from "/inforest.jpg"
import dartmouth from "/dartmouth.jpg"
import options from "/options.png"

import Timeline from "../components/timeline";

function JoinPage() {

  return (
    <div>
      <div className="center" style={{ ...introStyles }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}>
          <div className="animate__animated animate__fadeInDown " style={{ fontSize: "70px" }}>
            {`Hey there, I'm \nJack Macy`}
          </div>
          <div style={{ fontSize: "50px" }}>
            I'm a student at <span style={{ color: "#00693e", fontWeight: "bold", fontFamily: "DartmouthRuzicka,Georgia,serif" }}>Dartmouth College</span> studying
            <span style={{ fontWeight: "bold" }}> Computer Science</span> and
            <span style={{ fontWeight: "bold" }}> Economics + Mathematics</span>
          </div>
        </div>
      </div>

      <div className="center" style={{ ...introStyles, margin: "20px 100px" }}>
        <div style={{ display: "flex", flexDirection: "column", pointerEvents: "none", color: "black" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", gap: "10px", marginBottom: "70px" }}>{`Check out my work experience  `}
            <SouthOutlinedIcon></SouthOutlinedIcon>
          </div>
          <Timeline />
        </div>
      </div>

      <div className="center" style={{ ...introStyles }}>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", gap: "10px" }}>{`Check out my work below  `}
          <SouthOutlinedIcon></SouthOutlinedIcon>
        </div>
        <WorkSection title="DALI Lab">
          <WorkItem image={<img src={mgame} ></img>} title="mGame" role="Full Stack Developer" description=""></WorkItem>
          <WorkItem image={<img src={plastic}></img>} title="PlastiCycle" role="Full Stack Developer" description=""></WorkItem>
          <WorkItem image={<img src={inforest}></img>} title="InForest" role="Full Stack Developer" description=""></WorkItem>

        </WorkSection>
        <WorkSection title="Computer Science Work">
          <WorkItem image={<img src={forumsys}></img>} title="SecureGPT" role="Full Stack Developer" description=""></WorkItem>
          <WorkItem image={<img src={chambiar}></img>} title="Chambiar" role="Full Stack Developer" description=""></WorkItem>
          <WorkItem image={<img src={TSE}></img>} title="Tiny Search Engine" role="Software Engineer" description=""></WorkItem>
          <WorkItem image={<img src={Markov}></img>} title="Hidden Markov Model POS Tagger" role="Software Engineer" description=""></WorkItem>
          <WorkItem image={<img src={comingsoon}></img>} title="BrackIt!" role="Full Stack Developer" description=""></WorkItem>
        </WorkSection>

        <WorkSection title="Economics + Mathematics Work">
          <WorkItem image={<img src={dartmouth}></img>} title="Econometrics Final Project" role="" description=""></WorkItem>
          <WorkItem image={<img src={options}></img>} title="Theoretical Options Pricing" role="" description=""></WorkItem>
        </WorkSection>

        <WorkSection title="Creative Projects">
          <WorkItem image={<img src={mural}></img>} title="Art" role="Artist / Graphic Designer" description=""></WorkItem>
          <WorkItem image={<img src={coldwar}></img>} title="Video Production" role="Director / Video Editor" description=""></WorkItem>
        </WorkSection>
      </div>
    </div>
  )
}

export default JoinPage

const introStyles: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
  fontSize: "20px"
}

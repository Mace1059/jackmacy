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
import matte from "/matte.png"
import yalnix from "/yalnix.png"
import bond from "/bond.png"
import rpp from "/rpp.png"

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
          <WorkItem
            image={<img src={mgame} alt="mGame" />}
            title="mGame"
            role="Full Stack Developer"
            description="A React + Firebase application designed to help connect patients with their providers during their path to recovery. Characterized by a simple UI and easy-to-follow metrics calculated through a weekly check-up. Deployed and shipped to partners in May 2023. Created in partnership with the Dartmouth Hitchcock Medical Center."
            accomplishments={[
              "Firebase backend integration",
              "UI Typescript overhaul",
              "Deployed and shipped to partners in May 2023",
            ]}
            av="Repository No Longer Accessible due to change in ownership."
            links={[
"              https://github.com/dali-lab/mgame-frontend"
            ]}
          />
          <WorkItem image={<img src={plastic}></img>} title="PlastiCycle" role="Full Stack Developer" description="A React Native + MongoDB application designed to encourage students to recycle through a tamagotchi-inspired “Plasty” by scanning the plastic recycling symbol found on plastic products. Used a Pytorch model to quickly determine polymer and educate the user on its properties and correct recycling habits. Created in partnership with the Dartmouth Chemistry Department."></WorkItem>
          <WorkItem image={<img src={inforest}></img>} title="InForest" role="Full Stack Developer" description="A React + Zustand application that utilized the Google Maps API to plot and track agricultural data. Data is persisted and saved for future use without the need for wifi. Deployed and shipped in May 2024. Created in partnership with Professor Ong's Department of Agriculture at Dartmouth College."></WorkItem>

        </WorkSection>
        <WorkSection title="Computer Science Work">
          <WorkItem image={<img src={forumsys}></img>} title="SecureGPT" role="Full Stack Developer" description="An application allowing for safe and secure interactions with an LLM through data obfuscation. Added excel functionality through the creation of a code self-execution framework leveraging python libraries like pandas and scikit. Utilizes a dual-model preprocessor for nonnumeric data and a Chain of Thought model for data analysis. Created by Quantum Gears at Forum Systems."></WorkItem>
          <WorkItem image={<img src={bond}></img>} title="Bond" role="Student"
            description="Bond is a DIY AI Agent on our custom SaaS platform that leverages a simple UML UI. In its current state, it effectively manipulates user data. It uses a React Typescript frontend, Flask backend, and a novel infrastructure for UML-based flows. Bond can execute its own code in a safe environment in order to accomplish specific tasks. Created in CS98 at Dartmouth College."
            accomplishments={[
              "Achieved a functional MVP in 20 weeks",
              "Successfully developed over 20 data manipulation tools",
              "Can easily structure and unstructure data",
              "Reusable code execution framework",
            ]}
            av="Backend is currently down for cost-saving reasons. Please refer to the video demo."
            links={[
              "https://bond-agent.onrender.com/",
              "https://github.com/dartmouth-cs98-24f/project-diy-ai-agent",
              "https://vimeo.com/1064513426?share=copy",
              "https://medium.com/@rebecca.e.ronai.25/bond-2a4a3c0a10ec"
            ]}
          />
          <WorkItem image={<img src={matte}></img>} title="Zero-Shot Image Matting with HQ-SAM" role="Student Research" 
                      description="Bond is a DIY AI Agent on our custom SaaS platform that leverages a simple UML UI. In its current state, it effectively manipulates user data. It uses a React Typescript frontend, Flask backend, and a novel infrastructure for UML-based flows. Bond can execute its own code in a safe environment in order to accomplish specific tasks. Created in CS98 at Dartmouth College."
            accomplishments={[
              "Achieved a functional MVP in 20 weeks",
              "Successfully developed over 20 data manipulation tools",
              "Can easily structure and unstructure data",
              "Reusable code execution framework",
            ]}
            av="Backend is currently down for cost-saving reasons. Please refer to the video demo."
            links={[
              "https://bond-agent.onrender.com/",
              "https://github.com/dartmouth-cs98-24f/project-diy-ai-agent",
              "https://vimeo.com/1064513426?share=copy",
              "https://medium.com/@rebecca.e.ronai.25/bond-2a4a3c0a10ec"
            ]}
          />
          <WorkItem image={<img src={rpp}></img>} title="Risk Budgeting Portfolio Algorithm" role="Student Research" description="Culminating Experience"></WorkItem>
          <WorkItem image={<img src={chambiar}></img>} title="Chambiar" role="Full Stack Developer" description=""></WorkItem>
          <WorkItem image={<img src={TSE}></img>} title="Tiny Search Engine" role="Student" description=""></WorkItem>
          <WorkItem image={<img src={Markov}></img>} title="Hidden Markov Model POS Tagger" role="Student" description=""></WorkItem>
          <WorkItem image={<img src={yalnix}></img>} title="Yalnix" role="Student" description=""></WorkItem>
          <WorkItem image={<img src={comingsoon}></img>} title="BrackIt!" role="Full Stack Developer" description="Coming Soon!"></WorkItem>
        </WorkSection>

        <WorkSection title="Economics + Mathematics Work">
          <WorkItem image={<img src={dartmouth}></img>} title="Topics in Finance Final Project" role="Student Research" description="Culminating Experience"></WorkItem>
          <WorkItem image={<img src={dartmouth}></img>} title="Econometrics Final Project" role="Student Research" description=""></WorkItem>
          <WorkItem image={<img src={options}></img>} title="Theoretical Options Pricing" role="Student Research" description=""></WorkItem>
        </WorkSection>

        <WorkSection title="Creative Projects">
          <WorkItem image={<img src={coldwar}></img>} title="The Cold War" role="Director / Video Editor" 
            description="Directed, produced, and edited The Cold War, a film all about a snowball fight taken one step further. Produced in Film 47: Advanced Filmmaking and Editing at Dartmouth College."
            accomplishments={[
              "Over 100 hours of video editing and production",
              "Developed camera and lighting skills and techniques",
              "Created custom music and sound effects",
              "Selected as cover project for film screening",
              "Earned a faculty citation for academic excellence: Very hard worker. Goal-oriented. Honest and thoughtful.",
            ]}
            links={[
              "https://www.youtube.com/watch?v=iinf480Ules"
            ]}
          />
          <WorkItem image={<img src={mural}></img>} title="Lodj Croo Merchandise Design" role="Graphic Designer" description="Creative Projects"></WorkItem>
          <WorkItem image={<img src={mural}></img>} title="Sigma Nu Mural" role="Studio Artist" description="Creative Projects"></WorkItem>
          <WorkItem image={<img src={mural}></img>} title="Personal Website" role="Frontend Engineer" description="Creative Projects"></WorkItem>

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

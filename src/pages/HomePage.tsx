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
import inforest from "/inforest.png"
import dartmouth from "/dartmouth.jpg"
import options from "/options.png"
import matte from "/matte.png"
import yalnix from "/yalnix.png"
import bond from "/bond.png"
import rpp from "/rpp.png"
import lodj from "/lodjcroo.png"
import nuggets from "/nuggets.png"
import logo from "/logo.svg";

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
          <div className="animate__animated animate__fadeInDown " style={{ fontSize: "100px" }}>
            {`Jack Macy`}
          </div>
          <div style={{ fontSize: "50px", marginTop: "4rem" }}>
            I'm a recent graduate from <span style={{ color: "#00693e", fontWeight: "bold", fontFamily: "DartmouthRuzicka,Georgia,serif" }}>Dartmouth College</span> with a
            <span style={{ fontWeight: "bold" }}> B.A. in Computer Science</span> and a
            <span style={{ fontWeight: "bold" }}> B.A. in Economics + Mathematics</span>
          </div>
        </div>
      </div>

      <div className="center" style={{ ...introStyles }}>
        <div style={{ display: "flex", flexDirection: "column", pointerEvents: "none", color: "black" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", gap: "10px", marginBottom: "70px" }}>{`Check out my recent work experience  `}
            <SouthOutlinedIcon></SouthOutlinedIcon>
          </div>
          <Timeline />
        </div>
      </div>

      <div className="center" style={{ ...introStyles }}>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", gap: "10px" }}>{`Check out my work below  `}
          <SouthOutlinedIcon></SouthOutlinedIcon>
        </div>

        <WorkSection title="Internships">
          <WorkItem image={<img src={forumsys}></img>} title="SecureGPT Multi-LLM Gateway" role="AI Developer" 
            description="Worked on the SecureGPT Multi-LLM Gateway, an application allowing for safe and secure interactions with an LLM through data obfuscation. Added excel functionality through the creation of a code self-execution framework leveraging python libraries like pandas and scikit. Utilizes a dual-model preprocessor for nonnumeric data and a Chain of Thought model for data analysis. Responsible for mentoring other interns and attending daily team meetings. Created by Quantum Gears at Forum Systems."
            accomplishments={[
              "Spearheaded a chain-of-thought architecture for statistical analysis within Excel sheets, improving a gpt-4 baseline by 11%",
              "Pitched and designed an efficient dual-embedding file preprocessor, decreasing company-wide testing times by 93%",
              "Redesigned system prompting to improve recall and precision scores for relevant Excel data during data retrieval",
              "Performed system and regression testing to identify weaknesses in SecureGPT’s data obfuscation",
            ]}
            av="No repository or demo available."
            links={[
              "https://hbr.org/2024/08/how-one-major-healthcare-firm-became-the-leader-in-innovative-ai-use?ab=HP-hero-featured-image-1",
            ]}
          />
          <WorkItem image={<img src={chambiar}></img>} title="Chambiar: AI Interview Bot" role="Full Stack AI Developer"
            description="Chambiar is a web application that allows underprivileged communities access AI interview video and audio bots for practice and career preparation. It scrapes the web for job postings and relevant news. Utilized Elevenlabs for audio generation, and Llama-2 for seamless UI
navigation. Built with a React Typescript frontend, Flask backend, and MongoDB database. Hired as a freelance developer to build a functional MVP in 5 months."
            accomplishments={[
              "Achieved a functional MVP in 5 months",
              "Worked in a scrum team of 3 developers with weekly sprints and effective work distribution",
              "Implemented figma designs according to the CEO's vision",
              "Created a custom audio generation pipeline using Elevenlabs",
              "Implemented a Llama-2 API handler for seamless UI navigation",
              "Received $300k in Google investment grants",
              "Successfully accepted into the Workbox Future of Work accelerator program",
            ]}
            av="Repository no longer accessible due to change in ownership."
          />


        </WorkSection>

        <WorkSection title="Computer Science Work">
          <WorkItem image={<img src={bond}></img>} title="Bond: DIY AI Agent" role="Full Stack AI Developer"
            description="Bond is a DIY AI Agent on our custom SaaS platform that leverages a simple UML UI. In its current state, it effectively manipulates user data. It uses a React Typescript frontend, Flask backend, and a novel infrastructure for UML-based flows. Bond can execute its own code in a safe environment in order to accomplish specific tasks. Created in CS98 at Dartmouth College."
            accomplishments={[
              "Achieved a functional MVP in 20 weeks",
              "Successfully developed over 20 data manipulation tools",
              "Can easily interchange structured and unstructured data",
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

          <WorkItem image={<img src={rpp}></img>} title="Risk Budgeting Portfolio Algorithm" role="Research"
            description="Designed a new portfolio optimization algorithm in Python that uses a risk budgeting model to return the optimal equity risk
contribution that maximizes short-run returns. It uses cyclical coordinate descent to solve the optimization problem with adjustable hyperparameters for time data. Created in the culminating experience Econ 66: Topics in Finance at Dartmouth College. Worked with award winning economist Tomas Jagelka. Coded in python and used pandas, numpy, and scipy libraries."
            accomplishments={[
              "Designed a novel risk budgeting portfolio algorithm for short-run returns",
              'Earned a faculty citation for academic excellence: "Jack creatively combined his knowledge of computer sciences with economic intuitions to propose a novel take on optimal portfolio construction. His enthusiastic in-class participation enriched the seminar and contributed to the learning of his classmates, and to mine also."',
            ]}
            links={[
              "https://github.com/Mace1059/SushiTuesday"
            ]}
          />

          <WorkItem image={<img src={plastic}></img>} title="PlastiCycle" role="Full Stack/ML Engineer"
            description="A React Native + MongoDB DALI application designed to encourage students to recycle through a tamagotchi-inspired “Plasty” by scanning the plastic recycling symbol found on plastic products. Used a Pytorch model to quickly determine polymer and educate the user on its properties and correct recycling habits. Created in partnership with the Dartmouth Chemistry Department."
            accomplishments={[
              "Achieved 83% accuracy on polymer classification using a Pytorch model",
              "Accurately implemented figma designs according to the CEO's vision",
              "Effectively educated users on recycling habits",
            ]}
            av="Updated repository no longer accessible due to change in ownership. Code tour available."
            links={[
              "https://github.com/dali-lab/plastic-sorting-frontend",
              "https://github.com/dali-lab/plastic-sorting-backend"
            ]}
          />
          <WorkItem image={<img src={inforest}></img>} title="InForest" role="Full Stack Developer" 
            description="A React Typescript + Zustand application utilizing the Google Maps API to plot and track agricultural data. Data is persistent and saved for future use without the need for wifi. Deployed and shipped in May 2024. Created in partnership with Professor Ong's Department of Agriculture at Dartmouth College"
            accomplishments={[
              "Reformating frontend after external developer refactored the codebase",
              "Implemented Zustand functionality for state management",
              "User testing and bug fixes",
              "Adding final features and deploying to production in Spring 2024",
            ]}
            av="Updated repository no longer accessible due to change in ownership. Code tour available."
            links={[
              "https://github.com/dali-lab/inforest"
            ]}
          />

          <WorkItem image={<img src={yalnix}></img>} title="Yalnix Operating System" role="Systems Engineer"
            description="Implemented the Yalnix operating system, a Unix-like operating system designed for educational purposes. Developed in C and assembly language, Yalnix provides a simple yet powerful environment for learning about operating systems. It includes features such as process management, memory management, and file systems. Completed in CS58: Operating Systems at Dartmouth College."
            accomplishments={[
              "Implemented Yalnix according to the specifications provided in the course materials",
            ]}
            av="Repository private due to course requirements and Dartmouth College policies. Code tour available."
            links={[
              "https://github.com/cs58-wi2025/yalnix-team-noname-two",
              "https://drive.google.com/file/d/177RD0MOSTIXTBUnxXIyYWC63BsJodh3K/view?usp=sharing"
            ]}
          />

          <WorkItem image={<img src={TSE}></img>} title="Tiny Search Engine" role="Software Developer"
            description="Implemented a Tiny Search Engine (TSE) that indexes and searches a collection of web pages. The TSE is designed to be efficient and scalable, allowing for quick retrieval of relevant information. The crawler module crawls the web starting at a certain webpage until a depth has been reached, caching the pages. The indexer module reads document files produced by the crawler and writes the index to a file. The querier satisfies the search query using the index file produced by the indexer. Completed in CS50: Introduction to Computer Science at Dartmouth College."
            accomplishments={[
              "Implemented the crawler, indexer, and querier modules according to the specifications provided in the course materials.",
            ]}
            av="Repository private due to course requirements and Dartmouth College policies. Code tour available."
            links={[
              "https://github.com/CS50DartmouthSP24/tse-Dartmace",
              "https://www.cs.dartmouth.edu/~cs50/Lectures/search/"
            ]}
          />

          <WorkItem image={<img src={nuggets}></img>} title="Nuggets" role="Software Developer"
            description="Implemented Nuggets, a multiplayer exploration game which utilizes a client and a server. The server maintains the game states and handles player interactions and game mechanics, while the clients display the game to a user. Completed as the final project of CS50: Software Design and Implementation at Dartmouth College."
            accomplishments={[
              "Notably, individually implemented light mechanics upon entering a room according to the specs",
              "Successfully implemented client and server according to the specs",
              'Given the label "Team Coding Ninja" by the professor for my work on the project',
            ]}
            av="Repository private due to course requirements and Dartmouth College policies. Code tour available."
            links={[
              "https://github.com/Mace1059/nuggets-Dartmace",
              "https://github.com/cs50spring2021/nuggets-info/blob/main/REQUIREMENTS.md"

            ]}
          />

          <WorkItem image={<img src={matte}></img>} title="Zero-Shot Image Matting with HQ-SAM" role="Research" 
            description="Fed resulting zero-shot image segmentations from HQ-SAM to a binary value image matte algorithm to produce zero-shot well-segmented image matteing. Created a short report, earning 100% on the final project.  Created in CS89.32: Multimodal Generative AI at Dartmouth College."
            accomplishments={[
              'Earned a faculty citation for academic excellence: "This is a graduate-level course that covers a wide range of advanced topics in Natural Language Processing, Computer Vision, Audio Signal Processing, Computer Graphics, and Large Language Models. Jack T. Macy performed exceptionally well. For the term project, Jack T. Macy and his teammate successfully reproduced the results from the paper Segment Anything in High Quality, NeurIPS 2023. Additionally, they extended the HQ-SAM by integrating zero-shot image matting with MGMatting to improve segmentation results for fine-grained features. The approach demonstrates strong potential, especially in applications requiring high-quality segmentation and matting."',
            ]}
            links={[
              "https://drive.google.com/file/d/1IBo4wu8RHF4HLnj0ilOMHRz772IxwEBL/view?usp=sharing"
            ]}
          />

          <WorkItem image={<img src={Markov}></img>} title="Hidden Markov Model POS Tagger" role="Software Developer" 
            description="Built a Hidden Markov Model (HMM) Part-of-Speech (POS) tagger that uses the Viterbi algorithm to find the most likely sequence of POS tags for a given sentence. The HMM is trained on a corpus of annotated sentences and can be used to tag new sentences. Completed in CS10: Problem Solving via Object Oriented Programming at Dartmouth College."
            accomplishments={[
              "Implemented the HMM POS tagger according to the specifications provided in the course materials.",
            ]}
            links={[
              "https://drive.google.com/drive/folders/1M1K6YRsj0fLEpHaTSZS6R8nEHRnRFmMh?usp=drive_link"
            ]}
          />

          <WorkItem
            image={<img src={mgame} alt="mGame" />}
            title="mGame"
            role="Full Stack Developer"
            description="A React Typescript + Firebase DALI application designed to help connect patients with their providers during their path to recovery. Characterized by a simple UI and easy-to-follow metrics calculated through a weekly check-up. Deployed and shipped to partners in May 2023. Created in partnership with the Dartmouth Hitchcock Medical Center."
            accomplishments={[
              "Firebase backend integration",
              "UI Typescript overhaul",
              "Deployed and shipped to partners in May 2023",
            ]}
            av="Updated repository no longer accessible due to change in ownership. Code tour available."
            links={[
              "https://github.com/dali-lab/mgame-frontend",
              "https://github.com/dali-lab/mgame-backend"
            ]}
          />

          <WorkItem image={<img src={comingsoon}></img>} title="BrackIt!" role="Full Stack Developer" description="An educational tournament game that keeps students engaged for longer. Coming Soon!"></WorkItem>

          <WorkItem image={<img src={logo}></img>} title="Personal Website" role="Full Stack Developer" description="Welcome!"
            accomplishments={[
              "Designed and developed a personal website using React Typescript and Material UI",
              "Implemented responsive design for optimal viewing on various devices (try changing the window size!)",
              "Integrated animations and interactive elements for enhanced user experience",
            ]} 
            links={["https://github.com/Mace1059/jackmacy"]}
          />
        </WorkSection>

        <WorkSection title="Economics + Mathematics Work">
          <WorkItem image={<img src={dartmouth}></img>} title="Budgeting Equity Risk to Achieve Optimal Short-Run Returns" role="Research" 
                      description="Designed a new portfolio optimization algorithm in Python that uses a risk budgeting model to return the optimal equity risk
contribution that maximizes short-run returns. It uses cyclical coordinate descent to solve the optimization problem with adjustable hyperparameters for time data. Created in the culminating experience Econ 66: Topics in Finance at Dartmouth College. Worked with award winning econometrist Tomas Jagelka. Coded in python and used pandas, numpy, and scipy libraries."
            accomplishments={[
              "Designed a novel risk budgeting portfolio algorithm for short-run returns",
              'Earned a faculty citation for academic excellence: "Jack creatively combined his knowledge of computer sciences with economic intuitions to propose a novel take on optimal portfolio construction. His enthusiastic in-class participation enriched the seminar and contributed to the learning of his classmates, and to mine also."',
            ]}
            links={[
              "https://drive.google.com/file/d/1NEZHah6yY1H4ohD8kq_XuQUX-CJyYzvt/view?usp=drive_link"
            ]}
          />
          
          <WorkItem image={<img src={options}></img>} title="Theoretical Options Pricing Research" role="Research" 
            description="This paper proposes a new method for pricing options by reinvesting dividends and changing contract size and strike price. The option will thus retain its true value. While discovered on our own, it aligns with prior work done by Gaske and Merton with the added bonus of a Monte Carlo experiment. Completed as a final project in Math 86: Mathematical Finance at Dartmouth College."
            accomplishments={[
              "Independently rediscovered a true theoretical options pricing model",
              "Utilized Monte Carlo methods to simulate the pricing model",
              "Learned Latex",
              "Earned an 100% on the final project",
            ]}
            links={[
              "https://drive.google.com/file/d/1U3JLotC12alNwXdBlaGlRvmH0aul1QHX/view?usp=sharing",
              "https://drive.google.com/drive/folders/13rxIaK631rn8Wez1N4otLUTrjjL4hlAv?usp=sharing"
            ]}
          />

          <WorkItem image={<img src={dartmouth}></img>} title="Econometrics Final Project" role="Research"
            description="Used a baseline and follow up survey of Canadian high schoolers to analyze the effect of stress, impulsivity, student debt, and number of children on
sleeping habits. Use several econometric techniques for robustness and to determine causality and remove biases. Found 100% joint significance of all variables used in the regression. Completed in Econ 20: Econometrics at Dartmouth College."
            accomplishments={[
              "Wrote robust Stata code for regression analysis",
              "Successfully removed biases and determined causality",
              "Implemented several econometric techniques for robustness, including an instrumental variable",
            ]}
            links={[
              "https://drive.google.com/file/d/18NcFUKAmnv-w33fGwhy-LgOgyAHFOUtu/view?usp=sharing"
            ]}
          />

        </WorkSection>

        <WorkSection title="Creative Projects">
          <WorkItem image={<img src={coldwar}></img>} title="The Cold War" role="Director / Video Editor" 
            description="Directed, produced, and edited The Cold War, a film all about a snowball fight taken one step further. Produced in Film 47: Advanced Filmmaking and Editing at Dartmouth College."
            accomplishments={[
              "Over 100 hours of video editing and production",
              "Developed camera and lighting skills and techniques",
              "Created custom music and sound effects",
              "Selected as cover project for film screening",
              'Earned a faculty citation for academic excellence: "Very hard worker. Goal-oriented. Honest and thoughtful."',
            ]}
            links={[
              "https://www.youtube.com/watch?v=iinf480Ules"
            ]}
          />
          <WorkItem image={<img src={lodj} style={{filter: "invert(1)"}}></img>} title="Lodj Croo Merchandise Design" role="Graphic Designer" 
            links={[
              "https://drive.google.com/file/d/1geAZuKYU8C992OCrtd6Ej1MplNoXc_0p/view?usp=drive_link"
            ]}
            description="Designed the Lodj Croo logo for Dartmouth First Year Trips in 2024."
          />
          <WorkItem image={<img src={mural}></img>} title="Sigma Nu Mural" role="Creative Lead"
            description="Designed and painted a mural for Dartmouth's Sigma Nu fraternity, incorporating aspects of our history into the design. Completed in 48 hours."
          />

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

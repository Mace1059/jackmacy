import "./about.scss";
import Image from "next/image";
import profile from "../photos/profile.jpeg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="cropper">
          <Image
            className="image"
            src={profile}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <h3>
          Hello! My name is Jack Macy and I'm an undergraduate at Dartmouth
          College studying computer science and mathematical finance. I grew up
          and attended high school in Westwood, MA where I refereed, coached
          soccer, lifeguarded, instructed swimming lessons, delivered food, and
          commentated basketball games. When I'm not working, I enjoy skiing,
          skating, playing soccer, exercising, and playing Minecraft. I also
          love the outdoors, so you might find me hiking, caoeing, and camping
          in the Upper Valley. <br />
          <br />I am a huge fan of the New England Patriots and manage two
          fantasy football leagues. However, I am not much of a football player
          myself. I prefer playing pond hockey and recreational soccer with
          friends. I am also impressively bad at basketball.
          <br />
          <br />I entered Dartmouth as a premed student, taking classes like
          Honors Cell Structure and Function and General Chemistry. My freshman
          winter, I took an advanced film editing class where I spent over 100
          hours filming and editing
          <span style={{ fontStyle: "italic" }}> The Cold War</span>, putting my
          hobby of video editing to good use. I discovered a passion for
          computer science and economics my sophomore year and plan to pursue a
          double major. <br />
          <br />
          On campus, I am a full stack developer for Dartmouth's Digital Applied
          Learning and Innovation (DALI) Lab where I work in a scrum team to
          design prototype projects in 10 week sprints. I am also an executive
          in Dartmouth's Delta Beta chapter of Sigma Nu, and I'm involved in the
          Dartmouth Outing Club. Recently, I volunteered to be a Trip Leader for
          Dartmouth's First Year Trips program where I had the privilige of
          giving new students an extensive tour of the Upper Valley for 5 days.
          <br />
          <br />{" "}
          <h3 style={{textAlign: "center" }}>
            I appreciate you spending the time to learn about me. Please feel
            free to reach out!
          </h3>
        </h3>
      </div>
    </div>
  );
}

import CSS from "csstype";

function AboutPage() {
  return (
    <div style={containerStyle}>
      <div style={aboutStyle}>
        <div>

          <img
            src="/headshot.JPEG"
            alt="Jack Macy"
            style={floatingImageStyle}
          />
          <h3>About Me</h3>

          <p>
            My name is Jack Macy, I'm 22 years old and grew up in Westwood,
            Massachusetts. I'm a recent graduate from Dartmouth College with a
            double major in Computer Science and Economics modified with
            Mathematics. During my undergraduate, I was a full time Full Stack Developer
            for Dartmouth's Applied Learning and Innovation (DALI) Lab and
            President of Dartmouth's Sigma Nu Fraternity. I was also actively involved in Dartmouth First Year Trips (FTY) as
            both a Trip Leader and a volunteer at the Moosilauke Ravine Lodge as
            a Lodj Crooling. I was the treasurer for Tyger Society, a freelance engineer, 
            and a DJ.
          </p>
          <p>
            In my free time, I enjoy coding up my ideas, 
            playing cribbage, video editing, DJing, painting, and exploring the outdoors. Athough weather dependent in the Northeast, I also love to ski, skate,
            play golf, hike, and paddle. I enjoy reading market data, learning about personal finance, and investing my savings. Naturally, I love
            spending time with friends, family, and those I care about. I
            recently embarked on a post-graduate cross-country road trip with
            friends, visiting national parks and cities across the United States, and I always look forward to the opportunity to travel somewhere new.
          </p>
          <p>
            I excel at Python programming, algorithm design, AI fine-tuning and
            engineering, full stack development, and economic modeling. I have a
            strong background in Python, Java, React Typescript, PyTorch, Git,
            backend support, and Excel. I have taken advanced computer science classes such as 
            randomized algorithms and operating systems and sought to modify my economic major with mathematics for a 
            better quantitative background. Thus, I have accelerated a multivariable calculus, probability, linear algebra, mathematical finance, 
            and combinatorics background in my toolbelt. I am currently looking for a full time job and would be grateful to discuss my qualifications further.
          </p>
          <p style={{ marginTop: "10rem" }}>
            Please feel free to check out my <a href={"https://drive.google.com/file/d/1xy2tZYP352A0zsIK8n7ziZMD7sJOYHDK/view?usp=sharing"} target="_blank" style={{color: "#00693e", fontWeight: "bold"}}>resume</a> and
            reach out to me at <a href={"mailto:jackmacy123@gmail.com"} style={{color: "#00693e", fontWeight: "bold"}}>jackmacy123@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

// Floating image style
const floatingImageStyle: CSS.Properties = {
  float: "right",
  width: "30rem",
  height: "auto",
  marginLeft: "4rem",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
};

// Full screen container
const containerStyle: CSS.Properties = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  width: "100%",
  minHeight: "100vh",
  overflowX: "hidden",
  margin: 0,
  padding: 0,
};

// Text block with padding
const aboutStyle: CSS.Properties = {
  padding: "2rem",
  marginLeft: "10%",
  marginRight: "10%",
  fontSize: "1.7rem",
  paddingTop: "100px",
  paddingBottom: "3rem",
};

export default AboutPage;

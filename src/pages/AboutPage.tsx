import CSS from "csstype";

function
  AboutPage() {
  return (
    <div className="center" style={{ ...introStyles }}>

    </div>
  )
}

const introStyles: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
  fontSize: "20px"
}

export default AboutPage;
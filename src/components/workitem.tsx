import CSS from "csstype";


type Props = {
  role: string,
  title: string,
  description: string,
  image?: JSX.Element
}

function WorkItem({ role, title, description, image }: Props) {
  return (
    <div style={{ ...styles }} className="enlarge">
      <div style={{height: "300px", width: "auto", justifyContent:"center", overflow: "hidden "}}>
        {image}
      </div>
      <div style={{ textTransform: "uppercase", color: "rgb(0, 105, 62)" }}>
        {role}
      </div>
      <div style={{ fontWeight: "bold", fontSize: "25px" }}>
        {title}
      </div>
      <div>
        {description}
      </div>
    </div>

  );
}

const styles: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  fontSize: "20px",
  padding: "20px 20px",
  backgroundColor: "white",
  gap: "1rem",
  borderRadius: "17px",
  height: "300px",
  border: "2px solid",
  borderColor: "rgba(135, 159, 170, 0.3)"
}

export default WorkItem;


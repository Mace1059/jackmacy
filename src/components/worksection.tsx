import { Grid } from "@mui/material";
import CSS from "csstype";
import "../styles/components.scss"

type Props = {
  title: string,
  children: JSX.Element[]
}

function WorkSection({ title, children }: Props) {
  return (
    <div style={{ ...styles }}>
      <div className="stick" style={{ fontSize: "40px", width: "25vw", position: "sticky", top: "100px", height: "fit-content" }}>
        {title}
      </div>
      
      <Grid container spacing={2}>
        {children.map((item, key) => (
        <Grid item xs={4} key={key}>
          {item}
        </Grid>
        ))}
      </Grid>
    </div>
  );
}

const styles: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  fontSize: "20px",
  padding: "40px 80px",
  backgroundColor: "rgba(135, 159, 170, 0.1)",
  boxShadow: "rgba(135, 159, 170, 0.25) 0px 2px 10px",
  borderRadius: "17px",
  maxWidth: '100%',
}

export default WorkSection;


import { Box } from "@mui/material"
import CSS from "csstype";
// import colors from "../utils/colors"
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function NavBar() {
  return (
    <Box sx={{ ...navbarStyles }}>
      <a href="/">
        Jack Macy
      </a>
      <nav style={{ flexDirection: "row", display: "flex", flex: 1, gap: "2rem", justifyContent: "flex-end", alignItems: "inherit", fontSize: "1.3rem"}}>
        <a href="/about">
          About
        </a>
        <a href={"https://drive.google.com/file/d/11g59plnHMsgZxKLeOyKArwZ8mRUMLPIP/view?usp=sharing"} target="_blank">
          Resume
        </a>
        <a href={"https://www.linkedin.com/in/jack-macy-b227a8239/"} target="_blank">
          <LinkedInIcon fontSize="large"></LinkedInIcon>
        </a>
      </nav>
    </Box>
  )
}

const navbarStyles: CSS.Properties = {
  alignItems: "center",
  display: "flex",
  height: "5rem",
  width: "100%",
  color: "black",
  boxShadow: "rgba(135, 159, 170, 0.25) 0px 2px 10px",
  padding: "30px 40px",
  fontSize: "1.5rem",
  boxSizing: "border-box",
  fontWeight: 500,
  zIndex: 6
}

export default NavBar
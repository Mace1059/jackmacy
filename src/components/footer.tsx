import { Box, Grid } from "@mui/material";
import CSS from "csstype";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box sx={{ ...footerStyles }}>
      <Grid container sx={{ display: "flex" }}>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-start" }}>
          <a href="/">
            jackmacy123@gmail.com
          </a>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <a href="/">
          </a>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <a href={"https://www.linkedin.com/in/jack-macy/"} target="_blank">
            <LinkedInIcon fontSize="large" />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}

const footerStyles: CSS.Properties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "3rem",
  width: "100%",
  color: "black",
  backgroundColor: "rgba(135, 159, 170, 0.1)",
  boxShadow: "rgba(135, 159, 170, 0.25) 0px -2px 10px",
  padding: "40px 40px",
  fontSize: "1.2rem",
  boxSizing: "border-box",
  fontWeight: 500,
  zIndex: 6,
};

export default Footer;

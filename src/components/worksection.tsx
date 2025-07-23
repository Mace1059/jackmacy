import { Grid, useMediaQuery, IconButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import CSS from "csstype";
import React from "react";

import "../styles/components.scss"

type Props = {
  title: string;
  children: JSX.Element[];
};

function WorkSection({ title, children }: Props) {
  const isSmall = useMediaQuery("(max-width:1240px)");
  const [open, setOpen] = React.useState(true);

  // Auto-expand on large screens
  React.useEffect(() => {
    if (!isSmall) setOpen(true);
  }, [isSmall]);

  const toggleOpen = () => setOpen(prev => !prev);

  return (
    <div className="shrink" style={{ ...styles, flexDirection: isSmall ? "column" : "row" }}>
      <div style={{ ...stickyStyle, ...(isSmall ? stickyMobileStyle : {}) }}>
        <div style={titleBarStyle}>
          <span>{title}</span>
          {isSmall && (
            <IconButton onClick={toggleOpen} size="small" style={{ marginLeft: "auto" }}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          )}
        </div>
      </div>

      {open && (
        <Grid container spacing={2}>
          {children.map((item, key) => (
            <Grid item sm={12} md={6} lg={4} key={key}>
              {item}
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

// Styles
const styles: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  fontSize: "20px",
  padding: "40px 80px",
  backgroundColor: "rgba(135, 159, 170, 0.1)",
  boxShadow: "rgba(135, 159, 170, 0.25) 0px 2px 10px",
  borderRadius: "17px",
  maxWidth: "100%",
  gap: "2rem",
};

const stickyStyle: CSS.Properties = {
  fontSize: "40px",
  width: "25%",
  position: "sticky",
  top: "110px",
  height: "fit-content",
  flexShrink: 0,
};

const stickyMobileStyle: CSS.Properties = {
  width: "100%",
  position: "static",
  marginBottom: "1rem",
};

const titleBarStyle: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.5rem",
};

export default WorkSection;

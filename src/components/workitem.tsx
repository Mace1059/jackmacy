import { Modal } from "@mui/material";
import CSS from "csstype";
import React from "react";

type Props = {
  role: string,
  title: string,
  description: string,
  image?: JSX.Element
}

function WorkItem({ role, title, description, image }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        style={{ ...styles }}
        className="enlarge"
        onClick={handleOpen}
      >
        <div style={{
          display: "flex",
          height: "200px",
          minHeight: "200px",
          width: "auto",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden"
        }}>
          {image}
        </div>
        <div style={{ fontSize: "18px", textTransform: "uppercase", color: "rgb(0, 105, 62)" }}>
          {role}
        </div>
        <div style={{ fontWeight: "bold", fontSize: "22px" }}>
          {title}
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={{ ...modalstyles }}>
          <div style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "2.4rem"}}>
            {title}
          </div>
          <div style={{ fontSize: "1.2rem", textAlign: "center"}}>
            {description}
          </div>
        </div>
      </Modal>
    </>
  );
}

const modalstyles: CSS.Properties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60vw",
  height: "fit-content",
  border: "2px solid",
  backgroundColor: 'white',
  borderColor: "rgba(135, 159, 170, 0.3)",
  outline: 'none',
  padding: '60px',
  borderRadius: "17px",
  display: "flex",
  flexDirection: "column",
  gap:"1rem",
  justifyContent: "center",
  alignItems:"center",
};

const styles: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  fontSize: "20px",
  padding: "20px 20px",
  backgroundColor: "white",
  gap: "0.5rem",
  borderRadius: "17px",
  border: "2px solid",
  borderColor: "rgba(135, 159, 170, 0.3)"
}

export default WorkItem;

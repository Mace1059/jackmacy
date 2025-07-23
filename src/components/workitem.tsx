import { Modal } from "@mui/material";
import CSS from "csstype";
import React from "react";


type Props = {
  role: string,
  title: string,
  description: string,
  image?: JSX.Element
  accomplishments?: string[],
  av?: string,
  links?: string[],
}

function WorkItem({ role, title, description, image, accomplishments, av, links }: Props) {
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
          flex: "1",
          alignSelf: "center",
          maxWidth: "90%",
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
        disableScrollLock
        slotProps={{
          backdrop: {
            style: {
              cursor: "pointer"
            }
          }
        }}
      >
        <div style={{ ...modalstyles, position: "relative", paddingTop: "3rem" }}>
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
              fontSize: "1.5rem",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "gray",
              zIndex: 10
            }}
            aria-label="Close"
          >
            ✖
          </button>

          {/* Scrollable Content Wrapper */}
          <div style={{ overflowY: "auto" }}>
            <div style={{ fontWeight: "bold", fontSize: "30px" }}>{title}</div>
            <div style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "1rem",
              textTransform: "uppercase",
              color: "rgb(0, 105, 62)"
            }}>
              {role}
            </div>

            <div style={{ fontSize: "1.2rem" }}>{description}</div>

            {accomplishments && (
              <div style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
                <div style={{ fontWeight: "bold" }}>Key Accomplishments</div>
                <ul>
                  {accomplishments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
              {av && av}
              {links && (
                <div style={{ fontSize: "1.2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {links.map((item, index) => (
                      <a
                        href={item}
                        style={{ color: "rgb(0, 105, 62)" }}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
  maxHeight: "70%",
  maxWidth: "60%",
  overflowY: "auto",
  overflowX: "hidden",
  border: "2px solid",
  backgroundColor: 'white',
  borderColor: "rgba(135, 159, 170, 0.3)",
  outline: 'none',
  padding: '60px',
  borderRadius: "17px",
  display: "flex",
  flexDirection: "column",
  gap:"0.5rem",
  // justifyContent: "center",
  // alignItems:"center",
};

const styles: CSS.Properties = {
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  fontSize: "20px",
  padding: "20px 20px",
  backgroundColor: "white",
  gap: "0.5rem",
  borderRadius: "17px",
  // maxWidth: "100%",
  border: "2px solid",
  height: "300px",
  borderColor: "rgba(135, 159, 170, 0.3)"
}

export default WorkItem;

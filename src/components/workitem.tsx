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
          
          <div style={{ fontWeight: "bold", fontSize: "30px"}}>
            {title}
          </div>
          <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "1rem", textTransform: "uppercase", 
            color: "rgb(0, 105, 62)"}}>
            {role}
          </div>

          {/* <div
            style={{
              width: "100%",
              maxHeight: "300px",
              maxWidth: "20rem",
              overflow: "hidden",
              float: "left",
            }}>
            {image}
          </div> */}

          <div style={{ fontSize: "1.2rem"}}>
            {description}
          </div>
          {accomplishments && (
            <div style={{ fontSize: "1.2rem", marginTop: "2rem"}}>
                <>
                  <div style={{fontWeight: "bold"}}>
                    Key Accomplishments
                  </div>
                  <ul>
                    {accomplishments.map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              
            </div>)
          }
          
          <div style={{ fontSize: "1.2rem", marginTop: "1rem"}}>
            {av ? av : null}

            {links ? (
            <div style={{ fontSize: "1.2rem"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                {links.map((item, index) => (
                  <a href={item} style={{color: "rgb(0, 105, 62)"}} key={index}>{item}</a>
                ))}
                </div>
              
            </div>) 
            : null}
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
  gap:"0.5rem",
  // justifyContent: "center",
  // alignItems:"center",
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

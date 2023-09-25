import "./activity.scss";

const jsonFile = require("../work.json");



const WorkExample = ({ params }, props) => {
  const id = params.slug;
  const activity = jsonFile.find((w) => id === w.id);

  const messageWithLineBreaks = activity.text.replace(/\\n/g, "\n")
  console.log(messageWithLineBreaks)

  return (
    <div className="activity-body">
      <div className="activity-card">
        <div style={{ marginBottom: "20px" }}>
          <h1>{activity.title}</h1>
          {activity.subtitle ? <h2>{activity.subtitle}</h2> : null}
          <div className="links">
            {activity.links
              ? activity.links.map((link) => (
                  <a
                    className="link"
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ))
              : null}
          </div>
        </div>

        <h4>{messageWithLineBreaks}</h4>
      </div>
    </div>
  );
};

export default WorkExample;

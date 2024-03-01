export default function ProjectCard(props) {
  return (
    <div
      className="project-container flex flex-col align-center p-5"
      style={{
        borderRadius: "20px",
        border: "0.5px solid #0369a1",
        minWidth: "20rem",
        maxWidth: "20rem",
        minHeight: "10rem",
      }}
    >
      <img
        src={props.ImgSrc}
        alt=""
        className="rounded mb-4"
        style={{ height: "10rem" }}
      />
      <h4 className="text-white font-bold mb-2" style={{ minHeight: "3rem" }}>
        {props.Name}
      </h4>
      <p className="text-gray-400 text-sm" style={{ flexGrow: "1" }}>
        {props.Desc}
      </p>
        {props.GithubLink && (
          <a
            href={props.GithubLink}
            className="btn px-7 text-center p-2 rounded"
            style={{
              backgroundColor: "#e0f2fe",
              color: "#0284c7",
              margin: "0.5rem 0",
              border: "1px solid #e0f2fe",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {props.Demo && (
          <a
            href={props.Demo}
            className="btn px-7 text-center rounded p-2"
            style={{ 
              backgroundColor: "#0ea5e9", 
              margin: "0.5rem 0",
              color: "#fff" 
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        )}
      {/* </div> */}
    </div>
  );
}

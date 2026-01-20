import "./index.css";

const ProjectCard = ({ data }) => {
  const openLive = () => {
    window.open(data.url, "_blank", "noopener,noreferrer");
  };

  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="project-card"
      onClick={openLive}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && openLive()}
    >
      {/* LEFT */}
      <div className="project-thumb">
        <img
          src={data.thumbnail}
          alt={data.title}
          loading="lazy"
        />
      </div>

      {/* RIGHT */}
      <div className="project-info">
        <h3>{data.title}</h3>
        <p>{data.description}</p>

        <div className="project-actions">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
            className="btn-live"
          >
            Live
          </a>

          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={stop}
              className="btn-source"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

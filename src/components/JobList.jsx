import PropTypes from "prop-types";

export default function JobList({ job, addToSelectedJobs }) {
  return (
    <div>
      <div>
        <div className={`company ${job.new && job.featured ? `extra` : ""}`}>
          {/* company-image */}
          <div className="company-image">
            <img src={job.logo} alt={job.logo} />
          </div>
          {/* job-details */}
          <div className="job-details">
            <div className="more-details">
              <p className="company-name">{job.company}</p>
              <div className={`${job.new ? "new" : ""}`}>
                {job.new ? "NEW!" : ""}
              </div>
              <div className={`${job.featured ? "featured" : ""}`}>
                {job.featured ? "FEATURED" : ""}
              </div>
            </div>
            <h3>{job.position}</h3>
            <div className="requirements">
              <ul className="job-req">
                <li>{job.postedAt}</li>
                <li>{job.contract}</li>
                <li>{job.location}</li>
              </ul>
            </div>
          </div>

          {/* JOB */}
          <div className="technology">
            <button
              value={job.role}
              key={job.id}
              className="job-role"
              onClick={() => addToSelectedJobs(job.role)}
            >
              {job.role}
            </button>
            {job.languages.map((el) => (
              <button
                className="technology-btn"
                value={el}
                key={el}
                onClick={() => addToSelectedJobs(el)}
              >
                {el}
              </button>
            ))}
            {job.tools.map((tool) => (
              <button
                value={tool}
                className="tool-btn"
                key={tool}
                onClick={() => addToSelectedJobs(tool)}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
JobList.propTypes = {
  job: PropTypes.object.isRequired,
  addToSelectedJobs: PropTypes.func.isRequired,
};

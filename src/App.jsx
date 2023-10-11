import { Children } from "react";
import jobList from "./data.json";
import "./index.css";

export default function App() {
  return (
    <div>
      <Box />

      <Jobs />

      {/* <JobList /> */}

      <FilterJobs />

      <ClearList />
    </div>
  );
}

function Jobs() {
  return (
    <div className="box">
      <div className="header-box"></div>

      <div className="jobs">
        {jobList.map((job) => (
          <JobList job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
}

function JobList({ job }) {
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
            {job.languages.map((el) => (
              <button className="technology-btn" key={el}>
                {el}
              </button>
            ))}
            {job.tools.map((tool) => (
              <button className="tool-btn" key={tool}>
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Box() {}

function FilterJobs() {}

function ClearList() {}

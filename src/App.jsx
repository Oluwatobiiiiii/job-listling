import { useState } from "react";
import jobList from "./data.json";
import "./index.css";

let selectedJobs = [];

export default function App() {
  const [selected, showSelectedJobs] = useState(selectedJobs);

  // ADD THE SELCTED FILTER TO THE ARRAY
  function addToSelectedJobs(selected) {
    showSelectedJobs(selectedJobs.push(selected));
    console.log(selectedJobs);
  }

  //remove the selected Job
  function removeTheSelectedJobs(selected) {
    showSelectedJobs(selectedJobs.pop(selected));
    console.log(selectedJobs);
  }

  //REMOVE THE SELECTED FILTER TO THE ARRAY
  function ClearSelected() {
    showSelectedJobs((selectedJobs = []));
    console.log(selectedJobs);
  }

  return (
    <div>
      <Jobs addToSelectedJobs={addToSelectedJobs} selected={selected} />

      <FilterJobs
        ClearSelected={ClearSelected}
        removeTheSelectedJobs={removeTheSelectedJobs}
        selected={selected}
      />
    </div>
  );
}

function Jobs({ addToSelectedJobs, ClearSelected }) {
  return (
    <div className="box">
      <div className="header-box"></div>

      <div className="jobs">
        {jobList.map((job) => (
          <JobList job={job} key={job} addToSelectedJobs={addToSelectedJobs} />
        ))}
      </div>
    </div>
  );
}

function FilterJobs({
  jobList,
  selected,
  ClearSelected,
  removeTheSelectedJobs,
}) {
  return (
    <div className="filtered-Box">
      {selectedJobs.map((job) => (
        <>
          <Box job={job} key={jobList}>
            <Remove
              removeTheSelectedJobs={removeTheSelectedJobs}
              selected={selected}
            />
          </Box>
        </>
      ))}
      <button className="filter-btn" onClick={ClearSelected}>
        Clear
      </button>
    </div>
  );
}

function Box({ job, children }) {
  return (
    <div>
      <div className="selected-filter">
        {job}
        {children}
      </div>
    </div>
  );
}

function Remove({ selected, removeTheSelectedJobs }) {
  return (
    <button className="remove" onClick={() => removeTheSelectedJobs(selected)}>
      <img src="images/icon-remove.svg" />
    </button>
  );
}

function JobList({ job, addToSelectedJobs }) {
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

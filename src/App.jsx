import React, { useState } from "react";
import jobList from "./data.json";
import "./index.css";
import PropTypes from "prop-types";

// let selectedJobs = { selected, id: Date.now() };
let selectedJobs = [];
export default function App() {
  const [selected, showSelectedJobs] = useState(selectedJobs);

  // ADD THE SELECTED FILTER TO THE ARRAY
  function addToSelectedJobs(selected) {
    showSelectedJobs(selectedJobs.push(selected));
    console.log(selectedJobs);
  }

  //remove the selected Job
  function removeTheSelectedJobs(index) {
    showSelectedJobs(selectedJobs.filter((_, i) => i !== index));
    console.log(selectedJobs);
    console.log(index);
  }

  //REMOVE THE SELECTED FILTER TO THE ARRAY
  function ClearSelected() {
    showSelectedJobs((selectedJobs = []));
    console.log(selectedJobs);
  }

  return (
    <div>
      <Jobs
        addToSelectedJobs={addToSelectedJobs}
        selected={selected}
        selectedJobs={selectedJobs}
      />

      {selectedJobs.length > 0 && (
        <FilterJobs
          ClearSelected={ClearSelected}
          selected={selected}
          removeTheSelectedJobs={removeTheSelectedJobs}
          selectedJobs={selectedJobs}
        />
      )}
    </div>
  );
}

function Jobs({ addToSelectedJobs }) {
  return (
    <div className="box">
      <div className="header-box"></div>

      <div className="jobs">
        {jobList.map((job) => (
          <JobList
            job={job}
            key={job.id}
            addToSelectedJobs={addToSelectedJobs}
          />
        ))}
      </div>
    </div>
  );
}

Jobs.propTypes = {
  addToSelectedJobs: PropTypes.func.isRequired,
};

function FilterJobs({ ClearSelected, selectedJobs, removeTheSelectedJobs }) {
  return (
    <div className="filtered-Box">
      {selectedJobs.map((job, index) => (
        <React.Fragment key={index}>
          <Box job={job} key={index}>
            <Remove
              key={index}
              job={job}
              index={index}
              removeTheSelectedJobs={removeTheSelectedJobs}
            />
          </Box>
        </React.Fragment>
      ))}
      <button className="filter-btn" onClick={ClearSelected}>
        Clear
      </button>
    </div>
  );
}

FilterJobs.propTypes = {
  ClearSelected: PropTypes.func.isRequired,
  removeTheSelectedJobs: PropTypes.func.isRequired,
  selectedJobs: PropTypes.array.isRequired,
};

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

Box.propTypes = {
  job: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

function Remove({ removeTheSelectedJobs, index }) {
  return (
    <button
      className="remove"
      onClick={() => removeTheSelectedJobs(index)}
      key={Date.now()}
    >
      <img src="images/icon-remove.svg" />
    </button>
  );
}

Remove.propTypes = {
  removeTheSelectedJobs: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

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

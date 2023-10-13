import jobList from "./data.json";
import PropTypes from "prop-types";
import JobList from "./JobList";

export default function Jobs({ addToSelectedJobs }) {
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

import React from "react";
import PropTypes from "prop-types";
import Remove from "./Remove";
import Box from "./Box";

export default function FilterJobs({
  ClearSelected,
  selected,
  removeTheSelectedJobs,
}) {
  return (
    <div className="filtered-Box">
      {selected.map((job, index) => (
        <React.Fragment key={index}>
          <Box job={job} key={index}>
            <Remove
              key={index}
              job={job}
              value={job}
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
  selected: PropTypes.array.isRequired,
  ClearSelected: PropTypes.func.isRequired,
  removeTheSelectedJobs: PropTypes.func.isRequired,
};

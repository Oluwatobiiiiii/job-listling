import PropTypes from "prop-types";

export default function Remove({ removeTheSelectedJobs, value }) {
  return (
    <button
      className="remove"
      onClick={() => removeTheSelectedJobs(value)}
      key={value}
    >
      <img src="images/icon-remove.svg" />
    </button>
  );
}
Remove.propTypes = {
  removeTheSelectedJobs: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

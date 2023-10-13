import PropTypes from "prop-types";

export default function Box({ job, children }) {
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

import PropTypes from "prop-types";

export const todoShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  resolved: PropTypes.bool,
});

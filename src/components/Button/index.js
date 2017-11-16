import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, label }) => <button onClick={onClick}>{label}</button>;

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: undefined,
};

export default Button;

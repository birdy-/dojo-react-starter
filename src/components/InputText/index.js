import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ onChange, placeholder, value }) => (
  <div>
    <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
  </div>
);

InputText.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

InputText.defaultProps = {
  onChange: undefined,
  placeholder: '',
};

export default InputText;

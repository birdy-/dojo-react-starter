import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ lastname, firstname, age }) => (
  <div style={{ background: '#ffaaaa', position: 'absolute', right: 0, top: 0, bottom: 0, width: '200px' }}>
    <pre>
      {'{'}
      <br />
      &nbsp;&nbsp;firstname: {firstname},<br />
      &nbsp;&nbsp;lastname: {lastname},<br />
      &nbsp;&nbsp;age: {age},<br />
      {'}'}
    </pre>
  </div>
);

Panel.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

export default Panel;

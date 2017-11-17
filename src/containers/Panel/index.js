import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  age: state.form.get('age'),
  lastname: state.form.get('lastname'),
  firstname: state.form.get('firstname'),
});

export default connect(mapStateToProps)(Panel);

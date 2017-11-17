import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFirstname, setLastname, setAge } from '../../actions';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname: '',
        lastname: '',
        age: '',
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.updateValues(this.state.form.firstname, this.state.form.lastname, this.state.form.age);
  }

  onChange(key, value) {
    this.setState({ form: { ...this.state.form, [key]: value } });
  }

  render() {
    const { firstname, lastname, age } = this.state.form;
    return (
      <div>
        <h1>Welcome</h1>
        <InputText
          value={firstname}
          placeholder="Enter your firstname"
          onChange={e => this.onChange('firstname', e.currentTarget.value)}
        />
        <InputText
          value={lastname}
          placeholder="Enter your lastname"
          onChange={e => this.onChange('lastname', e.currentTarget.value)}
        />
        <InputText
          value={age}
          placeholder="Enter your age"
          onChange={e => this.onChange('age', e.currentTarget.value)}
        />
        <Button onClick={this.onSubmit} label="Envoyez" />
      </div>
    );
  }
}

Form.propTypes = {
  updateValues: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  updateValues: (firstname, lastname, age) => {
    dispatch(setFirstname(firstname)); // dispatch({ type: 'SET_FIRSTNAME', value: firstname })
    dispatch(setLastname(lastname));
    dispatch(setAge(age));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

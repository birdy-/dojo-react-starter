import React, { Component } from 'react';
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
    console.log(this.state);
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

export default Form;

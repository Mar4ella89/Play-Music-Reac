import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

class SignUpFormFull extends Component {
  state = {
    ...INITIAL_STATE,
  };

  loginInputId = nanoid();

  // Отвечает за обновление состояния
  handleChange = e => {
    const { name, value, type, checked } = e.target;
    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  // Вызывается при отправке формы
  handleSubmit = evt => {
    const { login, email, password, agreed, age } = this.state;
    evt.preventDefault();
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}, Age: ${age}`
    );

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>
          Login
          <input
            id={this.loginInputId}
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Agree to terms
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default SignUpFormFull;

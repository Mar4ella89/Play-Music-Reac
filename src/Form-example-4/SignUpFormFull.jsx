import React, { Component } from 'react';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

class SignUpFormFull extends Component {
  state = {
    ...INITIAL_STATE,
  };

  // Отвечает за обновление состояния
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.dir(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };

  // Вызывается при отправке формы
  handleSubmit = evt => {
    const { login, email, password } = this.state;
    evt.preventDefault();
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Login
          <input
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

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

export default SignUpFormFull;

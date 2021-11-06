import React from "react";
import Input from "./common/Input";

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.handleValidate();
    this.setState({ errors });
  };

  handleValidate = () => {
    const errors = {};
    if (this.state.account.username === "")
      errors.username = "username is required";
    if (this.state.account.password === "")
      errors.password = "password is required";
    return errors;
  };

  handleChange = ({ currentTarget }) => {
    const account = { ...this.state.account };
    account[currentTarget.id] = currentTarget.value;
    this.setState({ account });
  };

  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

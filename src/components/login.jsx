import React from "react";
import Input from "./common/Input";

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = ({ currentTarget }) => {
    const account = { ...this.state.account };
    account[currentTarget.id] = currentTarget.value;
    this.setState({ account });
  };

  state = {
    account: { username: "", password: "" },
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

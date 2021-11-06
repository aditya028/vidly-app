import React from "react";
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
          <div className="form-group ">
            <label htmlFor="username">UserName</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              type="username"
              className="form-control"
              id="username"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="password"
            />
          </div>

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

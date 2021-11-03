import React from "react";
class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
    }
    state={
        account : {username : "Aditya" , password : " "}
    };
  render() {
    return (
      <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <div className="form-group ">
            <label htmlFor="username">UserName</label>
            <input
              value={this.state.account.username}
              type="username"
              className="form-control"
              id="username"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Login extends Form {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };
  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          {this.renderInput("username")}
          {this.renderInput("password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;

import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email(),
    password: Joi.string().required().min(5),
    name: Joi.string().required().min(3),
  };
  doSubmit = () => {
    console.log("registered");
  };
  render() {
    return (
      <>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          {this.renderInput("username", "UserName")}
          {this.renderInput("password", "Password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </>
    );
  }
}

export default Register;

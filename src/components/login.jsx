import React from "react";
import Joi from "joi-browser";
import Input from "./common/Input";

class Login extends React.Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
  };
  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, option);

    if (!result.error) return null;
    const errors = {};
    for (let items of result.error.details)
      errors[items.path[0]] = items.message;
    return errors;
  };
  validateProperty = ({ id: name, value }) => {
    const obj = { [name]: value };
    const schemaObj = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schemaObj);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.id] = errorMessage;
    else errors[input.id] = null;
    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account, errors });
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
            error={errors && errors.username}
          />
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors && errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

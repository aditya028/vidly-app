import React from "react";
import Joi from "joi-browser";
import Input from "./Input";

class Form extends React.Component {
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    this.doSubmit();
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
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  renderInput(name) {
    const { account, errors } = this.state;
    return (
      <Input
        name={name}
        value={account[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;

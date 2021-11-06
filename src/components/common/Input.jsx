import React from "react";

const Input = ({ name, value, onChange, error }) => {
  return (
    <>
      <div className="form-group ">
        <label htmlFor={name}>{name}</label>
        <input
          value={value}
          onChange={onChange}
          type={name}
          className="form-control"
          id={name}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </>
  );
};

export default Input;

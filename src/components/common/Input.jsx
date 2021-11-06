import React from "react";

const Input = ({ name, value, onChange }) => {
  return (
    <div className="form-group ">
      <label htmlFor={name}>{name}</label>
      <input
        value={value}
        onChange={onChange}
        type={name}
        className="form-control"
        id={name}
      />
    </div>
  );
};

export default Input;

import React from "react";
import "./FormInput.css";

function FormInput({ label, name, value, onChange }) {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default FormInput;
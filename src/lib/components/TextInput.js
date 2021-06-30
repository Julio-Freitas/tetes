import React from "react";
import * as Styled from './style'
// import "./TextInput.css";
const TextInput = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  helpText
}) => (
  <Styled.Container className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      placeholder={placeholder}
    />
    {helpText && <small className="simple-form-text">{helpText}</small>}
  </Styled.Container >
);
export default TextInput;
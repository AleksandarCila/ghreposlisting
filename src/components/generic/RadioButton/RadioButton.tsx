import { FC, InputHTMLAttributes } from "react";

import "./RadioButton.styles.css"

type RadioButtonProps = {
  text: string;
};

export const RadioButton: FC<RadioButtonProps & InputHTMLAttributes<HTMLInputElement>> = ({
  name,
  id,
  value,
  onChange,
  checked,
  text,
}) => {
  return (
    <label htmlFor={id} className="radio-label">
      <input
        className="radio-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className="custom-radio" />
      {text}
    </label>
  );
};

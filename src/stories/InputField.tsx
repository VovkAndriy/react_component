import React from "react";
import "./inputField.css";
export interface InputFieldProps {
  backgroundColor?: string;
  placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({backgroundColor, placeholder, ...props }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{ backgroundColor }}
      className={["storybook-input"].join(" ")}
      {...props}
    ></input>
  );
};

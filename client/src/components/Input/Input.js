import classNames from "classnames";
import { Controller } from "react-hook-form";
import "./input.styles.css";

export const Input = ({ placeholder, control, type, name, onKeyPress }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange } }) => (
      <input
        onKeyPress={onKeyPress}
        className={classNames("input")}
        onChange={onChange}
        placeholder={placeholder}
        type={type || "text"}
      />
    )}
  />
);

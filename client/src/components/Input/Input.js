import classNames from "classnames";
import "./input.styles.css";

export const Input = ({ inputRef, placeholder, onChange, type }) => (
  <input
    placeholder={placeholder}
    className={classNames("input")}
    ref={inputRef}
    onChange={onChange}
    type={type || "text"}
  />
);

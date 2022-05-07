import classNames from "classnames";
import "./input.styles.css";

export const Input = ({ placeholder, onChange, type }) => (
  <input
    placeholder={placeholder}
    className={classNames("input")}
    onChange={onChange}
    type={type || "text"}
  />
);

import classNames from "classnames";

export const Input = ({ inputRef, placeholder, onChange }) => (
  <input
    placeholder={placeholder}
    className={classNames("input")}
    ref={inputRef}
    onChange={onChange}
  />
);

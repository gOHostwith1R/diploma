import classNames from "classnames";
import "./button.styles.css";

export const Button = ({ children, type, classType }) => (
  <button
    type={type || "button"}
    className={classNames("button", {
      auth__button: classType === "auth__button",
      create__button: classType === "create__button",
    })}
  >
    {children}
  </button>
);

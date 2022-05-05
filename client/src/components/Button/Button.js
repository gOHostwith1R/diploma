import classNames from "classnames";

export const Button = ({ children, type, classType }) => (
  <button
    type={type || "button"}
    className={classNames("button", {
      auth__button: classType === "auth__button",
    })}
  >
    {children}
  </button>
);

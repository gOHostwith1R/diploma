import "./errors.styles.css";
import classNames from "classnames";

export const Errors = ({ children }) => (
  <p className={classNames("errors")}>{children}</p>
);

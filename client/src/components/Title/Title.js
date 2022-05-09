import classNames from "classnames";
import "./title.styles.css";

export const Title = ({ children, type }) => (
  <h1
    className={classNames("title", {
      title__auth: type === "title__auth",
      title__create: type === "title__create",
    })}
  >
    {children}
  </h1>
);

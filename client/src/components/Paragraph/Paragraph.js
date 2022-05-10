import classNames from "classnames";
import "./paragraph.styles.css";

export const Paragraph = ({ children }) => (
  <p className={classNames('paragraph')}>{children}</p>
);

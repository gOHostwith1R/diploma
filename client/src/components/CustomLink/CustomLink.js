import classNames from "classnames";
import { Link } from "react-router-dom";
import "./customLink.styles.css";

export const CustomLink = ({ path, children }) => (
  <Link to={path} className={classNames("link")}>
    {children}
  </Link>
);

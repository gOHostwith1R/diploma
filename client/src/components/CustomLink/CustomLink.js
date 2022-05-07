import classNames from "classnames";
import { NavLink } from "react-router-dom";
import "./customLink.styles.css";

export const CustomLink = ({ path, children, classType }) => {
  return (
    <NavLink
      to={path}
      className={(navData) => classNames("link", {
        header__link: classType === "header__link",
        active__link: navData.isActive,
      })}
    >
      {children}
    </NavLink>
  );
};

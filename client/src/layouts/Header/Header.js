import { CustomLink, Input, Search } from "../../components";
import "./header.styles.css";
import { useLocation } from "react-router";

export const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header__links-wrapper">
        <CustomLink path="/" classType="header__link">
          Tasks
        </CustomLink>
        <CustomLink path="/create" classType="header__link">
          Create Task
        </CustomLink>
        <CustomLink path="/profile" classType="header__link">
          Profile
        </CustomLink>
      </div>
      {location.pathname === "/" && <Search />}
    </header>
  );
};

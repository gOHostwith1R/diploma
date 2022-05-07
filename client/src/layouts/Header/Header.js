import { CustomLink } from "../../components";
import "./header.styles.css";

export const Header = () => (
  <header className="header">
    <CustomLink path="/" classType="header__link">
      Tasks
    </CustomLink>
    <CustomLink path="/create" classType="header__link">
      Create Task
    </CustomLink>
    <CustomLink path="/profile" classType="header__link">
      Profile
    </CustomLink>
  </header>
);

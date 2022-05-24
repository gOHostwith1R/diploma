import { CustomLink, Input, Search } from "../../components";
import "./header.styles.css";
import { useLocation } from "react-router";

export const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header__links-wrapper">
        <CustomLink path="/" classType="header__link">
          Задачи
        </CustomLink>
        <CustomLink path="/create" classType="header__link">
          Создать задачу
        </CustomLink>
        <CustomLink path="/profile" classType="header__link">
          Профиль
        </CustomLink>
      </div>
      {location.pathname === "/" && <Search />}
    </header>
  );
};

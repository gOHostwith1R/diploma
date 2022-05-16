import { useForm } from "react-hook-form";
import { CustomLink, Input } from "../../components";
import search from "../../assets/search.png";
import "./header.styles.css";
import { searchTasks } from "../../redux/reducers/taskSlice";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const { control, getValues } = useForm({
    defaultValues: {
      search: "",
    },
  });
  const onClick = () => {
    dispatch(searchTasks(getValues("search")));
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchTasks(getValues("search")));
    }
  };
  return (
    <header className="header">
      <div className="header__links-wrapper">
        <CustomLink path="/" classType="header__link">
          Tasks
        </CustomLink>
        <CustomLink path="/create" classType="header__link">
          Create Task
        </CustomLink>
      </div>
      <div className="search__wrapper">
        <Input
          placeholder="Search"
          control={control}
          name="search"
          onKeyPress={onKeyPress}
        />
        <img
          src={search}
          alt="search"
          className="search-icon"
          onClick={onClick}
        />
      </div>
    </header>
  );
};

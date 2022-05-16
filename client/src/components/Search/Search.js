import "./search.styles.css";
import search from "../../assets/search.png";
import { Input } from "../Input/Input";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

export const Search = () => {
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
  );
};

import { Header } from "../../layouts";
import { CustomLink } from "../../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../../redux/reducers/taskSlice";

export const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  return <h1>Main</h1>;
};

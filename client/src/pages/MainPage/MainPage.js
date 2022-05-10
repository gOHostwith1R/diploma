import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskWrapper } from "../../layouts";
import { fetchTasks } from "../../redux/reducers/taskSlice";

export const MainPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  useEffect(() => {
    tasks.length === 0 && dispatch(fetchTasks());
  }, []);
  return <TaskWrapper />;
};

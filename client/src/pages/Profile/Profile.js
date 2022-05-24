import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components";
import { fetchTasks } from "../../redux/reducers/taskSlice";
import jwt_decode from "jwt-decode";
import "./profile.styles.css";
import { TaskWrapper } from "../../layouts";

export const Profile = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  useEffect(() => {
    tasks.length === 0 && dispatch(fetchTasks());
  }, []);
  const userName = jwt_decode(localStorage.getItem("access")).userName;
  const userTasks = tasks.filter((task) => task.userName === userName);
  return (
    <div className="profile">
      <Title type="title__profile">Ваши задачи</Title>
      <TaskWrapper currentTasks={userTasks} />
      {userTasks.length === 0 && <h2>Not found tasks</h2>}
    </div>
  );
};

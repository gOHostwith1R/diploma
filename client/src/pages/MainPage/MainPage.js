import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskWrapper } from "../../layouts";
import { fetchTasks } from "../../redux/reducers/taskSlice";
import { Pagination } from "@mui/material";
import "./mainPage.styles.css";

export const MainPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  useEffect(() => {
    tasks.length === 0 && dispatch(fetchTasks());
  }, []);
  const pageNumbers = Math.ceil(tasks.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTasks = tasks.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <TaskWrapper currentTasks={currentTasks} />
      <div className="pagination__wrapper">
        <Pagination
          count={pageNumbers}
          onChange={(_, num) => setCurrentPage(num)}
        />
      </div>
    </>
  );
};

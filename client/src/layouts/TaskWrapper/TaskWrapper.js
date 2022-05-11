import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import "./taskWrapper.styles.css";

export const TaskWrapper = () => {
  const tasks = useSelector((state) => state.task.tasks);
  return (
    <div className="task-wrapper">
      {tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          type={task.type}
          key={task.id}
          id={task.id}
          userNameAnswer={task.userName}
        />
      ))}
    </div>
  );
};

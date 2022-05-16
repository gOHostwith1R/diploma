import { Task } from "../Task/Task";
import "./taskWrapper.styles.css";

export const TaskWrapper = ({ currentTasks }) => {
  return (
    <div className="task-wrapper">
      {currentTasks.map((task) => (
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

import { useNavigate } from "react-router";
import { Title } from "../../components";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import "./task.styles.css";

export const Task = ({ title, type, id, userNameAnswer }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate(`/task/${id}`);
  };
  return (
    <div className="task" onClick={() => handleClick(id)}>
      <div className="task__info">
        <Title type="task__title">{title}</Title>
        <Paragraph>{`Type: ${type}`}</Paragraph>
      </div>
      <div className="asks__wrapper">
        <Paragraph>{`Asks: ${userNameAnswer}`}</Paragraph>
      </div>
    </div>
  );
};

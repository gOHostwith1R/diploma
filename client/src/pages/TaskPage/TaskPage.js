import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { Title, Paragraph, TextArea, Button } from "../../components";
import { fetchTasks, addAnswer } from "../../redux/reducers/taskSlice";
import "./taskPage.styles.css";
import { AnswerWrapper } from "../../layouts";

export const TaskPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      answer: "",
    },
  });
  const task = useSelector((state) => state.task.tasks).find(
    (unit) => unit.id === +id
  );
  useEffect(() => {
    task === undefined && dispatch(fetchTasks());
  }, []);
  const userName = jwt_decode(localStorage.getItem("access")).userName;
  const onSubmit = (data) => {
    data["id"] = id;
    data["userName"] = userName;
    dispatch(addAnswer(data));
  };
  return (
    <div className="task-page">
      <div className="question__wrapper">
        <Title>{task?.title}</Title>
        <Paragraph>{task?.description}</Paragraph>
        <Paragraph>{task?.type}</Paragraph>
      </div>
      <AnswerWrapper id={id} />
      <div className="answer__wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="form__answer">
          <TextArea
            name="answer"
            control={control}
            placeholder="Add the answer..."
          />
          <Button type="submit" classType="create__button">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

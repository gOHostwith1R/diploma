import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components";
import { Answer } from "../Answer/Answer";
import { fetchAnswers } from "../../redux/reducers/taskSlice";
import "./answerWrapper.styles.css";

export const AnswerWrapper = ({ id }) => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.task.answers);
  const status = useSelector((state) => state.task.status);
  useEffect(() => {
    dispatch(fetchAnswers(id));
  }, []);
  return status === "pending" ? (
    <Loader />
  ) : (
    <div className="answer__wrapper">
      {answers.map((answer) => (
        <Answer
          key={answer.id}
          answer={answer.answer}
          userAnswer={answer.userName}
        />
      ))}
    </div>
  );
};

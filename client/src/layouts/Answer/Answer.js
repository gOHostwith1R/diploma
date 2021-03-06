import { Paragraph } from "../../components";
import "./answer.styles.css";

export const Answer = ({ answer, userAnswer }) => {
  return (
    <div className="answer">
      <Paragraph>{answer}</Paragraph>
      <Paragraph>{`Ответил: ${userAnswer}`}</Paragraph>
    </div>
  );
};

import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Title, Input, Button, TextArea, Select } from "../../components";
import { createTask, fetchTasks } from "../../redux/reducers/taskSlice";
import { InputWrapper } from "../../layouts";
import "./createTask.styles.css";

export const CreateTask = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      type: "",
    },
  });

  const userName = jwt_decode(localStorage.getItem("access")).userName;

  const onSubmit = (data) => {
    data["userName"] = userName;
    dispatch(createTask(data));
    dispatch(fetchTasks());
    return navigate("/");
  };
  return (
    <div className="create-task__wrapper">
      <Title>Создание задачи</Title>
      <form onSubmit={handleSubmit(onSubmit)} className="create__form">
        <InputWrapper>
          <Input control={control} placeholder="Заголовок" name="title" />
        </InputWrapper>
        <InputWrapper>
          <TextArea
            placeholder="Описание"
            name="description"
            control={control}
          />
        </InputWrapper>
        <InputWrapper>
          <Title type="title__create">Введите тип</Title>
          <Select control={control} name="type" />
        </InputWrapper>
        <Button type="submit" classType="create__button">
          Создать
        </Button>
      </form>
    </div>
  );
};

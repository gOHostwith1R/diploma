import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Title,
  Input,
  Button,
  TextArea,
  Select,
} from "../../components";
import { createTask } from "../../redux/reducers/taskSlice";
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

  const onSubmit = (data) => {
    dispatch(createTask(data));
    return navigate("/");
  };
  return (
    <div className="create-task__wrapper">
      <Title>Create task</Title>
      <form onSubmit={handleSubmit(onSubmit)} className="create__form">
        <InputWrapper>
          <Input control={control} placeholder="Enter the title" name="title" />
        </InputWrapper>
        <InputWrapper>
          <TextArea
            placeholder="Description"
            name="description"
            control={control}
          />
        </InputWrapper>
        <InputWrapper>
          <Title type="title__create">Enter the type </Title>
          <Select control={control} name="type" />
        </InputWrapper>
        <Button type="submit" classType="create__button">
          Create
        </Button>
      </form>
    </div>
  );
};

import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  Title,
  Input,
  Errors,
  Button,
  TextArea,
  Select,
} from "../../components";
import { InputWrapper } from "../../layouts";
import "./createTask.styles.css";

export const CreateTask = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      type: "",
    },
  });
  const errors = useSelector((state) => state.user.errors)?.reduce(
    (obj, item) => {
      obj[item.msg] = item.msg;
      obj[item.param] = item.param;
      return obj;
    },
    {}
  );

  const onSubmit = (data) => console.log(data);
  return (
    <div className="create-task__wrapper">
      <Title>Create task</Title>
      <form onSubmit={handleSubmit(onSubmit)} className="create__form">
        <InputWrapper>
          <Input control={control} placeholder="Enter the title" name="title" />
          {errors?.task && <Errors>Title is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
          <TextArea
            placeholder="Description"
            name="description"
            control={control}
          />
          {errors?.task && <Errors>Title is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
          <Title type="title__create">Enter the type </Title>
          <Select control={control} name="type" />
        </InputWrapper>
        <Button type="submit" classType="create__button">Create</Button>
      </form>
    </div>
  );
};

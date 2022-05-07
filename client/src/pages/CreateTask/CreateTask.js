import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Title, Input, Errors, Button, TextArea } from "../../components";
import { InputWrapper } from "../../layouts";
import "./createTask.styles.css";

export const CreateTask = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Controller
            name="title"
            control={control}
            render={({ field: { onChange } }) => (
              <Input
                onChange={onChange}
                placeholder="Enter a title for task"
              />
            )}
          />
          {errors?.task && <Errors>Title is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange } }) => (
              <TextArea onChange={onChange} placeholder="Description" />
            )}
          />
          {errors?.task && <Errors>Title is incorrect</Errors>}
        </InputWrapper>
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};
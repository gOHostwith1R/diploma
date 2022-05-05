import { Controller, useForm } from "react-hook-form";
import { Title, Input, Button } from "../../components";
import { AuthLayouts, FormAuth } from "../../layouts";

export const LoginPage = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <AuthLayouts>
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <Title type="title__auth">Login</Title>
        <Controller
          name="userName"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Enter the user name"
              type="auth"
            />
          )}
        />
        <Button type="submit" classType="auth__button">
          Login
        </Button>
      </FormAuth>
    </AuthLayouts>
  );
};

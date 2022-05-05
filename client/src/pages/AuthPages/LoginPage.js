import { Controller, useForm } from "react-hook-form";
import { Title, Input } from "../../components";
import { AuthLayouts, FormAuth } from "../../layouts";

export const LoginPage = () => {
  const { control, handleSubmit } = useForm();
  return (
    <AuthLayouts>
      <FormAuth>
        <Title type="title__auth">Login</Title>
        <Controller
          name="userName"
          control={control}
          render={({ field: { ref } }) => (
            <Input inputRef={ref} placeholder="Enter the user name" />
          )}
        />
      </FormAuth>
    </AuthLayouts>
  );
};

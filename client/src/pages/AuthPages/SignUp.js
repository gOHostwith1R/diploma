import { Controller, useForm } from "react-hook-form";
import { Title, Input, Button, CustomLink } from "../../components";
import { AuthLayouts, AuthNavigateWrapper, FormAuth } from "../../layouts";

export const SignUpPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <AuthLayouts>
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <Title type="title__auth">Sign Up</Title>
        <Controller
          name="userName"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Enter the user name"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Enter the password"
              type="password"
            />
          )}
        />
        <Controller
          name="firstName"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Enter the first name"
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Enter the last name"
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Enter the age"
            />
          )}
        />
        <AuthNavigateWrapper>
          <Button type="submit" classType="auth__button">
            Sign Up
          </Button>
          <CustomLink path="/login">Login</CustomLink>
        </AuthNavigateWrapper>
      </FormAuth>
    </AuthLayouts>
  );
};

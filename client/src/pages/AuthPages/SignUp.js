import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUpUser } from "../../redux/reducers/userSlice";
import { Title, Input, Button, CustomLink, Errors } from "../../components";
import {
  AuthLayouts,
  AuthNavigateWrapper,
  FormAuth,
  InputWrapper,
} from "../../layouts";

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
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
  const onSubmit = (data) => dispatch(fetchSignUpUser(data));
  return (
    <AuthLayouts>
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <Title type="title__auth">Sign Up</Title>
        <InputWrapper>
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
          {errors?.userName && <Errors>User name is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
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
          {errors?.password && <Errors>Password is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
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
          {errors?.firstName && <Errors>First name is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
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
          {errors?.lastName && <Errors>Last name is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
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
          {errors?.age && <Errors>Age is incorrect</Errors>}
        </InputWrapper>
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

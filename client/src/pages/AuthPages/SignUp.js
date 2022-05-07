import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUpUser, clearErrors } from "../../redux/reducers/userSlice";
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
  const errors = useSelector((state) => state.user.errorsSignUp)?.reduce(
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
          <Input
            control={control}
            placeholder="Enter the user name"
            name="userName"
          />
          {errors?.userName && <Errors>User name is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
          <Input
            control={control}
            placeholder="Enter the password"
            name="password"
            type="password"
          />
          {errors?.password && <Errors>Password is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
          <Input
            control={control}
            placeholder="Enter the first name"
            name="firstName"
          />
          {errors?.firstName && <Errors>First name is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
          <Input
            control={control}
            placeholder="Enter the last name"
            name="lastName"
          />
          {errors?.lastName && <Errors>Last name is incorrect</Errors>}
        </InputWrapper>
        <InputWrapper>
          <Input control={control} placeholder="Enter the age" name="age" />
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

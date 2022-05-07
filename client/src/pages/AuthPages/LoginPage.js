import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { clearErrors, fetchLoginUser } from "../../redux/reducers/userSlice";
import { Title, Input, Button, CustomLink, Errors } from "../../components";
import {
  AuthLayouts,
  AuthNavigateWrapper,
  FormAuth,
  InputWrapper,
} from "../../layouts";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.user.errorsLogin);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const onSubmit = (data) => dispatch(fetchLoginUser(data));
  return (
    <AuthLayouts>
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <Title type="title__auth">Login</Title>
        <Input
          control={control}
          placeholder="Enter the user name"
          name="userName"
        />
        <InputWrapper>
          <Input
            control={control}
            placeholder="Enter the password"
            name="password"
            type="password"
          />
          {errors && <Errors>{errors}</Errors>}
        </InputWrapper>
        <AuthNavigateWrapper>
          <Button type="submit" classType="auth__button">
            Login
          </Button>
          <CustomLink path="/sign-up">Sign Up</CustomLink>
        </AuthNavigateWrapper>
      </FormAuth>
    </AuthLayouts>
  );
};

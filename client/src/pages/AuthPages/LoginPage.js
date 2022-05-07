import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { fetchLoginUser } from "../../redux/reducers/userSlice";
import { Title, Input, Button, CustomLink, Errors } from "../../components";
import { AuthLayouts, AuthNavigateWrapper, FormAuth } from "../../layouts";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.user.errors);
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
        <Controller
          name="userName"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <Input onChange={onChange} placeholder="Enter the user name" />
          )}
        />
        <div>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <Input
                onChange={onChange}
                placeholder="Enter the password"
                type="password"
              />
            )}
          />
          {errors && <Errors>{errors}</Errors>}
        </div>
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

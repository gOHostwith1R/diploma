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
      <Title type="page__auth">Онлайн сервис для совместной работы</Title>
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <Title type="title__auth">Вход</Title>
        <Input
          control={control}
          placeholder="Введите имя пользователя"
          name="userName"
        />
        <InputWrapper>
          <Input
            control={control}
            placeholder="Введите пароль"
            name="password"
            type="password"
          />
          {errors && <Errors>{errors}</Errors>}
        </InputWrapper>
        <AuthNavigateWrapper>
          <Button type="submit" classType="auth__button">
            Вход
          </Button>
          <CustomLink path="/sign-up">Регистрация</CustomLink>
        </AuthNavigateWrapper>
      </FormAuth>
    </AuthLayouts>
  );
};

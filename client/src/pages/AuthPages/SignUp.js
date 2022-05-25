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
      <Title type="page__auth">Онлайн сервис для совместной работы</Title>
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <Title type="title__auth">Регистрация</Title>
        <InputWrapper>
          <Input
            control={control}
            placeholder="Введите имя пользователя"
            name="userName"
          />
          {errors?.userName && <Errors>Имя пользователя не подходит</Errors>}
        </InputWrapper>
        <InputWrapper>
          <Input
            control={control}
            placeholder="Введите пароль"
            name="password"
            type="password"
          />
          {errors?.password && <Errors>Пароль не подходит</Errors>}
        </InputWrapper>
        <InputWrapper>
          <Input control={control} placeholder="Ваше имя" name="firstName" />
          {errors?.firstName && <Errors>Имя не должно быть пустым</Errors>}
        </InputWrapper>
        <InputWrapper>
          <Input control={control} placeholder="Ваша фамилия" name="lastName" />
          {errors?.lastName && <Errors>Фамилия не должна быть пустой</Errors>}
        </InputWrapper>
        <InputWrapper>
          <Input control={control} placeholder="Ваш возраст" name="age" />
          {errors?.age && <Errors>Не коректный возраст</Errors>}
        </InputWrapper>
        <AuthNavigateWrapper>
          <Button type="submit" classType="auth__button">
            Регистрация
          </Button>
          <CustomLink path="/login">Вход</CustomLink>
        </AuthNavigateWrapper>
      </FormAuth>
    </AuthLayouts>
  );
};

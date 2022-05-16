import React from "react";
import { Routes, Route } from "react-router";
import { useSelector } from "react-redux";
import {
  CreateTask,
  LoginPage,
  MainPage,
  Profile,
  SignUpPage,
  TaskPage,
} from "../pages";
import { WithoutAuth } from "../hoc/WithoutAuth";
import { RequireAuth } from "../hoc/RequireAuth";
import { Header } from "../layouts";

export const useRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <WithoutAuth isAuth={isAuth}>
            <LoginPage />
          </WithoutAuth>
        }
      />
      <Route
        path="/sign-up"
        element={
          <WithoutAuth isAuth={isAuth}>
            <SignUpPage />
          </WithoutAuth>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth isAuth={isAuth}>
            <>
              <Header />
              <MainPage />
            </>
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth isAuth={isAuth}>
            <>
              <Header />
              <Profile />
            </>
          </RequireAuth>
        }
      />
      <Route
        path="/create"
        element={
          <RequireAuth isAuth={isAuth}>
            <>
              <Header />
              <CreateTask />
            </>
          </RequireAuth>
        }
      />
      <Route
        path="/task/:id"
        element={
          <RequireAuth isAuth={isAuth}>
            <>
              <Header />
              <TaskPage />
            </>
          </RequireAuth>
        }
      />
    </Routes>
  );
};

import React from "react";
import { Routes, Route } from "react-router";
import { useSelector } from "react-redux";
import { LoginPage } from "../pages/AuthPages/LoginPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { WithoutAuth } from "../hoc/WithoutAuth";
import { RequireAuth } from "../hoc/RequireAuth";

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
        path="/"
        element={
          <RequireAuth isAuth={isAuth}>
            <MainPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

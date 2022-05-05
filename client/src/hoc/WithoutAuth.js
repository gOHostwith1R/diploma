import { Navigate } from "react-router";

export const WithoutAuth = ({ children, isAuth }) => (isAuth ? <Navigate to="/" /> : children);
import { Navigate } from 'react-router';

export const RequireAuth = ({ children, isAuth }) => (!isAuth ? <Navigate to="/login" /> : children);
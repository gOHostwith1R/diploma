import { useRouter } from "../hooks";
import "./app.styles.css";

export const App = () => {
  const routes = useRouter();
  return <div className="app">{routes}</div>;
};

import { useRoutes } from "react-router-dom";
import routes from "@/router/routes";
const RouterComponent = () => {
  return useRoutes(routes);
};

export default RouterComponent;

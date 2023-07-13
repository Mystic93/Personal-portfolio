import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./pages/Login";
import User from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/profile",
    element: <User />,
  },
  {
    path: "*",
    element: "Impossible de trouver la page",
  },
]);

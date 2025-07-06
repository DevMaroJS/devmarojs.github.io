import { StrictMode } from "react";
import AppRouter from "./AppRouter";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

const routes = createBrowserRouter(createRoutesFromElements(AppRouter()));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);

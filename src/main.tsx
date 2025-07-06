import { StrictMode } from "react";
import AppRouter from "./AppRouter";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

export const ROOT = import.meta.env.DEV ? '/' : '/personal-portfolio/'

const routes = createBrowserRouter(
  createRoutesFromElements(AppRouter()), 
  { basename: ROOT }
);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);

import { Route } from "react-router-dom";
import App from "./App";

function AppRouter() {
  return (
    <Route element={<App />}>
      <Route
        path="/"
        element={
          <div className="main-container">
            <div className="main-container__title">
              <p>
                <hr />
                Hello there!
                <hr />
              </p>
              <span>I am Yldemaro</span>
            </div>
            <span className="main-container__description">
              🚧 UNDER CONSTRUCTION 🚧
            </span>
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div className="main-container">
            <div className="main-container__title">
              <p>
                <hr />
                Contact me
                <hr />
              </p>
            </div>
            <span className="main-container__description">
              🚧 UNDER CONSTRUCTION 🚧
            </span>
          </div>
        }
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  );
}

export default AppRouter;

import { Route } from "react-router-dom";
import App from "./App";
import { ROOT } from "./main";

function AppRouter() {
  return (
    <Route element={<App />}>
      <Route
        path={ROOT}
        element={
          <div className="main-container">
            <div className="main-container__title">
            <div className="line"/>
              <p> Hello there! </p>
              <div className="line"/>
              <span>I am Yldemaro</span>
            </div>
            <span className="main-container__description">
              🚧 UNDER CONSTRUCTION 🚧
            </span>
          </div>
        }
      />
      <Route
        path={`${ROOT}contact`}
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

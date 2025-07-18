import { Route } from 'react-router-dom';
import App from './App';
import { Home } from './pages';

function AppRouter() {
  return (
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      {/* <Route
        path="/contact"
        element={
          <div className="main-container">
            <div className="main-container__title">
              <p>Contact me</p>
            </div>
            <span className="main-container__description">
              🚧 UNDER CONSTRUCTION 🚧
            </span>
          </div>
        }
      /> */}
      <Route
        path="*"
        element={
          <div className="main-container__empty-page">
            🚧 UNDER CONSTRUCTION 🚧
          </div>
        }
      />
    </Route>
  );
}

export default AppRouter;

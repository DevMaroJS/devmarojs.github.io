import { Route } from 'react-router-dom';
import App from './App';

function AppRouter() {
  return (
    <Route element={<App />}>
      <Route
        path="/"
        element={
          <div className="main-container">
            <div className="main-container__title">
              <h1>
                Hello there<span>!</span>
              </h1>
              <h1>
                This is <span>Yldemaro</span>, I am a <span>full-stack</span>{' '}
                developer.
              </h1>
            </div>
            <span className="main-container__description">
              🚧 UNDER CONSTRUCTION 🚧
            </span>
          </div>
        }
      />
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
      <Route path="*" element={<div>🚧 UNDER CONSTRUCTION 🚧</div>} />
    </Route>
  );
}

export default AppRouter;

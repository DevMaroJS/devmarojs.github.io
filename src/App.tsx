import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;

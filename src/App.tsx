import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;

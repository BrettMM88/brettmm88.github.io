import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App clouds">
      <header className="App-header">
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

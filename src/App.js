import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div class="App clouds">
      <header className="App-header">
        <Navbar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Home />} />
          <Route path="/resume" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

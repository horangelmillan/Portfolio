import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
  );
}

export default App;

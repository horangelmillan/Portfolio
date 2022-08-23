import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Me, Projects, Contact } from './pages/index';
import { Navbar, RetractImgs } from './components/index';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <div className='layout'>
          <RetractImgs />
          <div className='margin-content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/me' element={<Me />} />
              <Route path="/projects" element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

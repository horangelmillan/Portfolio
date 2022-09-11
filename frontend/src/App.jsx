import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Me, Projects, Contact } from './pages/index';
import { Navbar, RetractImgs } from './components/index';
import { useRef } from 'react';

function App() {

  const contentRef = useRef();

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar contentRef={contentRef} />
        <div className='layout'>
          <RetractImgs />
          <div className='margin-content'>
            <Routes>
              <Route path="/" element={<Home ref={contentRef} />} />
              <Route path='/me' element={<Me ref={contentRef} />} />
              <Route path="/projects" element={<Projects ref={contentRef} />} />
              <Route path='/contact' element={<Contact ref={contentRef} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

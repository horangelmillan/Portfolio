import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Me, Projects, Contact } from './pages/index';
import { Navbar, RetractImgs, ScrollBar } from './components/index';
import { useRef } from 'react';
import { ArrowDown } from './components/index';
import useScrollData from './hooks/useScrollData2';
import Modal from './components/Modal/Modal';

function App() {

  const contentRef = useRef();

  useScrollData();

  return (
    <div className='App'>
      <BrowserRouter>
        <Modal />
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
      <ArrowDown
        classNameProps={true}
        action={true}
      />
      <ScrollBar />
    </div>
  );
};

export default App;

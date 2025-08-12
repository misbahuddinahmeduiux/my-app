import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/textform.js'; 
import About from './components/about.js';
import Footer from './components/footer.js'; 
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // default mode

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark'); // ✅ correct usage
      document.body.style.backgroundColor = '#121212'; // example dark background
      document.body.style.color = '#fff';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} /> 

      <div className="container my-5">
        <TextForm heading="Text Convertor" />
      </div>

      <div className="container">
        <About />
      </div>
       
      <Footer />
    </>
  );
}

export default App;

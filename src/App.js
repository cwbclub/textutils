import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about='AboutUs' mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze" mode={mode} />
      {/* <About /> */}

    </>
  );
}

export default App;

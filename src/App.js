import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Index } from './components/Index/Index';
import { languageContext } from './hooks';
import { useContext, useEffect, useState } from 'react';
function App() {
  const [lang, setLang] = useState('en')

  return (
    <>
      <Router>
        <languageContext.Provider value={{ lang, setLang }}>
          <Navbar />
          <Routes>
            <Route path='/' element={
              <Index />
            } />
          </Routes>
        </languageContext.Provider>
      </Router>
    </>
  );
}

export default App;


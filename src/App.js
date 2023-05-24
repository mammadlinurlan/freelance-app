import logo from './logo.svg';
import './App.css';
import { Router,Routes,Route } from 'react-router';
import { Navbar } from './components/Navbar/Navbar';
import { Index } from './components/Index/Index';
import { languageContext } from './hooks';
import { useContext, useEffect, useState } from 'react';
function App() {
  const [lang,setLang] = useState('en')
 
  return (
    <languageContext.Provider value={{lang,setLang}}>
        <Navbar/>
      <Index/>
    </languageContext.Provider>
  );
}

export default App;

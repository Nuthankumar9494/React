
import './App.css';

import { TextForm } from './components/TextForm';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
 const [mode,setMode]=useState('light');
 let onChange=()=>{
  mode === 'light' ? setMode('dark') : setMode('light');
 }
  return (
    <>
    <Router>
    <Navbar title="textUtils" aboutText="about"  mode={mode} toggleMode={onChange}/>
    <Routes>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/' element={<TextForm/>}></Route>
    </Routes> 
    </Router>
    </>
  );
}

export default App;

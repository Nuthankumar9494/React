
import './App.css';

import { TextForm } from './components/TextForm';
import { Navbar } from './components/Navbar';
import { useState } from 'react';



function App() {
 const [mode,setMode]=useState('light');
 let onChange=()=>{
  mode === 'light' ? setMode('dark') : setMode('light');
 }
  return (
    <>
    <Navbar title="textUtils" aboutText="about"  mode={mode} toggleMode={onChange}/>
    <div className='container my-4'><TextForm/></div> 
    {/* <div className='container-fluid'><About/></div> */}
    
    </>
  );
}

export default App;

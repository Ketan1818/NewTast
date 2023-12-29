import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataPortal from './components/DataPortal';
import Navpage from './components/Navpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataPortal />}></Route>
        <Route path='/Navpage' element={<Navpage/>}></Route>
          
          
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;

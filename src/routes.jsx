import React from 'react';
import {  Route,  Routes } from 'react-router-dom';
import Home from './pages/Home';

import TipoA from './pages/TipoA'
import TipoB from './pages/TipoB';
import TipoC from './pages/TipoC';
 
function createRoutes() {
  return (
    
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tipoA' element={<TipoA/>} />
        <Route path='/tipoB' element={<TipoB/>} />
        <Route path='/tipoC' element={<TipoC/>} />
      </Routes>
    
  );
}
 
export default createRoutes;
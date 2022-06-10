import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import Detail from './components/Detail'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Articles/>}/>
      <Route path='/:id' element={<Detail/>}/>
    </Routes>
  

   </BrowserRouter>
  )
}

export default App;

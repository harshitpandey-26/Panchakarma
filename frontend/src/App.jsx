// import { useState } from 'react';
// import './styles/global.scss';
// import HomePage from './pages/Home/HomePage';
// import { Route, Router, Routes } from 'react-router-dom';

// function App() {
  
//   return (
    
//       <Routes>
//         <Route path='/' element={<HomePage/>} />
//      </Routes>
//   )
// }

// export default App


import "./styles/global.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;

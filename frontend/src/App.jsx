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
import HomePage from "./pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignupPage from "./components/SignupPage/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
    </Routes>
  );
}

export default App;

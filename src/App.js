import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

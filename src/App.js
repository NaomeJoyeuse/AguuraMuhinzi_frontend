import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/test_page.tsx';  
import Home from './pages/landing.tsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<Signup />} />
        
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;

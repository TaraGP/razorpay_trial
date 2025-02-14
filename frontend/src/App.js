//frontend\src\App.js
import React from 'react';
import Home from './Home.jsx';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import PaymentSuccess from './PaymentSuccess.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
    
  );
}

export default App;

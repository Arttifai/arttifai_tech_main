import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Rename your existing App.js to HomePage.jsx
import InternshipsPage from './InternshipsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/internships" element={<InternshipsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

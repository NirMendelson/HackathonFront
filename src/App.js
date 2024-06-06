import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import HomePage from './HomePage';
import SessionPage from './SessionPage';
import SessionHistory from './SessionHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} exact />
        <Route path="/home" element={<HomePage />} />
        <Route path="/session" element={<SessionPage />} />
        <Route path="/history" element={<SessionHistory />} />
      </Routes>
    </Router>
  );
}

export default App;

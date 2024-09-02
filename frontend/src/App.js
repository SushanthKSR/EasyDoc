import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignupPage from './pages/signup/Signup';
import Login from './pages/login/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<LoginSignupPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

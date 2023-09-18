import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import RegistrationForm from './Components/RegistrationForm';
import RegistrationSuccess from './Components/RegistrationSuccess';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<RegistrationForm/>} />
          <Route path="/registration-success" element={<RegistrationSuccess/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

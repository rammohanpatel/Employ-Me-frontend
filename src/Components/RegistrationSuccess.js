import React from 'react';
import { Link } from 'react-router-dom';
import './RegistrationSuccess.css';

const RegistrationSuccess = () => {
  return (
    <div className='container'>
      <h1>Registration Successful!</h1>
      <p>Your registration has been successfully processed.</p>
      <Link to="/">
        <button className='btn'>Back to Main Page</button>
      </Link>
    </div>
  );
};

export default RegistrationSuccess;

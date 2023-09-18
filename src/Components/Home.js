import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import RegistrationForm from './RegistrationForm';

const Home = () => {
 
  const handleRegister = (userData) => {
    // Handle user registration data here (e.g., make an API call)
    console.log('User registration data:', userData);
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to EmployMe</h1>
        <p className="para">
          Ambition is at the heart of EmployMe, a company dedicated to
          transforming the job market by connecting employers with skilled
          workers and empowering individuals to reach their career aspirations.
        </p>
        <Link to="/register">
        <button className="cta-button" onClick={()=>console.log('Get Started button Clicked')}>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import './RegistrationForm.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    occupation: '',
    skills: '',
    education: '',
    gender: '', // You can set a default value if needed
    age: '',
  });

  // 
  const sendDataToBackend = async () => {
    try {
      const response = await axios.post('https://emplybackend.vercel.app/register', formData); // Use the correct backend route
      console.log('Registration successful:', response.data);
  
      // Handle success, e.g., show a success message or redirect to a login page
      navigate('/registration-success');
    } catch (error) {
      console.error('Registration failed:', error);
  
      // Handle registration failure, e.g., display an error message to the user
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    sendDataToBackend();
    // onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete = "text"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete = "text"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete = "text"
        />
      </div>
      <div>
        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          autoComplete = "text"
        />
      </div>
      <div>
        <label htmlFor="skills">Skills:</label>
        <input
          type="text"
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          autoComplete = "text"
        />
      </div>
      <div>
        <label htmlFor="education">Educational Background:</label>
        <input
          type="text"
          id="education"
          name="education"
          value={formData.education}
          onChange={handleChange}
          autoComplete = "text"
        />
      </div>
      <div>
        <label htmlFor="gender">Gender: </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          autoComplete = "text"
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegistrationForm;

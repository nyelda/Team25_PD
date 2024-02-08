import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    // For simplicity, let's assume successful signup if username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      // Perform actions for successful signup, such as creating a new user
      alert('Signup successful! Redirecting to login page...');
      // Redirect to login page after successful signup
      window.location.href = '/login';
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Signup Here!</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <Link to="/"></Link>
      <div>
        Already have an account? <Link to="/">Login here</Link>
      </div>
    </div>
  );
};

export default Signup;

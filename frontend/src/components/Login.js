import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, let's assume successful login if username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      // Redirect to home page upon successful login
      window.location.href = '/home';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">
        <Link to="/main">Login</Link> 
          </button>
        <div>
          Don't have an account? <Link to="/signup">Sign up here</Link>.
        </div>
      </form>
    </div>
  );
};

export default Login;

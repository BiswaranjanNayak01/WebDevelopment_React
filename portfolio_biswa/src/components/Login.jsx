import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log('Employee ID:', employeeId);
    console.log('Password:', password);
    console.log('Captcha:', captcha);
  };

  return (
    <div className="login-container">
      <div className="header">
        <img src="https://tcs.com/logo.png" alt="TCS Logo" className="tcs-logo" />
        <h2>CANDIDATE LOGIN</h2>
      </div>
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <label>Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
          <label>User Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Captcha:</label>
          <div className="captcha-section">
            <img src="https://example.com/captcha.png" alt="Captcha" className="captcha-image" />
            <input
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="version">Version 15.00.01</p>
      </div>
    </div>
  );
};

export default Login;

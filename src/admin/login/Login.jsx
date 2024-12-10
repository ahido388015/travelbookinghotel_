import React, { useState } from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Email và mật khẩu là bắt buộc.');
    } else {
      setError('');
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

const navigate = useNavigate();

const handleDashboardClick = () => {
  navigate("/admin/dashboard");
};

  return (
    <div className='login-form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Đăng nhập Admin</h2>
        {error && <p className='error-message'>{error}</p>}
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Mật khẩu:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' onClick={handleDashboardClick}>Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;

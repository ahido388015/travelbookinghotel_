import React, { useState } from 'react';
import './registerform.css';

const Registerform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Mật khẩu và xác nhận mật khẩu không khớp.');
    } else if (name === '' || email === '' || password === '') {
      setError('Tất cả các trường là bắt buộc.');
    } else {
      setError('');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className='register-form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        <h2>Đăng ký</h2>
        {error && <p className='error-message'>{error}</p>}
        <div className='form-group'>
          <label>Họ và tên:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className='form-group'>
          <label>Xác nhận mật khẩu:</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Đăng ký</button>
      </form>
    </div>
  );
};

export default Registerform;

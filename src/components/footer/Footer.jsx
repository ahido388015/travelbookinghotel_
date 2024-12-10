import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-box'>
      <div className='footer-content'>
        <div className='footer-section about'>
          <h2 className='footer-title'>Về Chúng Tôi</h2>
          <p>
            Chào mừng đến với trang web đặt phòng khách sạn của chúng tôi. Chúng tôi cung cấp những phòng nghỉ tốt nhất với giá cả cạnh tranh cùng dịch vụ hàng đầu.
          </p>
        </div>

        <div className='footer-section links'>
          <h2 className='footer-title'>Liên Kết Nhanh</h2>
          <ul>
            <li><a href='/about'>Về Chúng Tôi</a></li>
            <li><a href='/rooms'>Phòng</a></li>
            <li><a href='/services'>Dịch Vụ</a></li>
            <li><a href='/contact'>Liên Hệ</a></li>
          </ul>
        </div>

        <div className='footer-section contact'>
          <h2 className='footer-title'>Liên Hệ</h2>
          <p>Email: info@hotelbooking.com</p>
          <p>Điện thoại: +84 123 456 789</p>
          <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
        </div>

        <div className='footer-section social'>
          <h2 className='footer-title'>Kết Nối Với Chúng Tôi</h2>
          <div className='social-links'>
            <a href='https://www.facebook.com' className='social-link'>Facebook</a>
            <a href='https://www.twitter.com' className='social-link'>Twitter</a>
            <a href='https://www.instagram.com' className='social-link'>Instagram</a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 HotelBooking. Design by DoAnhHuy</p>
      </div>
    </div>
  );
};

export default Footer;

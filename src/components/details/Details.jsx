import React from 'react';
import './details.css';
import {useNavigate} from 'react-router-dom';

const roomData = {
  name: 'Căn Hộ Tower Street',
  description: '196 Trần Bạch Đằng, phường Mỹ An, quận Ngũ Hành Sơn, TP Đà Nẵng - 0799737828',
  images: [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ],
//   images: [
//     <img
//     src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
//     alt=""
//     className="siImg"
//     />,
//     <img
//     src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
//     alt=""
//     className="siImg"
//   />,
//   <img
//   src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
//   alt=""
//   className="siImg"
// />
   
//   ],
  services: [
    'Miễn Phí WiFi',
    'Lễ Tân 24h',
    'View Biển ',
    'Kèm phục vụ buffet bữa sáng',
    'Các dịch vụ khuyến mãi: thuê xe, vé tour, vé máy bay...',
    'Bao gồm tiện ích khác: bể bơi, phòng gym',
  ],
  price: 120,
  currency: 'USD',
};


const Detail = () => {
  return (
    <div className="room-detail-container">
      <h1 className="room-name">{roomData.name}</h1>
      <div className="room-images">
        {roomData.images.map((image, index) => (
          <img key={index} src={image} alt={`Room view ${index + 1}`} className="room-image" />
        ))}
      </div>
      <p className="room-description">{roomData.description}</p>
      <h2 className="services-title">Dịch Vụ </h2>
      <ul className="room-services">
        {roomData.services.map((service, index) => (
          <li key={index} className="service-item">{service}</li>
        ))}
      </ul>
      <div className="room-price">
        <span className="price-amount">{roomData.currency} {roomData.price}</span> mỗi đêm
      </div>
      <div className="btn">
        <button className="btn_book">Đặt phòng</button>
      </div>
    </div>
  );
};

export default Detail;

import React from 'react';
import './comment.css';

const commentsData = [
  {
    id: 1,
    name: 'Tran',
    country: 'Vietnam',
    comment: 'Nhân viên nhiệt tình, niềm nở dù checkin vào 30 Tết',
  },
  {
    id: 2,
    name: 'Ha',
    country: 'Vietnam',
    comment: 'Khách sạn gần trung tâm phố cổ, xe đạp miễn phí...',
  },
  {
    id: 3,
    name: 'Sang',
    country: 'Vietnam',
    comment: 'Phòng rộng, bể bơi đẹp, các bạn nhân viên nhiệt tình...',
  },
];

const ratings = {
  service: 9.6,
  comfort: 9.2,
  wifi: 9.6,
  amenities: 9.0,
  valueForMoney: 9.1,
  cleanliness: 9.1,
  location: 9.3,
};

const Comment = () => {
  return (
    <div className="comment-container">
      <div className="ratings">
        <h3>Đánh giá của khách</h3>
        <div className="rating-category">
          <span>Nhân viên phục vụ</span>
          <div className="rating-bar" style={{ width: `${ratings.service * 10}%` }}></div>
        </div>
        <div className="rating-category">
          <span>Thoải mái</span>
          <div className="rating-bar" style={{ width: `${ratings.comfort * 10}%` }}></div>
        </div>
        <div className="rating-category">
          <span>WiFi miễn phí</span>
          <div className="rating-bar" style={{ width: `${ratings.wifi * 10}%` }}></div>
        </div>
        <div className="rating-category">
          <span>Tiện nghi</span>
          <div className="rating-bar" style={{ width: `${ratings.amenities * 10}%` }}></div>
        </div>
        <div className="rating-category">
          <span>Đáng giá tiền</span>
          <div className="rating-bar" style={{ width: `${ratings.valueForMoney * 10}%` }}></div>
        </div>
        <div className="rating-category">
          <span>Sạch sẽ</span>
          <div className="rating-bar" style={{ width: `${ratings.cleanliness * 10}%` }}></div>
        </div>
        <div className="rating-category">
          <span>Địa điểm</span>
          <div className="rating-bar" style={{ width: `${ratings.location * 10}%` }}></div>
        </div>
      </div>

      <div className="comments">
        <h4>Khách lưu trú ở đây thích điều gì?</h4>
        {commentsData.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-header">
              <span className="comment-name">{comment.name}</span>
              <span className="comment-country">{comment.country}</span>
            </div>
            <p className="comment-text">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;

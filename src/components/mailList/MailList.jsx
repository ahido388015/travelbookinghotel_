import "./mailList.css"
import { useNavigate } from "react-router-dom"

const MailList = () => {

  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("/login");
  }
  return (
    <div className="mail">
      <h1 className="mailTitle">Tiết kiệm thời gian, tiết kiệm chi phí</h1>
      <span className="mailDesc">Đăng ký ngay để nhận nhiều ưu đãi</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email của bạn" />
        <button className="btn_mail" onClick={handleClickLogin}>Đăng ký </button>
      </div>
    </div>
  )
}

export default MailList
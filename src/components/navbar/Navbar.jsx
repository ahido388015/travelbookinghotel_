import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register"); 
  };

  const handleLoginClick = () => {
    navigate("/login"); 
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleHome}>AhiDo_Booking</span>
        <div className="navItems">
          <button className="navButton" onClick={handleRegisterClick}> Đăng Kí </button>
          <button className="navButton" onClick={handleLoginClick}>Đăng Nhập</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

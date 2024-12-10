import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hotel.css";
import { useState } from "react";
import { format, addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";
import Navbar from "../../components/navbar/Navbar";
import Hearder from "../../components/header/Header";
import Details from "../../components/details/Details";
import Comment from "../../components/comment/Comment";
import Footer from "../../components/footer/Footer";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
  });
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
   <div>
    <Navbar/>
    <Hearder/>
    <div>
      <br/>
      <br/>
      <br/>
       <Details/>
       <br/>
       <br/>
       <div style={{ marginTop: "10px", width: "70%", marginLeft: "15%" }}>
            <Comment/>
      </div>
      <div>
      <div>
      <Footer/>
      </div>
      </div>
    </div>
    </div>
    
  );
};

export default Header;

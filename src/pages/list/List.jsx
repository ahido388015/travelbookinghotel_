import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem";
import Comment from "../../components/comment/Comment";
import Footer from "../../components/footer/Footer";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const handleDateChange = (e, type) => {
    const newDate = { ...date, [type]: new Date(e.target.value) };
    setDate(newDate);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Tìm kiếm</h1>
            <div className="lsItem">
              <label>Điểm đến</label>
              <input 
                placeholder={destination}
                type="text"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label>Ngày nhận phòng</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date.startDate, "MM/dd/yyyy")} đến ${format(date.endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <div className="datePicker">
                  <input
                    type="date"
                    value={format(date.startDate, "yyyy-MM-dd")}
                    onChange={(e) => handleDateChange(e, "startDate")}
                  />
                  <input
                    type="date"
                    value={format(date.endDate, "yyyy-MM-dd")}
                    onChange={(e) => handleDateChange(e, "endDate")}
                  />
                </div>
              )}
            </div>
            <div className="lsItem">
              <label>Tùy chọn</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Giá tối thiểu <small>mỗi đêm</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Giá tối đa <small>mỗi đêm</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Người lớn</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Trẻ em</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Phòng</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Tìm kiếm</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10px", width: "70%", marginLeft: "15%" }}>
            <Comment/>
      </div>
      <div>
      <Footer/>
    </div>
    </div>
   
    
  );
};

export default List;

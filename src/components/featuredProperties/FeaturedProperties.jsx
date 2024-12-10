import "./featuredProperties.css";


const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Hà Nội</span>
        <span className="fpPrice">$120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Xuất Sắc</span>
        </div>
      </div>
      <div className="fpItem">
      <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mường Thanh Hotel</span>
        <span className="fpCity">Đà Nẵng</span>
        <span className="fpPrice">$140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Tuyệt vời</span>
        </div>
      </div>
      <div className="fpItem">
      <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Dreams Hotel</span>
        <span className="fpCity">Đà Lạt</span>
        <span className="fpPrice">$79</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Tận Tâm</span>
        </div>
      </div>
      <div className="fpItem">
      <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton SaiGon</span>
        <span className="fpCity">TP.HCM</span>
        <span className="fpPrice">$105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Đẳng Cấp</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;

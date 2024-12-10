import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Home from "./pages/home/Home";
  import Hotel from "./pages/hotel/Hotel";
  import List from "./pages/list/List";  
  import Register from "./pages/register/Register";
  import Loginf from "./pages/loginf/Logonf";
  import Dashboard from "./admin/dashboard/Dashboard";
  import Login from "./admin/login/Login";
  import Information from "./components/information/Information";
  import MailList from "./components/mailList/MailList";
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/login" element={<Login/>}/>
          <Route path="/infomation" element={<Information/>}/>
          <Route path="/login" element={<Loginf/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/hotels/:id" element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  
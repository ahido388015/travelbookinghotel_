import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Registerform from '../../components/registerform/Registerform'

const Dashboard = () => {
  return (
    <div>
        <h1 className='title'>Dashboard Admin</h1>
        <nav className="navbar">
         <ul className="navbar-nav">
            <li><Link to="/admin/accounts">Quản lý tài khoản</Link></li>
            <li><Link to="/admin/article-categories">Quản lý danh mục bài viết</Link></li>
            <li><Link to="/admin/articles">Quản lý bài viết</Link></li>
            <li><Link to="/admin/rooms">Quản lý phòng</Link></li>
            <li><Link to="/admin/revenue">Quản lý doanh thu</Link></li>
         </ul>
        </nav>
        <div>
            <Registerform/>
        </div>
        
    </div>
  )
}

export default Dashboard
import React from 'react'
import LoginForm from '../../components/loginform/Loginform';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Logonf = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <LoginForm />
        <br/>
        <Footer/>
    </div>
  )
}

export default Logonf
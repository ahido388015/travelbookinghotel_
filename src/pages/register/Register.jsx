import React from 'react'
import Registerform from '../../components/registerform/Registerform';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Register= () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Registerform/>
        <br/>
        <Footer/>
    </div>
  )
}

export default Register
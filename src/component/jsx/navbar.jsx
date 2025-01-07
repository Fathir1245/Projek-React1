import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';
import logo from '../../assets/logo.png';

function Nav() {
  return (
    <nav className='nav'>
      <div className="logo-container">
        <img src={logo} alt="SampahKita Logo" className="logo" />
        <h2 className="title">SampahKita</h2>
      </div>
      <div className='nav-links-container'>
        <Link to="/" className="nav-link">Beranda</Link>
        <Link to="/layanan" className="nav-link">Layanan</Link>
        <Link to="/tentang" className="nav-link">Tentang</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="#login" className="login">Login</Link>
      </div>
    </nav>
  );
}

export default Nav;
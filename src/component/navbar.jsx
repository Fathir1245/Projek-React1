import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isLoginPage = location.pathname === '/login';

  return (
    <nav className='flex justify-center text-xl font-semibold bg-[#243642] px-4 p-4 md:px-12 sticky top-0 z-10'>
      <Link to="/" className="flex justify-center items-center mr-auto text-[#f0f0f0] space-x-2 mb:justify-center">
        <img src={logo} alt="SampahKita Logo" className="rounded-md h-12 shadow-md mr-4" />
        <h2 className="font-extrabold text-2xl hidden md:flex">SampahKita</h2>
      </Link>

      <div className='hidden md:flex justify-around items-center md:font-semibold md:justify-between md:space-x-4 md:ml-4'>
        <Link to="/" className="text-[#f0f0f0] no-underline hover:underline">Beranda</Link>
        <Link to="/layanan" className="text-[#f0f0f0] no-underline hover:underline">Layanan</Link>
        <Link to="/tentang" className="text-[#f0f0f0] no-underline hover:underline">Tentang</Link>
        <Link to="/blog" className="text-[#f0f0f0] no-underline hover:underline">Blog</Link>
      </div>
      <button className="md:hidden text-[#f0f0f0]" onClick={toggleDropdown}>
        Menu
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full text-[1rem] bg-[#243642] md:hidden">
          <Link to="/" className="block text-[#f0f0f0] no-underline hover:underline p-2">Beranda</Link>
          <Link to="/layanan" className="block text-[#f0f0f0] no-underline hover:underline p-2">Layanan</Link>
          <Link to="/tentang" className="block text-[#f0f0f0] no-underline hover:underline p-2">Tentang</Link>
          <Link to="/blog" className="block text-[#f0f0f0] no-underline hover:underline p-2">Blog</Link>
        </div>
      )}
      <Link to={isLoginPage ? "/register" : "/login"} className="bg-[#D9D9D9] text-[#333] px-5 pt-1 pb-2 self-center ml-4 rounded-full border-2 border-[#D9D9D9] no-underline hover:bg-[#243642] hover:text-[#f0f0f0]">
        {isLoginPage ? "Register" : "Login"}
      </Link>
    </nav>
  );
}

export default Nav;
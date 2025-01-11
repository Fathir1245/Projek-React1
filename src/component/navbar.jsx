import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <nav className='block font-semibold bg-[#243642] px-4 md:px-12 md:p-4 md:flex md:justify-center md:text-xl sticky top-0 z-10'>
      <Link to="/" className="flex justify-center items-center mr-auto text-[#f0f0f0] space-x-2 mb:justify-center">
        <img src={logo} alt="SampahKita Logo" className="rounded-md h-6 md:h-12 md:shadow-md md:mr-4" />
        <h2 className="font-extrabold text-2xl">SampahKita</h2>
      </Link>

      <div className='flex justify-around items-center pb-2 md:font-semibold md:justify-between md:space-x-4 md:mr-4 md:ml-4">'>
        <Link to="/" className="text-[#f0f0f0] no-underline hover:underline">Beranda</Link>
        <Link to="/layanan" className="text-[#f0f0f0] no-underline hover:underline">Layanan</Link>
        <Link to="/tentang" className="text-[#f0f0f0] no-underline hover:underline">Tentang</Link>
        <Link to="/blog" className="text-[#f0f0f0] no-underline hover:underline">Blog</Link>
        <Link to="#login" className="bg-[#d1d1d1] text-[#333] px-4 py-1 mx-2 rounded-full border-2 border-[#d1d1d1] no-underline hover:bg-[#333] hover:text-[#f0f0f0]">Login</Link>
      </div>
    </nav>
  );
}

export default Nav;
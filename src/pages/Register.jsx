import React from 'react';
import Nav from '../component/navbar.jsx';
import Footer from '../component/footer.jsx';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Register() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </> 
  );

  function Main() {
    return (
<div className="bg-[#E2F1E7] flex items-center justify-center min-h-screen">
  <div className="bg-slate-800 text-white w-96 rounded-lg shadow-lg p-6 relative">
    <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
      &times;
    </button>

    <div className="flex flex-col items-center mb-6">
      <img src={logo} alt="Logo" className="rounded-full mb-2 w-12"/>
      <p className="text-center text-gray-300">
        Sudah punya akun? <Link to="/Login" className="text-green-400 hover:underline">Login</Link>
      </p>
    </div>

    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">Masukkan nama</label>
        <div className="flex items-center border-b border-gray-500 focus-within:border-green-400">
          <input type="text" id="name" placeholder="Masukkan nama"
                className="w-full bg-transparent outline-none p-2 text-white placeholder-gray-400"/>
          <span className="text-gray-400 pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.5-1.5 3-3 3s-3-1.5-3-3 1.5-3 3-3 3 1.5 3 3z"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <div className="flex items-center border-b border-gray-500 focus-within:border-green-400">
          <input type="email" id="email" placeholder="Email"
                className="w-full bg-transparent outline-none p-2 text-white placeholder-gray-400"/>
          <span className="text-gray-400 pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0h.01M12 11c0-2 2-3 3-3s3 1.5 3 3-2 3-3 3-3-1-3-3z"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
        <div className="flex items-center border-b border-gray-500 focus-within:border-green-400">
          <input type="password" id="password" placeholder="Password"
                className="w-full bg-transparent outline-none p-2 text-white placeholder-gray-400"/>
          <span className="text-gray-400 pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0-2V9m6 6c0 2-2 4-4 4s-4-2-4-4 2-4 4-4 4 2 4 4z"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <input type="checkbox" id="terms" className="h-4 w-4 text-green-400 border-gray-300 rounded focus:ring-green-400"/>
        <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
          I agree to the <a href="#" className="text-green-400 hover:underline">terms and conditions</a>
        </label>
      </div>

      <button type="submit"
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
        Register
      </button>
    </form>
  </div>
</div>
    )
  }
}

export default Register;
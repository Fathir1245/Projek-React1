import React from 'react';
import Nav from '../component/navbar.jsx';
import Footer from '../component/footer.jsx';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Login() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </> 
  );

  function Main() {
    return(
      <div className="bg-[#E2F1E7] flex items-center justify-center min-h-screen">
        <div className="bg-slate-800 text-white w-96 rounded-lg shadow-lg p-6 relative">
          <button className="absolute top-4 right-4 text-slate-300 hover:text-white">
            &times;
          </button>
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="rounded-full mb-2 w-12"/>
          </div>
          <p className="text-center text-slate-300 mb-6">
            Belum punya akun? <Link to="/Register" className="text-green-400 hover:underline">Register</Link>
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <div className="flex items-center border-b border-slate-500 focus-within:border-green-400">
                <input type="email" id="email" placeholder="Enter your email"
                      className="w-full bg-transparent outline-none p-2 text-white placeholder-slate-400"/>
                <span className="text-slate-400 pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h.01M12 12h.01M8 12h.01M21 16.5A2.5 2.5 0 0018.5 14H5.5A2.5 2.5 0 003 16.5v1.086c0 .262.105.516.293.707l6.707 6.707a1 1 0 001.414 0l6.707-6.707A1 1 0 0021 17.586V16.5z"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <div className="flex items-center border-b border-slate-500 focus-within:border-green-400">
                <input type="password" id="password" placeholder="Enter your password"
                      className="w-full bg-transparent outline-none p-2 text-white placeholder-slate-400"/>
                <span className="text-slate-400 pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2.25-1.5-3.75-3-3.75m6 0c1.5 0 3 1.5 3 3.75 0 1.5-1.5 3.75-3 3.75m-6-3.75h3m0 0h3m0 0h0"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <input type="checkbox" id="remember" className="h-4 w-4 text-green-400 border-gray-300 rounded focus:ring-green-300"/>
              <label htmlFor="remember" className="ml-2 text-sm text-slate-300">Remember me</label>
            </div>
            <button type="submit" className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
              Submit
            </button>
          </form>
        </div>
      </div> 
    )
  };
}

export default Login;
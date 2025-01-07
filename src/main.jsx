import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Layanan from './pages/Layanan';
import Tentang from './pages/Tentang';
import Blog from './pages/Blog';
import './app.css'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="layanan" element={<Layanan />} />
      <Route path="tentang" element={<Tentang />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
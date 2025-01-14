import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Layanan from './pages/Layanan';
import Tentang from './pages/Tentang';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import PasarDaur from './pages/PasarDaur';
import TukarSampah from './pages/TukarkanSampah';
import Gabung from './pages/Gabung';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="layanan" element={<Layanan />} />
      <Route path="tentang" element={<Tentang />} />
      <Route path="blog" element={<Blog />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="PasarDaur" element={<PasarDaur />} />
      <Route path="TukarSampah" element={<TukarSampah />} />
      <Route path="Gabung" element={<Gabung />} />
    </Routes>
  </Router>
);
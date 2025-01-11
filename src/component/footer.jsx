import React from 'react';

function Footer() {
  return (
    <>
      <footer className="bg-[#243642] text-gray-100 pb-4 mb:pb-12">
        <div className="flex justify-around pb-4 border-b border-gray-300 pt-4 mb:pb-8 text-sm">
          <div>
            <h3 className="font-bold text-lg">Layanan Kami</h3>
            <p className="mt-4">Tukarkan Sampah</p>
            <p>Pasar daur</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Tentang Kami</h3>
            <p className="mt-4">Tentang</p>
            <p>Blog</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Gabung Bersama Kami</h3>
            <p className="mt-4">Gabung Sebagai Pengepul</p>
            <p>Gabung Sebagai Pendaur</p>
            <p>Gabung Sebagai Bank Sampah</p>
          </div>
          <div>
            <h3 className="font-bold text-lg pb-7">Contact Us</h3>
            <p className="mt-4">No. 08XXXXXXXXXX</p>
            <p>Jl. XXXXXX No.XXXX</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 SampahKita. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
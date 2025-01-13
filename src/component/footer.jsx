import React from 'react';

function Footer() {
  return (
    <>
      <footer className="bg-[#243642] text-gray-100 pb-4 mb:pb-12">
        <div className="flex justify-around pb-4 border-b text-[10px] border-gray-300 pt-4 px-2 mb:pb-8 md:text-[1rem]">
          <div>
            <h3 className="font-bold text-[14px] md:text-2xl">Layanan Kami</h3>
            <p className="mt-1 md:mt-4">Tukarkan Sampah</p>
            <p>Pasar daur</p>
          </div>
          <div>
            <h3 className="font-bold text-[14px] md:text-2xl">Tentang Kami</h3>
            <p className="mt-1 md:mt-4">Tentang</p>
            <p>Blog</p>
          </div>
          <div>
            <h3 className="font-bold text-[14px] md:text-2xl">Gabung Bersama Kami</h3>
            <p className="mt-1 md:mt-4">Gabung Sebagai Pengepul</p>
            <p>Gabung Sebagai Pendaur</p>
            <p>Gabung Sebagai Bank Sampah</p>
          </div>
          <div>
            <h3 className="font-bold text-[14px] md:text-2xl pb-5 md:pb-0">Contact Us</h3>
            <p className="mt-1 md:mt-4">No. 08XXXXXXXXXX</p>
            <p>Jl. XXXXXX No.XXXX</p>
          </div>
        </div>
        <div className="text-center mt-2 md:mt-4">
          <p className='text-[12px] md:text-[1rem]'>&copy; 2024 SampahKita. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
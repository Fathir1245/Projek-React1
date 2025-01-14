import React from 'react';
import Nav from '../component/navbar.jsx';
import Footer from '../component/footer.jsx';
import image from '../assets/picAdapt';
import { Link } from 'react-router-dom';

function Layanan() {
  return <div className="bg-[#E2F1E7] text-gray-100">
    <Nav />
    <Main />
    <Footer />
  </div> 

  function Main() {   
    return(
      <>
        <section className="pt-40">
          <div className="container mx-auto text-center">
            <div className="w-fit justify-self-center">
              <h2 className="text-[3.5rem] font-bold text-teal-700 pb-2 leading-none">
                Selalu Ada Cara Untuk <span className="text-gray-800">Menjaga Lingkungan</span>
              </h2>
              <p className="text-gray-600 text-[1.5rem] mt-4 text-center lg:text-left">
                Berbagai layanan yang disediakan oleh SampahKita demi menjaga kenyamanan bersama.
              </p>
            </div>
            <Card />
          </div>
          <div className="mt-[12rem] w-2/3 border-b-2 border-teal-700 flex justify-self-center lg:w-2/4"></div>
        </section>
        <Step />
      </>
    )
  };  

  function Card() {
    return(
    <>
    <div className="mt-[5rem] flex justify-around mx-4">
      <Link to="/TukarSampah">      
        <div className="bg-gray-800 w-[20rem] h-[10rem] shadow-2xl p-6 rounded-[1.5rem] cursor-pointer transform transition duration-300 hover:scale-105 hover:translate-y-[-10px] hover:shadow-3xl">          
          <h3 className="text-gray-100 font-semibold">Tukarkan Sampah</h3>
          <div className="flex justify-around">
            <img src={image[9]} alt="image" className="w-[5.8rem] rounded-full shadow-2xl" />
            <p className="mt-2 text-gray-100">Tukarkan sampah menjadi uang</p>
          </div>
        </div>
      </Link>
      <Link to="/PasarDaur">
        <div className="bg-gray-800 w-[20rem] h-[10rem] shadow-2xl p-6 rounded-[1.5rem] cursor-pointer transform transition duration-300 hover:scale-105 hover:translate-y-[-10px] hover:shadow-3xl">
          <h3 className="text-gray-100 font-semibold">Pasar Daur</h3>
          <div className="flex justify-around">
            <img src={image[8]} alt="image" className="bg-white w-20 rounded-full shadow-2xl" />
            <p className="mt-2 text-gray-100">Marketplace Karya <br />Daur Ulang</p>
          </div>
        </div>
      </Link>
    </div>
    </>
    )
  };

  function Step() {
    const step = [
      "Pilih Menu Penukaran", "Unggah Foto Sampah", "Masukkan Informasi Penukaran", "Pilih Metode Pembayaran", "Penukaran dan Pembayaran"
    ]
    return(
      <>
        <section className="py-12">
          <div className="container mx-auto">
              <div className="flex flex-wrap items-center justify-start">
                  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                      <img src={image[7]} alt="Illustration" className="mx-auto"/>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-2/3 p-4">
                      <h3 className="text-left text-[2.5rem] font-bold text-teal-700 mb-6 leading-none">Cara Menggunakan Layanan</h3>
                      <p className="text-left text-[1.5rem] text-gray-700 ">Ikuti langkah-langkah di bawah ini untuk menggunakan layanan</p>
                      <button className="my-4 text-[1.5rem] text-teal-600 font-bold bg-gray-300 px-8 py-2 rounded-[2rem]">Tukar Sampah</button>
                      <ol className="space-y-4">
                        {step.map((item, index) => (
                          <li key={index} className="bg-gray-300 text-[1.4rem] text-black font-extrabold shadow p-4 mr-[10%] rounded-lg cursor-pointer">{index + 1}. {item}</li>
                        ))}; 
                      </ol>
                  </div>
              </div>
          </div>
        </section>
      </>
    )
  };
}

export default Layanan;
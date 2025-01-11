import { useState } from 'react';
import Nav from '../component/navbar.jsx';
import Footer from '../component/footer.jsx';
import '../index.css';
import images from '../assets/picAdapt';


function App() {

  return (
    <>
      <Nav />
      <Jumbotron />
      <Main />
      <Footer />
    </>
  );

  function Jumbotron() {
    return (
      <>
        <section
          className="w-full bg-cover bg-center bg-no-repeat text-white pb-4 pt-1 px-8 md:pb-44 md:pt-[12rem] md:w-full md:bg-cover md:bg-center md:bg-no-repeat"
          style={{ backgroundImage: "url('/src/assets/image.png')" }}
        >
          <div className="py-4 text-justify w-[60%] md:p-8 md:w-[60%]">
            <h1 className="text-[1.2rem] font-bold mb-0 leading-normal md:mb-10 md:text-[3rem] md:leading-[3.5rem]">
              Ubah Sampah Jadi Berkah, Untuk Bumi yang Lebih Baik
            </h1>
            <p className="mt-0 text-[0.90rem] md:mt-4 md:text-3xl">
              Dengan mengolah sampah, kita dapat menjaga lingkungan tetap bersih
              dan mendukung keberlanjutan dengan memanfaatkan kembali barang-barang
              yang ada, daripada terus mengambil dan memproduksi dari sumber daya baru.
            </p>
          </div>
        </section>
      </>
    );
  }

  function Main() {
    return(
      <>
      <section className="text-center bg-[#243642]">
        <div className="py-24 px-8">
            <h2 className="text-[3rem] text-white font-bold mb-10">Permasalahan Sampah di Indonesia</h2>
            <div className="flex justify-center">
                <p className="text-[1.5rem] text-justify text-white w-[80rem] leading-normal tracking-wide">Menurut data Sistem Pengolahan Sampah Nasional (SIPSN) Kementerian Lingkungan Hidup dan Kehutanan (KLHK) 2023, hingga 24 Juli 2024, timbunan sampah nasional dari 290 kabupaten/kota mencapai 31,9 juta ton. Dari jumlah tersebut, 64,3% atau 20,5 juta ton dapat terkelola, sementara 35,7% atau 11,4 juta ton tidak terkelola dengan baik.</p>
            </div>
        </div>
        <Layer1 />
      </section>
      </>
    )
  };

  function Layer1() {
    return (
      <>
        <div className="bg-[#D9D9D9] rounded-t-[10rem] text-black">
          <div>
            <div className="flex justify-around">
              <div className="w-[40rem] flex items-center space-x-4">
                <img src={images[0]} alt="" className="w-80" />
                <p className="text-[2rem] text-justify font-medium leading-none">
                  Timbunan sampah nasional dari 290 kabupaten/kota mencapai 31,9 juta ton.
                </p>
              </div>
              <div className="w-[40rem] flex items-center space-x-4">
                <img src={images[1]} alt="" className="w-80" />
                <p className="text-[2rem] text-justify font-medium leading-none">
                  64,3% atau 20,5 juta ton dapat terkelola, sementera 35,7% atau 11,4 juta ton tidak terkelola dengan baik.
                </p>
              </div>
            </div>
            <h2 className="text-[3rem] text-center mt-12 mb-[5rem] font-semibold">
              Kenalin, SampahKita. Si Pengolah Sampah
            </h2>
          </div>
          <Layer2 />
        </div>
      </>
    );
  }

  function Layer2() {
    return (
      <>
        <div className="bg-gray-800 text-white rounded-t-[10rem]">
          <div className="flex justify-center">
            <p className="text-[2rem] leading-normal text-justify w-[70rem] mt-12">
              SampahKita hadir guna membantu mengurangi dampak yang terjadi akibat tidak terkelola-nya sampah. Serta meningkatkan kesadaran dan daya tarik masyarakat pada inovasi berkelanjutan.
            </p>
          </div>
          <div className="flex justify-between items-center mt-6 px-16">
            <img src={images[2]} alt="paus" className="w-96" />
            <img src={images[2]} alt="paus" className="absolute mt-52 h-fit w-40" />
            <img src={images[3]} alt="sampah bot" className="w-96" />
          </div>
          <div className="mb-16 mt-12">
            <h2 className="text-[3rem] text-center font-semibold">Gabung Bersama Kami!</h2>
          </div>

          <div className="bg-[#D9D9D9] rounded-t-[10rem] flex flex-col gap-y-12">
            <div className="text-black flex mt-16 justify-between mx-28 items-center content-center gap-x-12">
              <div className="text-[2rem] justify-items-center font-semibold">
                <img className="w-[30rem] h-[12rem] mb-4" src={images[4]} alt="" />
                <h3>Pengepul</h3>
              </div>
              <div className="text-justify text-3xl">
                <span>
                  Jika sehari-hari anda bekerja sebagai pengepul/tukang loak, menjadikan pekerjaan tersebut sebagai profesi utama atau sampingan, bergabunglah dengan SampahKita untuk meningkatkan pemasukan anda, serta meningkatkan efektifatas kerja dan kualitas hidup anda.
                </span>
              </div>
              <div className="bg-gray-800 text-white p-4 rounded-2xl font-semibold text-[2rem] hover:bg-[#D9D9D9] hover:border-4 hover:border-gray-800 hover:text-gray-800">
                <button><a href="">Gabung</a></button>
              </div>
            </div>
            <div className="text-black flex justify-between mx-28 items-center content-center gap-x-12">
              <div className="text-[2rem] justify-items-center font-semibold">
                <img className="w-[44rem] h-[12rem] mb-4" src={images[5]} alt="" />
                <h3>Pendaur</h3>
              </div>
              <div className="text-justify text-3xl">
                <span>
                  Jika anda memiliki minat dalam mendaur ataupun menciptakan karya dengan cara mendaur sampah maka jadilah bagian dari SampahKita dan nikmati akses luas ke berbagai peluang baru! Dengan mendaur ulang bersama kami, kamu bisa mengubah limbah menjadi sumber penghasilan yang berkelanjutan, sekaligus membuat bumi kita lebih sehat dan bersih.
                </span>
              </div>
              <div className="bg-gray-800 text-white p-4 rounded-2xl text-[2rem] font-semibold hover:bg-[#D9D9D9] hover:border-4 hover:border-gray-800 hover:text-gray-800">
                <button><a href="">Gabung</a></button>
              </div>
            </div>
            <div className="text-black flex justify-between mx-28 items-center content-center gap-x-12 mb-16">
              <div className="text-3xl justify-items-center font-semibold">
                <img className="w-[40.3rem] h-[12rem] mb-4" src={images[6]} alt="" />
                <h3>Bank Sampah</h3>
              </div>
              <div className="text-justify text-3xl">
                <span>
                  Bank sampah dapat menjadi mitra SampahKita untuk membantu proses pengumpulan atau penjualan kembali sampah daur ulang. Apapun level Bank sampah anda, mulai dari Bank sampah unit, sampai bank sampah pusat, anda bisa bergabung di SampahKita untuk mendapat akses lebih luas terhadap nasabah bank sampah anda.
                </span>
              </div>
              <div className="bg-gray-800 text-white p-4 rounded-2xl text-3xl font-semibold hover:bg-[#D9D9D9] hover:border-4 hover:border-gray-800 hover:text-gray-800">
                <button><a href="">Gabung</a></button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
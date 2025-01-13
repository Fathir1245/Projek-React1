import { useState } from 'react';
import Nav from '../component/navbar.jsx';
import Footer from '../component/footer.jsx';
import '../index.css';
import images from '../assets/picAdapt';


function App() {

  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );

  function Main() {
    return(
      <>
      <Jumbotron />
      <section className="text-center bg-[#243642]">
        <div className="py-8 px-4 md:py-24 md:px-8">
            <h2 className="text-[1.2rem] text-white font-bold mb-4 md:mb-10 md:text-[3rem]">Permasalahan Sampah di Indonesia</h2>
            <div className="flex justify-center">
                <p className="text-sm text-justify text-white w-[80rem] leading-normal tracking-wide md:text-[1.5rem]">Menurut data Sistem Pengolahan Sampah Nasional (SIPSN) Kementerian Lingkungan Hidup dan Kehutanan (KLHK) 2023, hingga 24 Juli 2024, timbunan sampah nasional dari 290 kabupaten/kota mencapai 31,9 juta ton. Dari jumlah tersebut, 64,3% atau 20,5 juta ton dapat terkelola, sementara 35,7% atau 11,4 juta ton tidak terkelola dengan baik.</p>
            </div>
        </div>
        <Layer1 />
      </section>
      </>
    )
  };

  
  function Jumbotron() {
    return (
      <>
        <section
          className="w-full bg-cover bg-center bg-no-repeat text-white pb-4 pt-1 px-4 md:pb-44 md:pt-[12rem] md:w-full md:bg-cover md:bg-center md:bg-no-repeat"
          style={{ backgroundImage: "url('/src/assets/image.png')" }}
        >
          <div className="py-4 text-justify w-[60%] md:p-8 md:w-[60%]">
            <h1 className="text-[1.2rem] font-bold mb-0 leading-normal md:mb-10 md:text-[3rem] md:leading-[3.5rem]">
              Ubah Sampah Jadi Berkah, Untuk Bumi yang Lebih Baik
            </h1>
            <p className="mt-0 text-sm md:mt-4 md:text-3xl">
              Dengan mengolah sampah, kita dapat menjaga lingkungan tetap bersih
              dan mendukung keberlanjutan dengan memanfaatkan kembali barang-barang
              yang ada, daripada terus mengambil dan memproduksi dari sumber daya baru.
            </p>
          </div>
        </section>
      </>
    );
  }

  function Layer1() {
    return (
      <>
        <div className="bg-[#D9D9D9] rounded-t-[5rem] md:rounded-t-[10rem] text-black">
          <div>
            <div className="block pr-4 md:justify-around md:flex">
              <div className="w-full flex items-center space-x-4 md:w-[40rem]">
                <img src={images[0]} alt="" className="w-28 md:w-80" />
                <p className="text-sm text-justify font-medium leading-none md:text-[2rem]">
                  Timbunan sampah nasional dari 290 kabupaten/kota mencapai 31,9 juta ton.
                </p>
              </div>
              <div className="w-full flex items-center space-x-4 md:w-[40rem]">
                <img src={images[1]} alt="" className="w-28 md:w-80" />
                <p className="text-sm text-justify font-medium leading-none md:text-[2rem]">
                  64,3% atau 20,5 juta ton dapat terkelola, sementera 35,7% atau 11,4 juta ton tidak terkelola dengan baik.
                </p>
              </div>
            </div>
            <h2 className="text-[1.2rem] mt-4 mb-[2rem] font-semibold md:text-[3rem] md:mt-12 md:mb-[5rem]">
              Kenalin, SampahKita. <br /> Si Pengolah Sampah
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
        <div className="bg-[#243642] text-white rounded-t-[5rem] md:rounded-t-[10rem]">
          <div className="flex justify-center">
            <p className="w-[80%] text-sm text-justify mt-6 leading-normal md:mt-12 md:text-[2rem] md:w-[70rem] md:leading-normal">
              SampahKita hadir guna membantu mengurangi dampak yang terjadi akibat tidak terkelola-nya sampah. Serta meningkatkan kesadaran dan daya tarik masyarakat pada inovasi berkelanjutan.
            </p>
          </div>
          <div className="flex justify-between items-center pl-1 md:pl-16 md:pr-2 md:mt-2">
            <img src={images[2]} alt="paus" className="w-40 md:w-96" />
            <img src={images[2]} alt="paus" className="absolute h-fit w-20 mt-36 rotate-6 md:mt-52 md:w-40" />
            <img src={images[3]} alt="sampah bot" className="w-40 md:w-96" />
          </div>
          <div className="mb-8 mt-12 md:mb-16 md:mt-12">
            <h2 className="text-[1.2rem] md:text-[3rem] text-center font-semibold">Gabung Bersama Kami!</h2>
          </div>
          <Card />
        </div>
      </>
    );
  }
  
  function Card() {
    const itemCard = [
    {
      title: "Pengepul",
      description: "Jika sehari-hari anda bekerja sebagai pengepul/tukang loak, menjadikan pekerjaan tersebut sebagai profesi utama atau sampingan, bergabunglah dengan SampahKita untuk meningkatkan pemasukan anda, serta meningkatkan efektifatas kerja dan kualitas hidup anda.",
      image: images[4],
      buttonText: "Gabung",
      buttonLink: "#"
    },
    {
      title: "Pendaur",
      description: "Jika anda memiliki minat dalam mendaur ataupun menciptakan karya dengan cara mendaur sampah maka jadilah bagian dari SampahKita dan nikmati akses luas ke berbagai peluang baru! Dengan mendaur ulang bersama kami, kamu bisa mengubah limbah menjadi sumber penghasilan yang berkelanjutan, sekaligus membuat bumi kita lebih sehat dan bersih.",
      image: images[5],
      buttonText: "Gabung",
      buttonLink: "#"
    },
    {
      title: "Bank Sampah",
      description: "Bank sampah dapat menjadi mitra SampahKita untuk membantu proses pengumpulan atau penjualan kembali sampah daur ulang. Apapun level Bank sampah anda, mulai dari Bank sampah unit, sampai bank sampah pusat, anda bisa bergabung di SampahKita untuk mendapat akses lebih luas terhadap nasabah bank sampah anda.",
      image: images[6],
      buttonText: "Gabung",
      buttonLink: "#"
    }
  ];

    return (
      <>
        <div className='bg-gray-300 rounded-t-[5rem] hidden md:flex flex-col pt-4 pb-16 md:rounded-t-[10rem]'>
        {itemCard.map((item, index) => (
          <div key={index} className="text-black flex mt-12 -4 justify-between mx-28 items-center content-center gap-x-12">
            <div className="text-[2rem] justify-items-center font-semibold -4 w-2/12">
              <img className="mb-4" src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
            <div className="text-justify text-3xl w-9/12">
              <span>{item.description}</span>
            </div>
            <div className="w-1.5/12 bg-gray-800 text-white p-4 rounded-2xl font-semibold text-[2rem] hover:bg-[#D9D9D9] hover:border-4 hover:border-gray-800 hover:text-gray-800">
              <button><a href={item.buttonLink}>{item.buttonText}</a></button>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-gray-300 rounded-t-[5rem] flex md:hidden gap-4 overflow-x-auto px-4 py-8 scrollbar-hide'>
      {itemCard.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center bg-gray-300 text-justify shadow-lg rounded-[2rem] ">
          <img className="w-fit h-20" src={item.image} alt={item.title} />
          <div className="flex flex-col p-4 w-[20rem] items-center">
            <h3 className="text-2xl font-semibold mb-2 text-black">{item.title}</h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <a href={item.buttonLink} className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-[#D9D9D9] hover:text-gray-800">{item.buttonText}</a>
          </div>
        </div>
      ))}
    </div>
      </>
    );
  }
}


export default App;
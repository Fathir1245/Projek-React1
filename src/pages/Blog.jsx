import React from 'react';
import Nav from '../component/navbar.jsx';
import Footer from '../component/footer.jsx';
import image from '../assets/picAdapt';

function Blog() {
  return <div className="bg-[#d8e8d9] text-gray-100">
    <Nav />
    <Main />
    <Footer />
  </div> 

  function Main() {
    return(
      <>
        <div className="max-w-screen-xl mx-auto p-8 pt-[8rem]">
          <div className="flex flex-col items-center justify-around mb-60 lg:flex-row lg:items-start">
            <div className="w-2/3 mb-4 mr-8 lg:w-1/2 lg:mb-0 h-[38rem]">
              <img src={image[10]} alt="Nature Image" className="rounded-3xl shadow-lg mx-auto h-[38rem]" />
            </div>

            <div className="w-full lg:w-1/2 text-center pt-8 lg:text-left">
              <h1 className="text-[2.5rem] leading-normal text-justify font-bold text-teal-700 mb-4">Jaga Alam Dengan Mendaur Ulang Sampah</h1>
              <p className="text-teal-700 leading-relaxed text-justify border-b-2 border-teal-700 pb-20">
                Mendaur sampah bukan hanya tanggung jawab individu, tetapi juga merupakan upaya kolektif untuk menjaga bumi kita. Dengan mendaur sampah, kita bisa berkontribusi dalam melestarikan lingkungan. Mari bersama-sama jaga alam untuk generasi mendatang!
              </p>
            </div>
          </div>
          <BlogCard />
        </div>
      </>
    );
  }

  function BlogCard() {
    const item = [
      {
        word1: "Pilu Satwa Laut di Patagonia ",
        word2: "Argentina Terancam Sampah Plastik",
        image: image[11]
      },
      {
        word1: "Limbah Elektronik dan Pengelolaan ",
        word2: "Sampah di Indonesia yang Problematik",
        image: image[12]
      },
      {
        word1: "Warga Binaan Lapas Kabupaten Lima Puluh ",
        word2: "Kota Bentuk 'Paving Block' dari Sampah Plastik",
        image: image[13]
      },
      {
        word1: "Pandawara Group Nyaris Hanyut Terbawa ",
        word2: "Sampah Gara-Gara Trash Barrier Jebol",
        image: image[14]
      }
    ];
    return (
      <div className="grid grid-cols-1 pb-[10rem] md:grid-cols-2 gap-6">
        {item.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="Gambar" className="rounded-xl mb-4 h-[20rem] w-[40rem]" />
            <p className="text-center text-gray-800 font-bold">
              {item.word1}<br />{item.word2}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
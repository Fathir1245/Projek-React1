import React from 'react';
import Nav from '../component/navbar.jsx';
import Footer from '../component/footer.jsx';

function Tentang() {
  return <div className="bg-[#d8e8d9] text-gray-100">
    <Nav />
    <Main />
    <Footer />
  </div> 

  function Main() {
    return(
      <>
        <section className="h-[40rem]">
          <div className="pt-[20rem]">
              <img src="" alt=""/>
              <img src="" alt=""/>
          </div>
        </section>
      </>
    )
  }
}

export default Tentang;
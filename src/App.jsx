import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/2.hero/Hero';
import About from './components/3.about/About';
import Contact from './components/4.contact/Contact';
import Header from './components/1.header/Header';
import Footer from './components/5.footer/Footer';
import upArrow from '../src/assets/upArrow.png'


function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if( window.scrollY > 300){
      setshowScrollBtn(true);
    }else setshowScrollBtn(false);
   })
  }, [])
 
  const [showScrollBtn, setshowScrollBtn] = useState(false)
  return (
    <div id='up' className="container">
      <Header />
      <Home />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

    
      <a href='#up' style={{opacity: showScrollBtn ? 1 : 0, transition: ".7s"}}>
      <img src={upArrow} className='scrollToTop'/>
    </a>
    </div>
  );
}

export default App;

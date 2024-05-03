// import logo from './logo.svg';
import React, {useState} from 'react'

import tiLogo from './images/ti-logo.png';
import logo from './images/logo.jfif';
import enactus from './images/enactus.jpg'
import gdsc from './images/gdsc.png'
import toastmaster from './images/toastmasters.png'
import econ from './images/econ.jpeg'
import mlsc from './images/mlsc.png'
import ccs from './images/ccs.jpg'
import aiesec from './images/aiesec.png'
import froshImg from './images/img1.png'

import './App.css';
import './media_queries/media.css'


function App() {
  let [slideIndex,setSlideIndex] = useState(0);
  let slides =[enactus,gdsc,toastmaster,econ,mlsc,ccs,aiesec]
  let [currentSlide,setCurrentSlide] = useState(slides[0]);
  let [burgerInActive, setBurgerInActive] = useState(true);

  const burgerEvent =()=>{
    if (burgerInActive){
      setBurgerInActive(false);
    }
    else{
      setBurgerInActive(true);
    }
  }


  const showSlides =()=>{
    if (slideIndex > slides.length-1){
      setSlideIndex(0);
      console.log(slideIndex);
    }

    else if (slideIndex < 0){
      setSlideIndex((slides.length - 1))
    };
    setCurrentSlide(slides[slideIndex]);
    console.log(currentSlide)
  }

  const nextSlide = ()=>{
    setSlideIndex(++slideIndex);
    console.log(slideIndex)
    showSlides();
  }
  const prevSlide = ()=>{
    setSlideIndex(--slideIndex)
    showSlides();
  }




  return (
    <div className="App">
      <nav className={`navbar background-nav ${burgerInActive && "h-nav-resp"} `}>
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className="centreNav">
            <ul className={`nav-list another  ${burgerInActive && "v-class-resp"}`} >
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
    
            </ul>

        </div>
        <div className={`rightNav ${burgerInActive && "v-class-resp"}`}>
            
            <div className="logo logo-ti"><img src={tiLogo} alt="logo" /></div>
        </div>

        <div className={`burger ${burgerInActive && 'burger-top'}`} onClick={burgerEvent}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>

      </nav>
      <section className="background firstSection" id='home'>
      <div className="box-main">
        <div className="firstHalf">
          <p className="text-big text-center">Society Fair</p>
          <p className="text-small text-center">
            Explore, Engage, Evolve: Unveiling the Tapestry of Talent - Society Fair 2024
          </p>
          <div className="buttons text-center">
            <a href="#explore">

                <button className="btn">Explore</button>
            </a>
            <a href="#home">

                <button className="btn">Register</button>
            </a>
          </div>
        </div>
      </div>
      </section>
      <section class="section-explore background-explore" id="about">
        <div class="paras">
            
            <p class="sectionTag text-big">Your Gateway to College Exploration!</p>
            <p class="sectionSubtag text-small">Explore diverse societies like Enactus, Echoes, Microsoft Student Learning Chapter, and more. Engage in discussions, forge connections, and uncover a world of opportunities. From social entrepreneurship to tech innovation, find your tribe and kickstart your collegiate journey.</p>
              
        </div>
        <div class="thumbnail">
            <img src={froshImg}  alt="Infra" class="imgFluid"/>
        </div>
      </section>
      <section className="section" id="explore">
        <p className="text-big text-center">The list goes on....</p>
        <div className="slider-container">
          <div className="slider">
              <img src={currentSlide} alt="1"/>
              {/* <img src={gdsc} alt="2"/>
              <img src={toastmaster} alt="3"/>
              <img src={econ} alt="4"/>
              <img src={mlsc} alt="5"/>
              <img src={ccs} alt="6"/>
              <img src={aiesec} alt="7"/> */}
          </div>
          <button className="prev btn btn-sm" onClick={prevSlide} >&#10094;</button>
          <button className="next btn btn-sm" onClick={nextSlide} >&#10095;</button>
        </div>
      </section>
      <footer className="background footer">
        <div className="paras-footer">
          <div className="social-media text-small">
            <a href="https://www.instagram.com/froshtiet/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/froshtiet/"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.youtube.com/c/froshtiet/about"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://www.linkedin.com/company/frosh-tiet/?originalSubdomain=in"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <p className=" foot-font text-center font-sm pad-sm-top pad-sm-bot ">
            Copyright &copy; 2027- All rights are reserved by Thapar Institue of Engineering and Technology
        </p>
    </footer>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import navTopCake from './res/nav-top-cake.png';
import image8 from './res/8.webp';
import cardImg_01 from './res/5_edited(1).webp';
import cardImg_02 from './res/5_edited.webp';
import cardImg_03 from './res/6_edited.webp';
import roadMap from './res/roadmap.webp';


import { useState, useEffect } from 'react';

import VideoPlayer from "react-background-video-player";

import { BsList } from 'react-icons/bs';
import WelcomeVideo from './res/Welcome-My-Site-1.mp4';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { RiCake2Line } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const aboutParagraphText = {
  fontSize:"1.5em",
  backgroundColor:"white",
  padding:"1em",
  borderRadius:"0.5em",
  boxShadow:"1px 2px 3px rgba(0,0,0,0.2)"
}

const publicParagraphText = {
  fontSize:"1.5em",
  fontWeight:"700",
}



function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
    })
  }, []);

//functions for countdown timer
(function () {
  'use strict';

  const els = {
    s: initElements('s'),
    m: initElements('m'),
    h: initElements('h'),
  };

  function initElements(type) {
    const els = [{}, {}];

    if (!['s', 'm', 'h'].includes(type)) return els;

    const target = document.querySelector(`.flip-clock-${type}`);

    if (!target) return els;

    let el;

    el = els[0];
    el.digit = target.querySelector('.digit-left');
    el.card = el.digit.querySelector('.card');
    el.cardFaces = el.card.querySelectorAll('.card-face');
    el.cardFaceA = el.cardFaces[0];
    el.cardFaceB = el.cardFaces[1];

    el = els[1];
    el.digit = target.querySelector('.digit-right');
    el.card = el.digit.querySelector('.card');
    el.cardFaces = el.card.querySelectorAll('.card-face');
    el.cardFaceA = el.cardFaces[0];
    el.cardFaceB = el.cardFaces[1];

    return els;
  }

  (function runClock() {
    if (!document.hidden) {
      const date = new Date();
      const now = {
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
      };
      now.h = now.h < 10 ? `0${now.h}` : `${now.h}`;
      now.m = now.m < 10 ? `0${now.m}` : `${now.m}`;
      now.s = now.s < 10 ? `0${now.s}` : `${now.s}`;
      now.h0 = now.h[0];
      now.h1 = now.h[1];
      now.m0 = now.m[0];
      now.m1 = now.m[1];
      now.s0 = now.s[0];
      now.s1 = now.s[1];
      console.log(`${now.h0}${now.h1}:${now.m0}${now.m1}:${now.s0}${now.s1}`);

      for (const t of Object.keys(els)) {
        for (const i of ['0', '1']) {
          const curr = now[`${t}${i}`];
          let next = +curr + 1;
          if (t === 'h') {
            if (i === '0') next = next <= 2 ? `${next}` : '0';
            if (i === '1') next = next <= 3 ? `${next}` : '0';
          }
          if (t === 'm') {
            if (i === '0') next = next <= 5 ? `${next}` : '0';
            if (i === '1') next = next <= 9 ? `${next}` : '0';
          }
          if (t === 's') {
            if (i === '0') next = next <= 5 ? `${next}` : '0';
            if (i === '1') next = next <= 9 ? `${next}` : '0';
          }
          const el = els[t][i];
          if (el && el.digit) {
            if (!el.digit.dataset.digitBefore) {
              el.digit.dataset.digitBefore = curr;
              el.cardFaceA.textContent = el.digit.dataset.digitBefore;
              el.digit.dataset.digitAfter = next;
              el.cardFaceB.textContent = el.digit.dataset.digitAfter;
            } else if (el.digit.dataset.digitBefore !== curr) {
              el.card.addEventListener('transitionend', function () {
                el.digit.dataset.digitBefore = curr;
                el.cardFaceA.textContent = el.digit.dataset.digitBefore;

                const cardClone = el.card.cloneNode(true);
                cardClone.classList.remove('flipped');
                el.digit.replaceChild(cardClone, el.card);
                el.card = cardClone;
                el.cardFaces = el.card.querySelectorAll('.card-face');
                el.cardFaceA = el.cardFaces[0];
                el.cardFaceB = el.cardFaces[1];

                el.digit.dataset.digitAfter = next;
                el.cardFaceB.textContent = el.digit.dataset.digitAfter;
              }, { once: true });
              if (!el.card.classList.contains('flipped')) {
                el.card.classList.add('flipped');
              }
            }
          }
        }
      }
    }
    setTimeout(runClock, 1000);
  })();
})();

//functions for countdown timer end
  return (
    <div className="App">
      <VideoPlayer
        className="video"
        src={WelcomeVideo}
        autoPlay={true}
        muted={true}
        style={{zIndex:"-1000",position:"fixed"}}
      />
      <Navbar fixed="top" expand={false} style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
        <Container fluid>
          <Navbar.Brand href="#" style={{color:"#ff00d8",fontSize:"30px",fontWeight:"700"}}>Candy Cakez</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" style={{ border: "0",color:"white",fontSize:"45px",boxShadow:"none", marginRight:"0.5em",}}><RiCake2Line/></Navbar.Toggle>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><img style={{width:"2.5em",marginLeft:"1em"}} src={navTopCake}/></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link className="navLinkStyle" style={{color:"#ff00d8"}} href="#action1">Welcome</Nav.Link>
                <Nav.Link className="navLinkStyle"  href="#action2">About</Nav.Link>
                <Nav.Link className="navLinkStyle"  href="#action1">Public sale</Nav.Link>
                <Nav.Link className="navLinkStyle"  href="#action2">Features</Nav.Link>
                <Nav.Link className="navLinkStyle"  href="#action1">Roadmap</Nav.Link>
                <Nav.Link className="navLinkStyle"  href="#action2">Mint</Nav.Link>
                <Nav.Link className="navLinkStyle"  href="#action2">Community</Nav.Link>

              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* hero section */}
      <div className="hero" style={{height:"100vh"}}>

        <div className='container-fluid'>
          <div className='row'>
            <div className="col-12 text-center">
              <h1 data-aos="zoom-out-up" className="hero-topic">Candy Cakez</h1>
              <p data-aos="fade-up" className="paraStyle">We are the FIRST cake project,</p>
              <p data-aos="fade-up" className="paraStyle">launched on PancakeSwap!</p>
              <p data-aos="fade-up" className="paraStyle">Join our daily growing community</p>
              <p data-aos="fade-up" className="paraStyle">and profit from several benefits!</p>
              <button id="btnMint" data-aos="fade-up" className="btn btn-lg mintButton">
                MINT
              </button>
            </div>
          </div>
          

        </div>
      </div>
      

      {/* about the project */}
      <div className="about py-5" style={{backgroundImage:"radial-gradient(#0af2f2 50%, #0091d0)"}}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 data-aos="fade-up" className='heading'>About the project</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h1 className='mt-4' data-aos="fade-up" style={{fontWeight:"700"}}>Welcome to Candy_Cakez!</h1>
              <p data-aos="flip-up" className='mt-4' style={aboutParagraphText}>
              Who doesn't love pancakes?! We are huge lovers of pancakes and have therefore decided to dedicate our very own NFT collection to this culinary specialty. 
              </p>
              <p data-aos="flip-up" className='mt-3' style={aboutParagraphText}>
              Nobody likes it boring; that's why we have designed our Cakez in candy design and added some exclusive properties. Whether with chocolate, sprinkles or ice cream, all variations are possible! 
              </p>
              <p data-aos="flip-up" className='mt-3' style={aboutParagraphText}>
              Our collection will be one of the first to be launched on PancakeSwap and is already highly popular in the NFT community. Mint your Candy_Cakez NFT and enjoy many benefits including exclusive access to our trading telegram community.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mt-5">
              <img data-aos="zoom-out-down" src={image8} alt="" style={{width:"100%"}} />
            </div>
          </div>
        </div>

      </div>

      {/* empty section */}
      <div className='container'>
        <div className="row">
          <div className="col-12" style={{padding:"10em 0 10em 0"}}>
            
          </div>
        </div>
      </div>
      
      
      {/* publc sales */}
      <div className="public-sales" style={{backgroundImage:"radial-gradient(#0af2f2 50%, #0091d0)"}}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12">
            <h1 data-aos="fade-up"  className='heading'>Public Sale</h1>
            </div>
            <div className="col-12 col-lg-6 mt-5">
              <div className="row">
                <div className="col-12">
                  <p style={publicParagraphText}>USA: January 1st - 08:00 PM (EST)</p>
                  <p style={publicParagraphText}>EU: January 2nd - 00:00 AM (UTC)</p>
                  <p style={publicParagraphText}>ASIA: January 2nd - 08:00 AM (GMT+8)</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">

                  <div className="flip-clock-container">
                    <div className="flip-clock flip-clock-h">
                      <div className="digit digit-left">
                        {/* <!-- ::before --> */}
                        <div className="card">
                          <div className="card-face card-face-front"></div>
                          <div className="card-face card-face-back"></div>
                        </div>
                        {/* <!-- ::after --> */}
                      </div>
                      <div className="digit digit-right">
                        {/* <!-- ::before --> */}
                        <div className="card">
                          <div className="card-face card-face-front"></div>
                          <div className="card-face card-face-back"></div>
                        </div>
                        {/* <!-- ::after --> */}
                      </div>
                    </div>

                    <div className="colon">:</div>

                    <div className="flip-clock flip-clock-m">
                      <div className="digit digit-left">
                        {/* <!-- ::before --> */}
                        <div className="card">
                          <div className="card-face card-face-front"></div>
                          <div className="card-face card-face-back"></div>
                        </div>
                        {/* <!-- ::after --> */}
                      </div>
                      <div className="digit digit-right">
                        {/* <!-- ::before --> */}
                        <div className="card">
                          <div className="card-face card-face-front"></div>
                          <div className="card-face card-face-back"></div>
                        </div>
                        {/* <!-- ::after --> */}
                      </div>
                    </div>

                    <div className="colon">:</div>

                    <div className="flip-clock flip-clock-s">
                      <div className="digit digit-left">
                        {/* <!-- ::before --> */}
                        <div className="card">
                          <div className="card-face card-face-front"></div>
                          <div className="card-face card-face-back"></div>
                        </div>
                        {/* <!-- ::after --> */}
                      </div>
                      <div className="digit digit-right">
                        {/* <!-- ::before --> */}
                        <div className="card">
                          <div className="card-face card-face-front"></div>
                          <div className="card-face card-face-back"></div>
                        </div>
                        {/* <!-- ::after --> */}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button className='btn btn-lg mintButton'>Mint hear</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              
            </div>
          </div>
        </div>
      </div>
      
      {/* empty section */}
      <div className='container'>
        <div className="row">
          <div className="col-12" style={{padding:"10em 0 10em 0"}}>
            
          </div>
        </div>
      </div>

      {/* publc sales */}
      <div className="fetures" style={{backgroundImage:"radial-gradient(#0af2f2 50%, #0091d0)"}}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12">
              <h1 data-aos="fade-up" className='heading'>Features</h1>
            </div>
          </div>
          <div className="row pb-5 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 pt-4">
              <div data-aos="zoom-in" className='ui-card p-0'>
                <img src={cardImg_03} alt="" />
                <div className="description">
                  <h3>Feature#1</h3>
                  <h1>Early on Pancake</h1>
                  <p>WE are the first Candy_Cakez launched on the new PancakeSwap NFT platform!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                </div>
              </div>
              
            </div>
            <div className="col-12 col-md-6 col-lg-4 pt-4">
              <div data-aos="zoom-in" className='ui-card p-0'>
                <img src={cardImg_02} alt="" />
                <div className="description">
                  <h3>Feature#2</h3>
                  <h1>Rarity</h1>
                  <p>Grab your chance to mint NFTs that are unique in the world in the style of PancakeSwap.</p>
                </div>
              </div>
              
            </div>
            <div className="col-12 col-md-6 col-lg-4 pt-4">
              <div data-aos="zoom-in" className='ui-card p-0'>
                <img src={cardImg_01} alt="" />
                <div className="description">
                  <h3>Feature#3</h3>
                  <h1>Exclusivity</h1>
                  <p>If you own a Candy_Cakez NFT you get exclusive access to lotteries and trading groups.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* empty section */}
      <div className='container'>
        <div className="row">
          <div className="col-12" style={{padding:"10em 0 10em 0"}}>
            
          </div>
        </div>
      </div>

      <div className="roadmap" style={{backgroundImage:"radial-gradient(#0af2f2 50%, #0091d0)"}}>
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-12">
              <h1 data-aos="fade-up" className='heading'>Road Map</h1>
            </div>
            <div className="col-12 col-lg-10 mt-5">
              <img src={roadMap} alt="" style={{width:"100%"}} />
            </div>
          </div>
        </div>
      </div>

      {/* empty section */}
      <div className='container'>
        <div className="row">
          <div className="col-12" style={{padding:"10em 0 10em 0"}}>
            
          </div>
        </div>
      </div>

      <div className="mint" style={{backgroundImage:"radial-gradient(#0af2f2 50%, #0091d0)"}}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12">
              <h1 data-aos="fade-up" className='heading'>Mint</h1>
              <p style={publicParagraphText}>Minting will start at the 1st January 2022, stay tuned!</p>
              <p style={publicParagraphText}>Follow us on social media for daily updates.</p>
            </div>

          </div>
        </div>
      </div>

      {/* empty section */}
      <div className='container'>
        <div className="row">
          <div className="col-12" style={{padding:"10em 0 10em 0"}}>
            
          </div>
        </div>
      </div>

      {/* community section */}
      <div className="community" style={{backgroundImage:"radial-gradient(#0af2f2 50%, #0091d0)"}}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12">
              <h1 data-aos="fade-up" className='heading'>Community</h1>
              <p style={publicParagraphText}>Follow us on your favorite social media platform!</p>
              <p style={publicParagraphText}>Never miss out on any updates and giveaways</p>
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 d-flex justify-content-around mt-5">
                  <div className='contact-icons'>
                    <ImTwitter className='icon'/>
                  </div>
                  <div className='contact-icons'>
                    <FaTelegramPlane className='icon'/>
                  </div>
                  <div className='contact-icons'>
                    <SiDiscord className='icon'/>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* empty section */}
      <div className='container'>
        <div className="row">
          <div className="col-12" style={{padding:"10em 0 10em 0"}}>
            
          </div>
        </div>
      </div>

      {/* footer section */}
      <div className="community" style={{backgroundImage:"radial-gradient(#0af2f2 50%, #0091d0)"}}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12">
              <h1 data-aos="fade-up" className='footer-heading'>World's most popular NFT project right now!</h1>
            </div>
          </div>
          <div className="row py-5 justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <p className='footer-text mx-2'>Impressum</p>
              <p className='footer-text mx-2'>Datenschutz</p>
              <p className='footer-text mx-2'>AGB</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

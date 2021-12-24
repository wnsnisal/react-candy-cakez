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


import { useState, useEffect } from 'react';

import VideoPlayer from "react-background-video-player";

import { BsList } from 'react-icons/bs';
import WelcomeVideo from './res/Welcome-My-Site-1.mp4';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { RiCake2Line } from "react-icons/ri";

const aboutParagraphText = {
  fontSize:"1.5em",
  backgroundColor:"white",
  padding:"1em",
  borderRadius:"0.5em",
  boxShadow:"1px 2px 3px rgba(0,0,0,0.2)"
}

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
    })
  }, []);
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
      <div className="about" style={{backgroundColor:"rgb(10, 242, 242)"}}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className='heading'>About the project</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className='mt-4' style={{fontWeight:"700"}}>Welcome to Candy_Cakez!</h1>
            <p className='mt-4' style={aboutParagraphText}>
            Who doesn't love pancakes?! We are huge lovers of pancakes and have therefore decided to dedicate our very own NFT collection to this culinary specialty. 
            </p>
            <p className='mt-3' style={aboutParagraphText}>
            Nobody likes it boring; that's why we have designed our Cakez in candy design and added some exclusive properties. Whether with chocolate, sprinkles or ice cream, all variations are possible! 
            </p>
            <p className='mt-3' style={aboutParagraphText}>
            Our collection will be one of the first to be launched on PancakeSwap and is already highly popular in the NFT community. Mint your Candy_Cakez NFT and enjoy many benefits including exclusive access to our trading telegram community.
            </p>
          </div>
        </div>
      </div>
      </div>
      
      
    </div>
  );
}

export default App;

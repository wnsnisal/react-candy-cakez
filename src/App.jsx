import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


import { useState, useEffect } from 'react';

import VideoPlayer from "react-background-video-player";

import { BsList } from 'react-icons/bs';
import WelcomeVideo from './res/Welcome-My-Site-1.mp4';

import Aos from 'aos';
import 'aos/dist/aos.css';

const paraStyle = {
  color:"white",
  fontSize:"1.5em"
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
        style={{zIndex:"-1000"}}
      />
      <Navbar expand={false} style={{backgroundColor:"rgba(255,255,255,0.2)"}}>
        <Container fluid>
          <Navbar.Brand href="#" style={{color:"#ff00d8",fontSize:"30px",fontWeight:"700"}}>Candy Cakez</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" style={{ border: "0"}} />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Candy Cakez</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Welcome</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action1">Public sale</Nav.Link>
                <Nav.Link href="#action2">Features</Nav.Link>
                <Nav.Link href="#action1">Roadmap</Nav.Link>
                <Nav.Link href="#action2">Mint</Nav.Link>
                <Nav.Link href="#action2">Community</Nav.Link>

              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-12 text-center">
            <h1 data-aos="zoom-out-up" style={{fontSize:"100px",color:"white", fontWeight:"800",textAlign:"center",marginTop:"0.5em"}}>Candy Cakez</h1>
            <p data-aos="fade-up" style={paraStyle}>We are the FIRST cake project,</p>
            <p data-aos="fade-up" style={paraStyle}>launched on PancakeSwap!</p>
            <p data-aos="fade-up" style={paraStyle}>Join our daily growing community</p>
            <p data-aos="fade-up" style={paraStyle}>and profit from several benefits!</p>
            <button id="btnMint" data-aos="fade-up" className="btn btn-lg mintButton">
              MINT
            </button>
          </div>
        </div>
        

      </div>
      
    </div>
  );
}

export default App;

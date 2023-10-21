import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Footer from './Footer';
import transbnklogo from "./assets/TransBnk Logo TM (4).png";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import './custom.scss'
const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <Navbar bg="dark" className='navbg'  fixed="top" >
        <Container>
          <Navbar.Brand href="/Dashboard">
            <img src={transbnklogo} alt="GreattrLogo" width={60} /></Navbar.Brand>
          <div style={{
            display:'flex',
            alignItems:"center"
          }}>

          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/product">product</Nav.Link>
            &nbsp;
            &nbsp;
            <button className='navbuttonx'>{"Sign in"}</button>
            </Nav>


          </div>
  
        </Container>
      </Navbar>
      <br/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </Router>
  <Footer/>
</>
  );
}

export default App;

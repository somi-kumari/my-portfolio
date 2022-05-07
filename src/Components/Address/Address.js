import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./address.css";

import {BsTelephone} from "react-icons/bs"
import {HiOutlineMailOpen} from "react-icons/hi"
import {AiFillGithub , AiFillLinkedin} from "react-icons/ai"
function Address() {
  const mobileRedirect=()=>{
     window.location.href = "tel:+91-9074363280";
  }
  const gmailRedirect=()=>{
     window.location.href = "mailto:somisourabh96@gmail.com";
  }
  const githubRedirect=()=>{
     window.location.href = "https://github.com/somi-kumari";
  }
   const linkedinRedirect=()=>{
     window.location.href = "https://www.linkedin.com/in/somikumari2010/";
  }
  return (

    <Container>
      <h1 className="contact-address">Contact
        <span className="ctn"> Me</span>
      </h1>

      <p style={{ textAlign: "center",padding:"20px", color:"white" }}>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.</p>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col onClick={mobileRedirect} xs={4} md={2} className="tech-icons">
            <BsTelephone/>
            <br/>
            {/* <span>+91-9074363280</span> */}
             <a style={{textDecoration: 'none',color: 'white'}}  href="tel:+919074363280" target="_blank" rel="noopener noreferrer">+919074363280</a>
        </Col>
        <Col onClick={gmailRedirect} xs={4} md={2} className="tech-icons">
            <HiOutlineMailOpen/>
           <br/>
            <a style={{textDecoration: 'none',color: 'white'}}  href="mailto:somisourabh96@gmail.com" target="_blank" rel="noopener noreferrer" >somisourabh96@gmail.com</a>
        </Col>
        <Col  onClick={githubRedirect} xs={4} md={2} className="tech-icons" >
            <AiFillGithub/>
            <br/>
            <a style={{textDecoration: 'none',color: 'white'}}  href="https://github.com/somi-kumari" target="_blank" rel="noopener noreferrer">Github</a>
        </Col>
        <Col  onClick={linkedinRedirect} xs={4} md={2} className="tech-icons">
            <AiFillLinkedin/>
            <br/>
            
            <a style={{textDecoration: 'none',color: 'white'}}  href="https://www.linkedin.com/in/somikumari2010/"  target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Col>
      </Row>

     
        </Container>
   
  );
}

export default Address;


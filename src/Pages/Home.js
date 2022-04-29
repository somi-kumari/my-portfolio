import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../Assets/myimg (2).png";
import SelfIntro from "../Components/SelfIntro/SelfIntro";
import TypeWriter from "../Components/TypeWriter/TypeWriter";
import "./home.css"

function Home() {
  return (
    <section id="home"> 
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-profile" style={{ paddingBottom: 20 }}>
              <img src={myImg} alt="home pic" className="img-fluid"  />
            </Col>
            <Col md={7} className="home-header">
              {/* <h1  className="heading">
                Hi I am Somi Kumari! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1> */}

              <h1 className="heading-name ">
               Hey, I'm
                <strong className="main-name br"> Somi Kumari</strong><span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <div style={{  textAlign: "left" }}>
                <TypeWriter />
              </div>
            </Col>

            
            
          </Row>
        </Container>    
      </Container>
      <SelfIntro/>
      
    </section>
  );
}

export default Home;
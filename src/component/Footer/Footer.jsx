import { Col, Container, Nav, Row } from "react-bootstrap";
import "./footer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Fotter() {

   // STATE

   const [activeLink , setActiveLink] = useState("home");

 
   // == STATE ==

   // FUNCTIONS 
  const onUpdateActiveLink = (link) =>{
    setActiveLink(link)
  }


  // == FUNCTIONS ==

  return (
    <footer>
      <Container>
        <Row>
          <Col className="d-flex justify-content-start">
              <Nav className="me-auto">
                <Link to="/" className={activeLink === "home" ? "nav-link active" : "nav-link"} onClick={() =>{onUpdateActiveLink("home")}} >Home</Link>
                <Link to="/About" className={activeLink === "about" ? "active nav-link" : "nav-link"} onClick={() =>{onUpdateActiveLink("about")}}>About</Link>
                <Link to="/Project" className={activeLink === "projects" ? " nav-link active" : "nav-link"} onClick={() =>{onUpdateActiveLink("projects")}}>Projects</Link>
              </Nav>
          </Col>
          <Col className="d-flex justify-content-end">
          <p > Copyright © 2024 | Desing By <span>Yehea Shorafa</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Fotter;

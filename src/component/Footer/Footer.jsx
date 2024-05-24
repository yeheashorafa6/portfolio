import { Col, Container, Nav, Row } from "react-bootstrap";
import "./footer.css";
import { useState } from "react";

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
                <Nav.Link href="#home" className={activeLink === "home" ? "active" : ""} onClick={() =>{onUpdateActiveLink("home")}}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "active" : ""} onClick={() =>{onUpdateActiveLink("skills")}}>About</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === "projects" ? "active" : ""} onClick={() =>{onUpdateActiveLink("projects")}}>Projects</Nav.Link>
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

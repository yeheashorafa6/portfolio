import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { faInstagram , faFacebook , faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function header() {

  // STATE

  const [activeLink , setActiveLink] = useState("home");
  const [scrolled , setScrolled] = useState(false);

  // == STATE ==

  // USE EFFECT

  useEffect(() => {
    const onScrolled = () => {
      if (window.scrollY > 60) { // Corrected window.scrollY here
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  
    window.addEventListener('scroll', onScrolled);
    return () => window.removeEventListener('scroll', onScrolled);
  }, []);

  // == USE EFFECT ==

  // FUNCTIONS 
  const onUpdateActiveLink = (link) =>{
    setActiveLink(link)
  }


  // == FUNCTIONS ==

  return (
    <>
    <header className="header">
          <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className={activeLink === "home" ? "nav-link active" : "nav-link"} onClick={() =>{onUpdateActiveLink("home")}} >Home</Link>
                <Link to="/About" className={activeLink === "about" ? "active nav-link" : "nav-link"} onClick={() =>{onUpdateActiveLink("about")}}>About</Link>
                <Link to="/Project" className={activeLink === "projects" ? " nav-link active" : "nav-link"} onClick={() =>{onUpdateActiveLink("projects")}}>Projects</Link>
              </Nav>

              <span className="navbar-text">
                <div className="social-icon">
                  <Nav.Link className="icon" href="https://www.facebook.com/profile.php?id=61556157676426"><FontAwesomeIcon  icon={faFacebook} /></Nav.Link>
                  <Nav.Link className="icon" href="https://www.instagram.com/yehea__sh/"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                  <Nav.Link className="icon" href="+972569353191"><FontAwesomeIcon icon={faWhatsapp} /></Nav.Link>
                </div>
                {/* <button className="btn" onClick={() =>{console.log("Connected")}}>
                      <FontAwesomeIcon icon={faMoon} className="icon"/>
                </button> */}
              </span>
            </Navbar.Collapse>
        </Navbar>
    </header>

    </>
  );
}

export default header;

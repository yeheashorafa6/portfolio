import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./contentUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import image from "./../../assets/img/contact/contact-img.svg"

function ContentUs() {


  // STATE

  const initInputValue = {
    name: "",
    message: "",
  }

  const [inputValue , setInputValue] = useState(initInputValue);


  const [buttonText , setButtonText] = useState('send')

  const [result , setResult] =useState("")

  // == STATE ==

  const misInput = inputValue.name == "" ;

  //  FUNCTIONS 

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1394ff52-77b0-4d7b-87c2-841bf978a50b");

    if (!misInput) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult("Form Submitted Successfully");
      result.target.value.style.color = 'green'
      setButtonText("Send")
      setInputValue(initInputValue)
      event.target.reset();
    } else {
      setButtonText("Send")

      setResult("SomeThing Error ! Try Agine ...");
      event.target.reset();
    // setResult(" ");

    }
    
  };

  const handleInputChange = (event) => {
    // Reset the result message when input values change
    setResult("");
    const name = event.target.name;
    const value = event.target.value;
    setInputValue((prev) =>{
      return{
        ...inputValue,
        [name] :value
      
  }});
  };

  // FUNCTIONS
  return (
      <section className="contactUS" id="contactUs">
        <Container >
          <Row className="ms-5 mt-5">
            <Col className="col-md-7 col-12">
              <div className="contact-text mb-5">
                <h1 className="mb-3">
                Contact Us
                </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque deleniti . </p>
              </div>
              <div className="contact-form">
                  <Form onSubmit={handleFormSubmit} style={{width : "60%"}}>
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" placeholder="Enter Your Name" name="name" value={inputValue.name} onChange={handleInputChange}/>
                      </Form.Group>
                        
                      <Form.Group className="mb-3" controlId="message">
                        <Form.Control as="textarea" rows={5} placeholder="Message" name="message" value={inputValue.message} onChange={handleInputChange}/>
                      </Form.Group>

                      <Button type="submit" >
                        <span>{buttonText}</span>
                      </Button>
                    </Form>
                    <div className="message-sending">
                        <span style={{fontSize : "30px"}} className={misInput ? "red" : "green"}>{result}</span>
                    </div>
              </div>
            </Col>
            <Col className="col-md-5 col-12 d-flex justify-content-center align-items-center">
            <div className="image d-flex">
              <img src={image} className="img-fluid" style={{width : "70%" , borderRadius : "100px"}}  alt="real" />
            </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default ContentUs;

import { text } from "@fortawesome/fontawesome-svg-core";
import { Card, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'
import "./ProjectCard.css"

function ProjectCard({title , desc , image}) {
  return (
    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title >{title}</Card.Title>
                <Card.Text >
                    {desc}
                </Card.Text>
                <span className="soical-icon">
                  <a href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub} className="icon"/>
                  </a>
                  <a href="https://www.facebook.com/" className="ms-3">
                    <FontAwesomeIcon icon={faFacebook} className="icon"/>
                  </a>
                </span>
                
            </Card.Body>
        </Card>
    </Col>
  )
}

export default ProjectCard

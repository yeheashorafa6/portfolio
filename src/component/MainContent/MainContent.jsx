import "./mainContent.css";
import { Col, Nav, Row, Tab } from "react-bootstrap"
import ProjectCard from "./ProjectCard/ProjectCard"
import image_1 from "./../../assets/img/projects/project-img1.jpg"
import image_2 from "./../../assets/img/projects/project-img2.jpg"
import image_3 from "./../../assets/img/projects/project-img3.jpg"
import image_4 from "./../../assets/img/projects/project-img4.jpg"
import image_5 from "./../../assets/img/projects/project-img5.jpg"
import image_6 from "./../../assets/img/projects/project-img6.jpg"
import image_7 from "./../../assets/img/projects/project-img7.jpg"
import image_8 from "./../../assets/img/projects/project-img8.jpg"
import image_9 from "./../../assets/img/projects/project-img9.jpg"
import image_10 from "./../../assets/img/projects/project-img10.png"


function mainContent() {
  const allProject = [ 
    {id : 1 , title : "HTML" , desc : "Lorem ipsum dolor sit amet"  , image : image_1 },
    {id : 2 , title : "VUE" , desc : "adipisicing elit.Ipsam ex " , image : image_2},
    {id : 3 , title : "NODE JS" , desc : "impedit mollitia nemo ad unde" , image : image_3},
    {id : 4 , title : "SASS" , desc : "adipisicing elit.Ipsam ex " , image : image_4},
    {id : 5 , title : "REACT" , desc : "Lorem ipsum dolor sit amet" , image : image_5},
    {id : 6 , title : "CSS" , desc : " impedit mollitia nemo ad unde" , image : image_6},
    {id : 7 , title : "CSS" , desc : "impedit mollitia nemo ad unde" , image : image_7},
    {id : 8 , title : "HTML" , desc : " Lorem ipsum dolor sit amet" , image : image_8},
    {id : 9 , title : "SASS" , desc : "adipisicing elit.Ipsam ex " , image : image_9},
] 

const frontend = [ 
    {id : 1 , title : "CSS" , desc : "impedit mollitia nemo ad unde" , image : image_1},
    {id : 2 , title : "JS" , desc : " Lorem ipsum dolor sit amet" , image : image_2},
    {id : 3 , title : "HTML" , desc : " Lorem ipsum dolor sit amet" , image : image_3},
    {id : 4 , title : "SASS" , desc : "adipisicing elit.Ipsam ex " , image : image_4},
    {id : 5 , title : "JS" , desc : "adipisicing elit.Ipsam ex "  , image : image_5 },
    {id : 6 , title : "JS" , desc : "impedit mollitia nemo ad unde" , image : image_6},
] 

const react = [ 
  {id : 1 , title : "REACT" , desc : "adipisicing elit.Ipsam ex "  , image : image_9 },
  {id : 2 , title : "VUE" , desc : " Lorem ipsum dolor sit amet" , image : image_10},
  {id : 3 , title : "REACT" , desc : "impedit mollitia nemo ad unde" , image : image_5},
  {id : 4 , title : "VUE" , desc : " Lorem ipsum dolor sit amet" , image : image_4},

] 

  return (
    <>
      <section className="mainContent-section mx-5">
        <div className="row">
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Col className="col-lg-2 col-3">
                <Nav variant="pills" defaultActiveKey="/first">
                    <Nav.Item>
                        <Nav.Link eventKey="first" >All Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Front End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third" >React</Nav.Link>
                    </Nav.Item>
                  </Nav>
            </Col>
          <Col className="col-lg-9 col-9">
            <div className="row">
            <Tab.Content>
                  <Tab.Pane eventKey="first">
                      <Row style={{display : "flex" , flexWrap : "wrap"}}>
                          {allProject.map((item) => {
                              return (
                                  <ProjectCard key={item.id} title={item.title} desc={item.desc} image={item.image}/>
                              )
                          })}
                      </Row>
                  </Tab.Pane>  
                  <Tab.Pane eventKey="second">
                      <Row style={{display : "flex" , flexWrap : "wrap"}}>
                          {frontend.map((item) => {
                              return (
                                  <ProjectCard key={item.id} title={item.title} desc={item.desc} image={item.image}/>
                              )
                              })}
                      </Row>        
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                      <Row>
                      {react.map((item) => {
                          return (
                                  <ProjectCard key={item.id} title={item.title} desc={item.desc} image={item.image}/>
                          )
                          })}
                      </Row>
                  </Tab.Pane>                          
              </Tab.Content>
            </div>
          </Col>
          </Tab.Container>
        </div>
      </section>
    </>
  );
}

export default mainContent;

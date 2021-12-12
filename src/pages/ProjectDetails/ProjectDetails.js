import React from "react";
import { Button, Card, Carousel, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import './ProjectDetials.css'
const ProjectDetails = () => {
  const { name } = useParams();
  const [projects] = useProjects([name]);

  const projectDetails = projects.find((project) => project.name === name);
  console.log(projectDetails);

  const renderButtets = () => {
    return projectDetails.details_bullets.map((value, i) => (
      <div className="bullets" key={i}>
        <div className="bullets-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
 
  return (
    <div>
     { projectDetails && 
     <Card className="shadow rounded card-style my-2">
       <Card.Body>
       <Card.Title className="text-center card-title">{name}</Card.Title>
       </Card.Body>  
         <div className='img-contanier'>
            <Carousel className= "vh-50 "  variant="dark">
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={projectDetails.details_img1}
                        alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block  w-100"
                        src={projectDetails.details_img2}
                        alt="Second slide"
                        />
                    
                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={projectDetails.details_img3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={projectDetails.details_img4}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={projectDetails.details_img5}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={projectDetails.details_img6}
                        alt="Third slide"
                        />
                    </Carousel.Item>
            </Carousel>
        </div>
          
        <Card.Body>
          <Card.Text className="card-tech-text text-center my-3">
            Tools: {projectDetails.Technology}
          </Card.Text>
          
          <Card.Text className="card-text-para my-4">
            {projectDetails.des}
          </Card.Text>
          <div className="project-bullets">
            <div className="bullets-heading">
              <span>Features/Functionality of the Projects</span>
            </div>
            {renderButtets()}
          </div>

          <div className="d-flex justify-content-center my-3">
            <a href={projectDetails.webLink}>
              <Button className="project-btn"> Live Site Link</Button>
            </a>
          </div>
          <div className="d-flex justify-content-center my-2">
            <a href={projectDetails.gitClientCodeLink} className="mx-5">
              <button className="git-client-btn"> Client Side Code</button>
            </a>
          </div>
          {projectDetails.gitServerCodeLink ? (
            <div className="d-flex justify-content-center my-2">
              <a href={projectDetails.gitServerCodeLink} className="mx-5">
                <button className="git-server-btn">Server Side Code</button>
              </a>
            </div>
          ) : (
            <div></div>
          )}
        </Card.Body>
      </Card> }
    </div>
  );
};

export default ProjectDetails;

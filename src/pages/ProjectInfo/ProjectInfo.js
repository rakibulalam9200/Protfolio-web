import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProjectInfo.css';
const ProjectInfo = ({projectInfo}) => {
    const { name, img,des,bullets, Technology,webLink,gitClientCodeLink,gitServerCodeLink } = projectInfo;
    const renderButtets = () => {
        return bullets.map((value, i) => (
          <div className="bullets" key={i}>
            <div className="bullets-blob"></div>
            <span>{value}</span>
          </div>
        ));
      };
    return (
        <div>
        <Card className="shadow rounded">
            <a href={webLink}><Card.Img variant="top" src={img} /></a>   
            <Card.Body>
            <Card.Title className="text-center card-title">{name}</Card.Title>
            <Card.Text className="card-tech-text">
                Tools: {Technology}
            </Card.Text>
            <div className='project-bullets'>
                <div className="bullets-heading">
                  <span>Key Features of the Projects</span>
                </div>
                {renderButtets()}    
            </div>
            <Card.Text className="card-text-para my-4">{des}</Card.Text>

             <div className="d-flex justify-content-center my-3">
                
                    <Button className="project-btn mx-5">
                    {" "}
                    Details
                    </Button>
                    <a href={webLink}>
                    <Button className="project-btn">
                    {" "}
                    Live Site Link
                    </Button>
                    </a>
                    
                
            </div> 
             <div className="d-flex justify-content-center my-2">
                    <a href={gitClientCodeLink} className='mx-5'>
                    <Button className="git-btn">
                    {" "}
                    Client Side Code
                    </Button>
                    </a>
                   
                    {gitServerCodeLink?
                    <a href={gitServerCodeLink}>
                    <Button className="git-btn">
                    {" "}
                    Server  Code
                    </Button>
                    </a>:<div></div>
                  }
            </div> 
            
            </Card.Body>
        </Card>
    </div>
    );
};

export default ProjectInfo;
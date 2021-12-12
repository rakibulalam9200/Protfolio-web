import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProjectInfo.css";
const ProjectInfo = ({ projectInfo }) => {
  const {
    name,
    details_img1,
    des,
    bullets,
    Technology,
    webLink,
    gitClientCodeLink,
    gitServerCodeLink,
  } = projectInfo;
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
      <Card className="shadow rounded card-style">
        <a href={webLink}>
          <Card.Img variant="top" src={details_img1} />
        </a>
        <Card.Body>
          <Card.Title className="text-center card-title">{name}</Card.Title>
          <Card.Text className="card-tech-text">Tools: {Technology}</Card.Text>
          <div className="project-bullets">
            <div className="bullets-heading">
              <span>Key Features of the Projects</span>
            </div>
            {renderButtets()}
          </div>
          <Card.Text className="card-text-para my-4">{des}</Card.Text>

          <div className="d-flex justify-content-center my-3">
            <Link to={`/project/${name}`}>
              <Button className="project-btn mx-5"> Details</Button>
            </Link>

            <a href={webLink}>
              <Button className="project-btn"> Live Site Link</Button>
            </a>
          </div>
          <div className="d-flex justify-content-center my-2">
            <a href={gitClientCodeLink} className="mx-5">
              <button className="git-client-btn"> Client Side Code</button>
            </a>
          </div>
          {gitServerCodeLink ? (
            <div className="d-flex justify-content-center my-2">
              <a href={gitServerCodeLink} className="mx-5">
                <button className="git-server-btn">Server Side Code</button>
              </a>
            </div>
          ) : (
            <div></div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectInfo;

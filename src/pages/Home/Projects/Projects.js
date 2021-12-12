import React from 'react';
import { Row } from 'react-bootstrap';
import ScreenHeading from '../../../utilities/ScreenHeading/ScreenHeading';
import './Projects.css';
import ProjectInfo from '../../ProjectInfo/ProjectInfo';
import useProjects from '../../../hooks/useProjects';
const Project = () => {
    const [projects] = useProjects();

    return (
        <div className='container my-5' id="projects">
             <ScreenHeading title={"My Projects"} subHeading={"Projects those represents me"} />   
               <div className='projects-contanier'>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {
                        projects.map(projectInfo => <ProjectInfo 
                            key = {projectInfo.name}
                            projectInfo = {projectInfo}></ProjectInfo>)
                    }
                </Row>
              </div>                                                                                                                                                                  
        </div>
    );
};

export default Project;
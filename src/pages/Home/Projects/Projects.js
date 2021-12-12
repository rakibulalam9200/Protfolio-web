import React from 'react';
import { Row } from 'react-bootstrap';
import ScreenHeading from '../../../utilities/ScreenHeading/ScreenHeading';
import './Projects.css';
import ProjectInfo from '../../ProjectInfo/ProjectInfo';
const Project = () => {
    const projects =[
        {
            name:'BD Apartment',
            img: 'https://i.ibb.co/wCm4thP/bd-Apartment1.jpg',
            webLink:'https://bd-apartment.web.app/',
            gitClientCodeLink:'https://github.com/rakibulalam9200/BD-Apartment',
            gitServerCodeLink:'https://github.com/rakibulalam9200/BD-Apartment-Server',
            des: 'This is Responsive Apartment Selling website using SPA(Single Page Application). There have two user role Admin and general Users. Admin can manage users and bookings and make another users as a admin. Where users can view apartment details and purchase an Apartment when needed. General User can able to book a Apartment, delete his booking and review in the website.',
            bullets: [
                "Responsive and SPA Apartment selling website using",
                "Manage Apartment and Booking by Admin ",
                "user can post review in the website",
                "User can purchase Apartment and confirm by Admin after review the booking"
            ],
        Technology: 'NodeJS, MongoDB, Express JS, ReactJS, Material UI, React Hook, React Hook Form, React Router, JWT, Firebase Authentication, Context API'
         
        },
        {
            name:'BD Travelers',
            img: 'https://i.ibb.co/HFdQDHL/bd-Travelers.jpg',
            webLink:'https://bd-travelers-fe99c.web.app/',
            gitClientCodeLink:'https://github.com/rakibulalam9200/BD-Travelers',
            gitServerCodeLink:'https://github.com/rakibulalam9200/BD-Travelers-Server',
            des: 'This is Single Page Travel Booking website all over the country.  Admin can set  tips with details for specific tour site and user can view and book the tips for traveling. Admin able to manage user, volunteers and tips.  User can login in the website using Facebook, google and manully after registration. ',
            bullets: [
                "Robust and User-Friendly Travel seat Booking website",
                "Manage Travel Schedule and Travelers",
                "Volunteers by Admin and user can book Travel Schedule in the website",
                "Secure Authentication system applied using Firebase"
            ],
        Technology: 'NodeJS, MongoDB, Express JS, ReactJS, React-Bootstrap, React Hook, React Hook Form, React Router, Firebase Authentication, Context API'
         
        },
        {
            name:'Sheba Hospital',
            img: 'https://i.ibb.co/5Wh2Crt/Sheba-Hospital.jpg',
            webLink:'https://sheba-hospital-345b3.web.app/',
            gitClientCodeLink:'https://github.com/rakibulalam9200/Sheba-Hospital',
            gitServerCodeLink:'',
            des: 'This is a Single Page Application for a Hospital where people can get Health service. User can login in the system using Firebase Authenticaion system. Only Logged user Can view details information about Hospital services. User also can view our doctor information and their visiting realted information on the website.',
            bullets: [
                "Single Page Health Service website using Firebase Authentication.",
                "User can view and know services using the website.",
                "User can view doctors contact information using the website."
            ],
        Technology: 'ReactJS, Bootstrap, React Hook, React Hook Form, React Router, Firebase Authentication'
         
        }
    ]
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
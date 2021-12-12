import React from 'react';
import HomeFooter from './HomeFooter/HomeFooter';
import Profile from './Profile/Profile';
import './Home.css'
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
const Home = () => {
    return (
      <div>
         <div className="home-container" id="profile">
          <Profile/>
          <HomeFooter/>
        </div>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
       
        
      </div>
       
    );
};

export default Home;
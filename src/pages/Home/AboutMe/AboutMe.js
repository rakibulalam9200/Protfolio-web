import React from 'react';
import ScreenHeading from '../../../utilities/ScreenHeading/ScreenHeading';
import './AboutMe.css';
const AboutMe = () => {
    const SCREEN_CONSTSANTS = {
        description:
          "Full stack web developer with background knowledge in MERN stack along with having experiences in various technology.Professional experience with a BSC willing to be an asset for an organization.",
        highlights: {
          bullets: [
            "Full Stack web development",
            "Interactive Front End as per the design",
            "ReactJs (Custom Hooks, Context API)",
            "Building REST API",
            "Managing database (SQL, MongoDB)",
          ],
          heading: "Here are a Few Highlights:",
        },
      };
      const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        ));
      };
    return (
        <div className="about-me-container screen-container">
        <div className="about-me-parent">
          <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
          <div className="about-me-card">
            <div className="about-me-profile"></div>
            <div className="about-me-details">
              <span className="about-me-description">
                {SCREEN_CONSTSANTS.description}
              </span>
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                </div>
                {renderHighlight()}
              </div>
              <div className="about-me-options">
                <button className="btn primary-btn"> Hire Me </button>
                <a href="/Rakibul Alam_Resume.pdf" download="Rakibul Alam_Resume.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;
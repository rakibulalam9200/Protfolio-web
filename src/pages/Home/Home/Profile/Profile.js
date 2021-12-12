import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Typical from "react-typical";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/rakibulalam9200">
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/rakibul-alam-298691148/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/rakibul81293/">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://twitter.com/rakibul9200">
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Rakibul Alam</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "ReactJS Developer 🌐",
                    1000,
                    "MERN Stack Dev 🧑‍💻",
                    1000,
                    "Full Stack Developer 🕸️",
                    1000,
                    "Problem Solver 🌝",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Love to build front and back end
                applications
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a  href="#contact">
              <button className="btn primary-btn">
                {""}
                Hire Me{" "}
              </button>
            </a>
            
            <a
              href="/Rakibul Alam_Resume.pdf"
              downlaod="Rakibul Alam_Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

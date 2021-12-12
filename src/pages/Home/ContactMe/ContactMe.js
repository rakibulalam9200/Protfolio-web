
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import imgBack from "../../../images/mailz.jpeg";
import load2 from "../../../images/load2.gif";
import ScreenHeading from '../../../utilities/ScreenHeading/ScreenHeading';
import Typical from 'react-typical';
import './ContactMe.css';

const ContactMe = () => {

   const [banner, setBanner] = useState("");
   const [bool, setBool] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setBool(true);
    emailjs.sendForm('rakibul9200', 'template_aj6ts93', form.current, 'user_TsUm2lMkacV4DjdPWHMg3')
      .then((result) => {
        setBanner("Message Send Successfully");
        toast.success("Message Send Successfully");
        setBool(false);
      }, (error) => {
        toast.error("Something gone Wrong!!!");
        setBanner("Something gone Wrong!!!");
        setBool(false);
      });
      e.target.reset();
  };

    return (
        <div className="main-container" id="contact">
        <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
        <div className="central-form">
          <div className="col">
            <h2 className="title">
              <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
            </h2>{" "}
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
          <div className="back-form">
            <div className="img-back">
              <h4>Send Your Email Here!</h4>
              <img src={imgBack} alt="" />
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <p>{banner}</p>
              <label htmlFor="name">Name</label>
              <input type="text"  name= "from_name" />
  
              <label htmlFor="email">Email</label>
              <input type="email" name = "from_email"/>
  
              <label htmlFor="message">Message</label>
              <textarea type="text" name ="message"/>
  
              <div className="send-btn">
                <button type="submit">
                  send
                  <i className="fa fa-paper-plane" />
                  {bool ? (
                    <b className="load">
                      <img src={load2} alt="" />
                    </b>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ContactMe;
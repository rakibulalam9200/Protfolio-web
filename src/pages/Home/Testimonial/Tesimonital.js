import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import ScreenHeading from '../../../utilities/ScreenHeading/ScreenHeading';
import shape from '../../../images/shape-bg.png';
import ross from '../../../images/ross.jpg';
import games from '../../../images/games.png';
import mike from '../../../images/mike.png';
import './Testimonial.css';
const Tesimonital = (props) => {
        const options = {
            loop: true,
            margin: 0,
            nav: true,
            animateIn: "bounceInRight",
            animateOut: "bounceOutRight",
            dots: true,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
              0: {
                items: 1,
              },
              768: {
                items: 1,
              },
              1000: {
                items: 3,
              },
            },
          };
    return (
        <div>
        <ScreenHeading
          title={"Testimonial"}
          subHeading={"What My Client Say About Me"}
        />
        <section className="testimonial-section">
        <div className="container">
            <div className="row">
              <OwlCarousel
                className="owl-carousel"
                id="testimonial-carousel"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        I patronized Ehizeex and when He delivered, I honestly
                        fell in love with the project He is a very honest guy and
                        he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img src={games} alt="no internet connection"></img>
                      <h5>Daisy Dominic</h5>
                      <p>CEO InansGlobal</p>
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        I patronized Ehizeex and when He delivered, I honestly
                        fell in love with the project He is a very honest guy and
                        he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img src={mike} alt="no internet connection"></img>
                      <h5>Mikel</h5>
                      <p>CEO MikeTech</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        I patronized Ehizeex and when He delivered, I honestly
                        fell in love with the project He is a very honest guy and
                        he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img src={ross} alt="no internet connection"></img>
                      <h5>Daisy Dominic</h5>
                      <p>CEO InansGlobal</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        I patronized Ehizeex and when He delivered, I honestly
                        fell in love with the project He is a very honest guy and
                        he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img src={ross} alt="no internet connection"></img>
                      <h5>Daisy Dominic</h5>
                      <p>CEO InansGlobal</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        <div className="footer-image">
          <img src={shape} alt="" />
        </div>
      </div>
    );
};

export default Tesimonital;
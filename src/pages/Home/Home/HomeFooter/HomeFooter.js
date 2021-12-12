import React from 'react';
import './HomeFooter.css';
const HomeFooter = () => {
    return (
        <div className="home-footer-container">
            <div className="home-footer-parent">
                <img src={require ('../../../../assets/shape-bg.png').default} alt='no footer'/>
            </div>
        </div>
    );
};

export default HomeFooter;
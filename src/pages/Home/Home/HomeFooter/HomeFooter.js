import React from 'react';
import './HomeFooter.css';
const HomeFooter = () => {
    return (
        <div className="footer-container">
            <div className="footer-parent">
                <img src={require ('../../../../assets/shape-bg.png').default} alt='no footer'/>
            </div>
        </div>
    );
};

export default HomeFooter;
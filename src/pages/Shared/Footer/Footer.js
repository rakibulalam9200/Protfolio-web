import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='mt-5'>
            <div className="footer-container">
                <div className="footer-parent">
                    <img src={require ('../../../images/shape.png').default} alt='no footer'/>
                </div>
            </div>
            <div className='footer-text-container text-center py-2'>
                <p><small>© CopyRight 2021,  </small>All Right Reserved By Rakibul Alam</p>
            </div>

        </div>
        
    );
};

export default Footer;
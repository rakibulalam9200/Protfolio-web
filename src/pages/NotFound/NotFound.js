import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const btnStyle = {
        textDecoration:'none',
        fontWeight:'bold',
        backgroundColor:'#24263B',
        color:'#FFF8DC',
        border: '2px solid #FF5823',
        padding: '8px 30px',
        borderRadius:'15px'

    }
    return (
        <div className='text-center py-5' style = {{color:'#24263B'}}>
            <h2><span style={{color:'#FF5823',fontWeight:'bolder'}}
             className='py-3'> 404 </span>Page Not Found.</h2>
             <br/>
            <Link to="/home" style={btnStyle} >Go Home</Link>
        </div>
    );
};

export default NotFound;
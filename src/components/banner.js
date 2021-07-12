import React from 'react'
import {Link} from 'react-router-dom'
function Banner() {
    return (
        <div  className="banner">
        <div className="text">
            <div>
                <p className=""><span>WELCOME</span> TO FINCLUSION</p>
                <h1>We Provide the Highest quality LOGISTIC SERVICES</h1>
                <div className="btn">
                    <button><Link to='/services'>OUR SERVISES</Link></button>
                    <button><Link to='/about'> ABOUT COMPANY</Link></button>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Banner

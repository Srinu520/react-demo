import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav>
        <div className="logo">
            <Link to='/'>FINCLUSION</Link>
        </div>
        <ul>
            
            <Link to='/'>HOME</Link>
            <Link to='/services'>SERVISES</Link>
            <Link to='/about'> ABOUT US</Link>
            <Link to='/news'>NEWS</Link>
            <Link to='/contactUs'>CONTACT US</Link>
            <Link to='/requsts'>REQUSTS</Link>
            <Link to='/requestQuote'>GET A FREE QUOTE</Link>

        </ul>
    </nav>
    )
}

export default NavBar

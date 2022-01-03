import React from 'react'
import logo from './site-logo.png'

const Header = () => {
    return (
        <header>
            <div className='primary-wrapper'>
                <nav>
                    <ul className='left-links'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                    </ul>
                    <span className='site-logo'>
                        <a href="#">
                            <img src={logo} alt="#"/>
                        </a>
                    </span>
                    <ul className='right-links'>
                        <li><a href="#theteam">The Team</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                        <li><a href="/connect-with-us">Connect with us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

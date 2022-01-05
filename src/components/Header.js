import React from 'react'
import logo from './site-logo.png'

const Header = () => {
    return (
        <header>
            <div className='primary-wrapper'>
                <nav>
                    <ul className='left-links'>
                        <li><a href="#home" onClick={()=>navClick('.hero-parallax')}>Home</a></li>
                        <li><a href="#aboutus" onClick={()=>navClick('.sec-about-us')}>About Us</a></li>
                        <li><a href="#gallery" onClick={()=>navClick('.sec-gallery')}>Gallery</a></li>
                    </ul>
                    <span className='site-logo'>
                        <a href="#">
                            <img src={logo} alt="#"/>
                        </a>
                    </span>
                    <ul className='right-links'>
                        <li><a href="#theteam" onClick={()=>navClick('.sec-the-team')}>The Team</a></li>
                        <li><a href="#roadmap" onClick={()=>navClick('.sec-roadmap')}>Roadmap</a></li>
                        <li><a href="/connect-with-us">Connect with us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

const navClick = (el) => {
    let scrollto = document.querySelector(el);
    // let navheader = document.querySelector('.nav-header');

    // navheader.classList.remove('active');
    scrollto.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
}

export default Header

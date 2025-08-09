import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import resume from '../assets/Smitesh_Resume.pdf';
import mainLogo from '../assets/logo_portfolie.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <nav className="navbar" data-aos="fade-down">
            <img src={mainLogo} alt="Logo" className="logo" ></img>
            <ul>
                <li><Link to="/"><button className='Navbuttons'>Work</button></Link></li>
                <li><Link to="/about"><button className='Navbuttons'>About</button></Link></li>
                <li>
                    <button
                        className='Navbuttons'
                        onClick={() => window.open(resume, '_blank')}
                    >
                        Resume
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import resume from '../assets/Smitesh_Resume.pdf';
import mainLogo from '../assets/logo_portfolie.png';

const Navbar = () => {
    return (
        <nav className="navbar">
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

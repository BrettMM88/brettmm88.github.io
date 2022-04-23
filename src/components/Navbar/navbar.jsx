import React from 'react';
import './navbar.css';
import resume from '../Resume/Brett Magee - Resume.pdf';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <Link to="/" className='nav-item nav-link'>Home</Link>
                    <Link to="/projects" className='nav-item nav-link'>Projects</Link>
                    <li className="nav-item">
                        <a className="nav-link" href={resume} target="_blank" rel="noopener noreferrer" >Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
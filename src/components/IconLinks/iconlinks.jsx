import React from 'react';
import './iconlinks.css';
import githubIcon from './imgs/github-icon.png';
import linkedinIcon from './imgs/linkedin-icon.png';

const Iconlinks = () => {
    return (
        <div className="iconlinks-container">
            <div className="iconlinks-icon-container">
                <a
                    href="https://github.com/BrettMM88"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={githubIcon} className="iconlinks-icon" alt="Github Icon and Link to Github Profile" />
                </a>
            </div>
            <div className="iconlinks-icon-container">
                <a
                    href="https://www.linkedin.com/in/brettmagee/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkedinIcon} className="iconlinks-icon" alt="Github Icon and Link to Github Profile" />
                </a>
            </div>
        </div>
    )
}

export default Iconlinks
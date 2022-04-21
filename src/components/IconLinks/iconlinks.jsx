import React from 'react';
import './iconlinks.css';
import githubIcon from './imgs/github-icon.png';
import linkedinIcon from './imgs/linkedin-icon.png';

const Iconlinks = () => {
    return (
        <div class="iconlinks-container">
            <div class="iconlinks-icon-container">
                <a href="https://github.com/BrettMM88">
                    <img src={githubIcon} class="iconlinks-icon" alt="Github Icon and Link to Github Profile" />
                </a>
            </div>
            <div class="iconlinks-icon-container">
                <a href="https://www.linkedin.com/in/brettmagee/">
                    <img src={linkedinIcon} class="iconlinks-icon" alt="Github Icon and Link to Github Profile" />
                </a>
            </div>
        </div>
    )
}

export default Iconlinks
import React from 'react'
import Iconlinks from '../IconLinks/iconlinks';
import './home.css'
//import RotatingSkills from '../RotatingSkills/rotatingskills';

const Home = () => {
    return (
        <div class="homepage-container .container-fluid">
            <div class="homepage-text-container">
                <h1 class="homepage-title">Brett Magee</h1>
                <h3 class="homepage-subtitle">Full Stack Developer</h3>
            </div>
            <div class="homepage-icon-container">
                <Iconlinks />
            </div>
        </div>
    )
}

export default Home;
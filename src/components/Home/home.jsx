import React from 'react'
import Iconlinks from '../IconLinks/iconlinks';
import './home.css'
//import RotatingSkills from '../RotatingSkills/rotatingskills';

const Home = () => {
    return (
        <div class="homepage-container .container-fluid">
            <h1 class="homepage-title">Brett Magee</h1>
            <h3 class="homepage-subtitle">Full Stack Developer</h3>
            <Iconlinks />
        </div>
    )
}

export default Home;
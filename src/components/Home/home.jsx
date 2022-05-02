import React from 'react'
import Icongrid from '../IconGrid/icongrid';
import Iconlinks from '../IconLinks/iconlinks';
import './home.css'
//import RotatingSkills from '../RotatingSkills/rotatingskills';

const Home = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-icon-container">
                <Iconlinks />
            </div>
            <div className="homepage-text-container">
                <h1 className="homepage-title">Brett Magee</h1>
                <h3 className="homepage-subtitle">Full Stack Developer</h3>
                <Icongrid />
            </div>
        </div>
    )
}

export default Home;
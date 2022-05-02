import React from 'react'
import './icongrid.css';

import csharp from '../RotatingSkills/imgs/c-sharp-icon-squared.png';
import dotnet from '../RotatingSkills/imgs/dotnet-icon.png';
import vb from '../RotatingSkills/imgs/vb-dotnet-icon-square.png';
import entityframework from '../RotatingSkills/imgs/entity-framework-core-icon.png';

import react from '../RotatingSkills/imgs/react-icon-squared.png';
import javascript from '../RotatingSkills/imgs/javascript-icon.png';
import html5 from '../RotatingSkills/imgs/html5-icon.png';
import css3 from '../RotatingSkills/imgs/css3-icon.png';

import python from '../RotatingSkills/imgs/python-icon.png';
import flask from '../RotatingSkills/imgs/flask-icon.png';
import mysql from '../RotatingSkills/imgs/mysql-icon.png';
import postgres from '../RotatingSkills/imgs/postgres-icon.png';

import java from '../RotatingSkills/imgs/java-icon.png';
import springboot from '../RotatingSkills/imgs/spring-boot-icon.png';
import hibernate from '../RotatingSkills/imgs/hibernate-icon.png';
import git from '../RotatingSkills/imgs/git-icon.png';

const Icongrid = () => {
    return (
        <div className='icongrid-container'>
            {/* First Row */}
            <div className='icon-container'>
                <img src={csharp} alt='C# Logo' className='icongrid-icon' id='icon-1' />
            </div>
            <div className='icon-container'>
                <img src={react} alt='React Logo' className='icongrid-icon' id='icon2' />
            </div>
            <div className='icon-container'>
                <img src={java} alt='Java Logo' className='icongrid-icon' id='icon3' />
            </div>
            <div className='icon-container'>
                <img src={python} alt='Python Logo' className='icongrid-icon' id='icon4' />
            </div>

            {/* 2nd Row */}
            <div className='icon-container'>
                <img src={dotnet} alt='Dotnet Logo' className='icongrid-icon' id='icon5' />
            </div>
            <div className='icon-container'>
                <img src={javascript} alt='Javascript Logo' className='icongrid-icon' id='icon6' />
            </div>
            <div className='icon-container'>
                <img src={springboot} alt='Spring Boot Logo' className='icongrid-icon' id='icon7' />
            </div>
            <div className='icon-container'>
                <img src={flask} alt='Flask Logo' className='icongrid-icon' id='icon8' />
            </div>

            {/* Row 3 */}
            <div className='icon-container'>
                <img src={entityframework} alt='Entity Framework Logo' className='icongrid-icon' id='icon9' />
            </div>
            <div className='icon-container'>
                <img src={css3} alt='CSS 3 Logo' className='icongrid-icon' id='icon10' />
            </div>
            <div className='icon-container'>
                <img src={hibernate} alt='Hibernate Logo' className='icongrid-icon' id='icon11' />
            </div>
            <div className='icon-container'>
                <img src={postgres} alt='Postgres Logo' className='icongrid-icon' id='icon12' />
            </div>

            { /* Row 4 */}
            <div className='icon-container'>
                <img src={vb} alt='Visual Basic Dotnet Logo' className='icongrid-icon' id='icon13' />
            </div>
            <div className='icon-container'>
                <img src={html5} alt='HTML 5 Logo' className='icongrid-icon' id='icon14' />
            </div>
            <div className='icon-container'>
                <img src={git} alt='Git Logo' className='icongrid-icon' id='icon15' />
            </div>
            <div className='icon-container'>
                <img src={mysql} alt='MySQL Logo' className='icongrid-icon' id='icon16' />
            </div>
        </div>
    )
}

export default Icongrid
import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate Software Developer in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for details. I am proficient in Java, SpringBoot, Hibernate,J2EE Framewrok, MYyQL, JavaScript, React.js, Microservices, RestAPI and GIT version control. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                     <h2>UI/UX Design</h2>
                     <p>UI design is concerned with the visual and interactive elements of a digital product. It involves creating the visual layout, typography, colors, buttons, icons, and other graphical elements that users interact with. The goal of UI design is to ensure that the interface is visually appealing, consistent, and user-friendly.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                     <h2>Website Design</h2>
                     <p>In our web design journey, we fuse creativity with technical prowess to craft digital experiences that captivate and connect. With years of expertise, we've honed our skills in designing visually stunning and user-friendly websites that leave lasting impressions. Our mission is simple: to transform ideas into engaging online realities.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                     <h2>Data Structure and Algorithms</h2>
                     <p>"I'm a seasoned coder with a passion for crafting efficient and elegant solutions through programming. Over the years, I've honed my skills in a variety of programming languages, including C#, C++, Java, Python, JavaScript. I have a solid foundation in Data Structures and Algorithms, which allows me to tackle complex problems systematically. I've had the opportunity to work on diverse projects, from web development to software engineering, and I thrive on the challenge of turning ideas into functional and innovative software</p>
                </div>
            </div>
            </div> 
    </section>
  )
}

export default Skills;

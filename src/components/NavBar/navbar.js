import React, { useState } from 'react';
import './navbar.css';
// import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import LinkedIn from '../../assets/linkedin.png';
import GitHub from '../../assets/github.png';


const Navbar = () => {
    const newTab=url=>{
        window.open(url)
    }
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        {/* <img src={logo} alt='logo' className='logo'/> */}
        <a href="www.linkedin.com/in/diksha-pandey-34814a226"><img src={LinkedIn} alt='linkedin' className='linkedinImg' onClick={()=>newTab('www.linkedin.com/in/diksha-pandey-34814a226')}/></a>
      <a href="https://github.com/Diksha202020"><img src={GitHub} alt='github' className='githubImg' onClick={()=>newTab('https://github.com/Diksha202020')}/></a>       <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Skills</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}>
            <img src={contactImg} alt='' className='desktopMenuImg'/>Contact Me
        </button>
        <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display:showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>Contact</Link>
        </div>

    </nav>
  )
}

export default Navbar

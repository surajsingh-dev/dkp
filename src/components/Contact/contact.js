import React, { useRef } from 'react';
import './contact.css';
import Walmart  from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft  from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c9vovg1', 'template_bfox1qp', form.current, '_JBs9AT6UJ2Af2NH_')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Technical Skills</h1>
            <p className='skillsDsc'>
                As I am student of CDAC-Bengaluru, I have studied many modules such as OOPS with Java, Database technologies, Data Structures and Algorithms, Web-based Java Programming, Microsoft .NET Technologies, Operating System and Software Development Methodologies.
            </p>
            <div className='myskill'>
                <div className='tech'><u>Programming Language</u>
                  <ul>
                    <li>Java</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className='tech'><u>Frameworks</u>
                  <ul>
                    <li>Java Servlet</li>
                    <li>J2EE</li>
                    <li>Spring</li>
                    <li>SpringBoot</li>
                    <li>Hibernate</li>
                  </ul>
                </div>
                <div className='tech'><u>Web Technologies</u>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                <div className='tech'><u>Frameworks</u>
                  <ul>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    
                  </ul>
                </div>
            </div>
            <div id='contact'>
              <h1 className='contactPageTitle'>Contact Me</h1>
              <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
              <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                <input type='email' className='email' placeholder='Your Email' name='from_email'/>
                <textarea name='message' rows="5" placeholder='Your Message' className='msg'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                  <img src={FacebookIcon} alt='facebook' className='clientImg'/>
                  <img src={TwitterIcon} alt='twitter' className='clientImg'/>
                  <img src={YouTubeIcon} alt='youtube' className='clientImg'/>
                  <img src={InstagramIcon} alt='instagram' className='clientImg'/>
                </div>
              </form>
            </div>
        </div>
    </section>
  )
}

export default Contact;

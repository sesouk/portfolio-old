import React from 'react';
import linkedin from '../linkedin.png'
import twitter from '../twitter.png'
import mail from '../mail.png'
import github from '../github.png'

const Contact = () => {
  return (
    <div className='info-container'>
      <div className='links'>
      <h1>Let's talk!</h1>
      <a href="https://www.linkedin.com/in/kevinsesouktran/">
        <img src={linkedin} alt="Link to LinkedIn Profile" className='contactLinks'/>
      </a>
      <a href="https://github.com/sesouk">
        <img src={github} alt="Link to Github Profile" className='contactLinks'/>
      </a>
      <a href="mailto:sesouk@gmail.com">
        <img src={mail} alt="Link for e-Mail" className='contactLinks'/>
      </a>
      <a href="https://twitter.com/sesouk">
        <img src={twitter} alt="Link to Twitter Profile" className='contactLinks'/>
      </a>
        </div>
      </div> 
  );
};

export default Contact;
import React from 'react';
import '../styling/about.css'
import me from '../me.jpg'

const About = () => {
  return (
    <div className='info-container'>
      <div className='conatainer'>
        <h1>My Journey</h1>
          <p className='p1'>
            I'm Kevin, a highly motivated and driven person that has a passion for creativity and design. I fell in love with coding because of all the ever growing possibilities in technology. I strive to continually improve my skills in current technologies and learn new technologies.
          </p>
          <p className='p1'>
            Right now I am located in Denver, Colorado but I am willing to relocate for the correct situation. I attended the University of Colorado Denver where I studied Psychology. I eventually found a different calling in life and moved to Phoenix, Arizona to attend a Web Development bootcamp.
          </p>
          <p className='p1'>
            While attending the bootcamp I found my passion in Full-Stack Web Development with a focus on Front-End Development and User Interface and Experience. To go along with my focus of Front-End Development I have experience in Photoshop and Illustrator editing and creating from scratch. Because of my experience with creating logos and editing images I have sense for what is appealing to a users eye. I am able to combine this with my experience in HTML/CSS/Javescript and React to make visually appealing web apps.   
          </p>
          <p className='p1'> 
            Although my development experience isnt lengthy I spent March 2018 - June 2018 working on several web apps both by myself and with a team. I am proficient in React, Node, Express, and PostgreSQL as the majority of my apps have been built off of those. I have two full scale eCommerce sites: one for a personal clothing brand that I created and one with a team that was desgined as a one stop shop for all needs. I believe that my experience working with and without a team has made me a better developer because I can develop a web app by myself or I can create code that will function with legacy code. If given the opportunity I believe that I could be an asset to any type of company.
          </p>
          <img src={me} alt="Kevin Tran" className='me'/>
        </div>
      </div> 
  );
};

export default About;
import React from 'react';
import stopnshop from '../Stop-N-Shop.gif'
import kvge from '../KVGE.gif'
import premecomics from '../PremeComics.gif'

const Projects = () => {
  return (
    <div className='info-container'>
    <h1>Projects</h1>
  <div className='tech'>
    <div>
    <h3>Stop-N-Shop</h3>
    <img src={stopnshop} alt="Stop-N-Shop Walkthrough" className='gif'/>
    <p>This is an e-Commerce team developed web application. My primary focus was rendering the shop page, making no duplicate items appeared, sending the correct information from the item detail module to the cart, and also creating the image slider for the landing page.</p>
    <br/>
    <p>Tech used: Reactjs | Nodejs | Express | SQL | Massive | Redux</p>
    <a href="https://github.com/sesouk/Group-Project" className='repo'>Github Repository Here</a>
    </div>
    <div>
    <h3>KVGE Brand</h3>
    <img src={kvge} alt="KVGE Walkthrough" className='gif'/>
    <p>This is an e-Commerce individually developed web application. This entire project was created for a clothing brand that I am developing and all logos and fuctionality of the web application were made by myself.</p>
    <br/>
    <p>Tech used: Reactjs | Nodejs | Express | SQL | Massive | Redux</p>
    <a href="https://github.com/sesouk/personal-project" className='repo'>Github Repository Here</a>
    </div>
    <div>
    <h3>Preme Comics</h3>
    <img src={premecomics} alt="PremeComics Walkthrough" className='gif'/>
    <p>This is a web application that was individually developed for the purpose of showcasing my Full-Stack Web Development abilities. I created an API for this application as there is no database. All fuctionality was created by myself.</p>
    <br/>
    <p>Tech used: Reactjs | Nodejs | Express | Massive</p>
    <a href="https://github.com/sesouk/nodb-project" className='repo'>Github Repository Here</a>
    </div>
    </div>
  </div> 
  );
};

export default Projects;
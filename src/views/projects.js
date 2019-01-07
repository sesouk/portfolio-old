import React from 'react';

const Projects = () => {
  return (
    <div className='info-container'>
    <h1>Projects</h1>
  <div className='tech'>
    <div>
    <h2>Stop-N-Shop</h2>
    <p>This is an eCommerce team developed web application. My primary focus was rendering the shop page, ensuring no duplicate items appeared, sending the correct information from the item detail modal to the cart, and creating an image slider for the landing page. Screenshots and a walkthrough can be found on the GitHub repository. Video walkthrough coming soon!</p>
    <p>Tech used: Reactjs | Nodejs | Express | SQL | Massive | Redux</p>
    <a href="https://github.com/sesouk/Group-Project" className='repo'>Github Repository Here</a>
    </div>
    <div>
    <h2>KVGE Brand</h2>
    <p>This is an eCommerce individually developed web application. This entire project was created for a clothing brand that I am developing and all logos and fuctionality for the web application were made by myself. Screenshots and a walkthrough can be found on the GitHub repository. Video walkthrough coming soon!</p>
    <p>Tech used: Reactjs | Nodejs | Express | SQL | Massive | Redux</p>
    <a href="https://github.com/sesouk/personal-project" className='repo'>Github Repository Here</a>
    </div>
    <div>
    <h2>Preme Comics</h2>
    <p>This is a web application that was individually developed for the purpose of showcasing my Full-Stack Web Development abilities. I created an API for this application as there is no database. All fuctionality and the Preme Comics logo was created by myself. Screenshots and a walkthrough can be found on the GitHub repository. Video walkthrough coming soon!</p>
    <p>Tech used: Reactjs | Nodejs | Express | Massive</p>
    <a href="https://github.com/sesouk/nodb-project" className='repo'>Github Repository Here</a>
    </div>
    </div>
  </div> 
  );
};

export default Projects;
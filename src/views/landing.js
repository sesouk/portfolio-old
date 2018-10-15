import React from 'react';
import '../styling/landing.css'
import landing from '../landing.jpg'

const Landing = () => {
  return (
    <div className='contain'>
        <div id='landing'>
          <div className='name'>
          <h1 className='kst'>
          Kevin Sesouk Tran
          </h1>
          <h3>
            Full-Stack Web Developer
          </h3>
          <p>
          "I've always looked at "success" as a destination rather than a goal, that way it's not a matter of IF but a matter of WHEN."
          </p>
          <p>
            -Tim Chantarangsu
          </p>
          </div>
          <img src={landing} alt="Maroon Bells - Aspen"/>
        </div>
        </div>
  );
};

export default Landing;
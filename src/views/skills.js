import React from 'react';

const Skills = () => {
  return (
    <div className='info-container'>
        <h1>Tech Skills</h1>
      <div className='tech'>
        <div className='column'>
          <ul>Javascript</ul>
          <ul>HTML</ul>
          <ul>CSS</ul>
          <ul>Sass</ul>
          <ul>React</ul>
          <ul>Redux</ul>
        </div>
        <div className='column'>
          <ul>NodeJS</ul>
          <ul>ExpressJS</ul>
          <ul>Git</ul>
          <ul>VueJS</ul>
          <ul>PostgreSQL</ul>
          <ul>SQL</ul>
        </div>
        <div className='column'>
          <ul>GraphQL</ul>
          <ul>Jest</ul>
          <ul>APIs</ul>
          <ul>JSON</ul>
          <ul>Photoshop</ul>
          <ul>Illustrator</ul>
        </div>
        </div>
      </div> 
  );
};

export default Skills;
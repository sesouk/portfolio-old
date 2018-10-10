import React from 'react';
import landing from './views/landing'
import about from './views/about'
import contact from './views/contact'
import projects from './views/projects'
import skills from './views/skills'
import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
            <Route component={landing} exact path='/'/>
            <Route component={skills} path='/skills'/>
            <Route component={contact} path='/contact'/>
            <Route component={projects} path='/projects'/>
            <Route component={about} path='/about'/>
    </Switch>
)
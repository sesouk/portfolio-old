import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {routes}
      </div>
    );
  }
}

export default App;

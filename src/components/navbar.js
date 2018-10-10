import React, { Component } from 'react';
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import '../styling/nav.css'

export default class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      showDrawer: false
    }
  }

  close() {
    this.setState({
      showDrawer: false
    })
  }

  render() {
    return (
      <div>
        <nav className='main-nav'>
          <div className='landing'><Link to ='/' style={{ textDecoration: 'none', color: 'black' }} onClick={this.close}>KST - Digital Creator</Link></div>
        <div className='links'>
          <div className='menu'><button onClick={() => this.setState({showDrawer: !this.state.showDrawer})}>☰</button></div>
            <div className='desktop'>
              <div><Link to ='/about' style={{ textDecoration: 'none', color: 'black' }}>About Me</Link></div>
              <div><Link to ='/skills' style={{ textDecoration: 'none', color: 'black' }}>Tech Skills</Link></div>
              <div><Link to ='/projects' style={{ textDecoration: 'none', color: 'black' }}>Projects</Link></div>
              <div><Link to ='/contact' style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></div>
            </div>
        </div>
        </nav>
        <div className={classnames('drawer', { open: this.state.showDrawer })}>
          <div><Link to ='/about' style={{ textDecoration: 'none', color: 'black' }} onClick={this.close}>About Me</Link></div>
          <br/>
          <div><Link to ='/skills' style={{ textDecoration: 'none', color: 'black' }} onClick={this.close} >Tech Skills</Link></div>
          <br/>
          <div><Link to ='/projects' style={{ textDecoration: 'none', color: 'black' }} onClick={this.close}>Projects</Link></div>
          <br/>
          <div><Link to ='/contact' style={{ textDecoration: 'none', color: 'black' }} onClick={this.close} >Contact</Link></div>
          <br/>
          </div>
        </div>
    );
  }
}
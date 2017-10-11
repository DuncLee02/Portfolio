import Menu from './menu.js'
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Portfolio from './portfolio.js'
import About from './aboutme.js'
import Contact from './contact.js'
import './base.css'


class Base extends Component {

  render() {
    return (
      <div className="baseLayout">
        <BrowserRouter>
          <div className="baseLayout">
            <Route path='/' component={Menu}/>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About}/>
            <Route path="/skills" />
            <Route path="/contact" component={Contact}/>

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Base;

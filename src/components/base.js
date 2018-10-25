import Menu from './menu.js'
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import Portfolio from './portfolio.js'
import About from './aboutme.js'
import Contact from './contact.js'
import Skills from './skills.js'
import './base.css'


class Base extends Component {

  render() {
    console.log('vs. 2.0')

    console.log(window.location.pathname)

    if (window.location.pathname == "/") {
      window.location.pathname = "/Portfolio/about"
    }
    if (window.location.pathname == "/Portfolio") {
      window.location.pathname = "/Portfolio/about"
    }

    return (
      <div className="baseLayout">
        <BrowserRouter>
          <div className="baseLayout">
            <Route exact path='/Portfolio' component={About}/>
            <Route path="/Portfolio/portfolio" component={Portfolio} />
            <Route path="/Portfolio/about" component={About}/>
            <Route path="/Portfolio/skills" component={Skills}/>
            <Route path="/Portfolio/contact" component={Contact}/>
            <Route path='/' component={Menu}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Base;

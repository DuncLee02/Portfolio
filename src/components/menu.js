import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import './menu.css'

class Menu extends Component {
  render() {

    var currentPath = this.props.location.pathname

    return (
      <div className="menuContainer">

        <div className='titleSection'>
          <img className='menuImage' src={require('../images/profileImage.png')} alt='myPic'/>
          <text> Duncan Lee </text>
          <text> Computer Science Major, University of Virginia </text>
        </div>

        <div className="aboutMeSection">
          <Link className={currentPath==='/Portfolio/about' ? 'selectedItem': 'menuItem'} to = 'about'>
            <text className={currentPath==='/Portfolio/about' ? 'selected': null}> About </text>
          </Link>
          <Link className={currentPath==='/Portfolio/portfolio' ? 'selectedItem': 'menuItem'} to = 'portfolio'>
            <text className={currentPath==='/Portfolio/portfolio' ? 'selected': null}> Portfolio </text>
          </Link>
          <Link className={currentPath==='/Portfolio/skills' ? 'selectedItem': 'menuItem'} to = 'skills'>
            <text className={currentPath==='/Portfolio/skills' ? 'selected': null}> Skills </text>
          </Link>

          <Link style= {{'marginTop': 20}} className={currentPath==='/Portfolio/contact' ? 'selectedItem': 'menuItem'} to = 'contact'>
            <text className={currentPath==='/Portfolio/contact' ? 'selected': null}> Contact </text>
          </Link>
        </div>

      </div>
    );
  }
}

export default Menu;

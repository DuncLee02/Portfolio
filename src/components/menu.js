import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import './menu.css'

class Menu extends Component {
  render() {

    var currentPath = this.props.location.pathname
    console.log(currentPath)

    return (
      <div className="menuContainer">

        <div className='titleSection'>
          <img className='menuImage' src={require('../images/profileImage.png')} alt='myPic'/>
          <text> Duncan Lee </text>
          <text> Computer Science Major, University of Virginia </text>
        </div>

        <div className="aboutMeSection">
          <Link className={currentPath==='/about' ? 'selectedItem': 'menuItem'} to = 'about'>
            <text className={currentPath==='/about' ? 'selected': null}> About </text>
          </Link>
          <Link className={currentPath==='/portfolio' ? 'selectedItem': 'menuItem'} to = 'portfolio'>
            <text className={currentPath==='/portfolio' ? 'selected': null}> Portfolio </text>
          </Link>
          <Link className={currentPath==='/skills' ? 'selectedItem': 'menuItem'} to = 'skills'>
            <text className={currentPath==='/skills' ? 'selected': null}> Skills </text>
          </Link>

          <Link style= {{'marginTop': 20}} className={currentPath==='/contact' ? 'selectedItem': 'menuItem'} to = 'contact'>
            <text className={currentPath==='/contact' ? 'selected': null}> Contact </text>
          </Link>
        </div>

      </div>
    );
  }
}

export default Menu;

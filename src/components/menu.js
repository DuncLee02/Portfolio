import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import './menu.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelIsVisible: false
    };
  }

  render() {
    var currentPath = this.props.location.pathname

    return (
      <div>
      <div>
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
      <button className="menu-button" onClick={this.togglePanel.bind(this)}/>
      </div>
      <div id="dropdown-menu-panel">
      <Link onClick={this.togglePanel.bind(this)} className={currentPath==='/Portfolio/about' ? 'selectedItem menuItem': 'menuItem'} to = 'about'>
        <text className={currentPath==='/Portfolio/about' ? 'selected': null}> About </text>
      </Link>
      <Link onClick={this.togglePanel.bind(this)} className={currentPath==='/Portfolio/portfolio' ? 'selectedItem menuItem': 'menuItem'} to = 'portfolio'>
        <text className={currentPath==='/Portfolio/portfolio' ? 'selected': null}> Portfolio </text>
      </Link>
      <Link onClick={this.togglePanel.bind(this)} className={currentPath==='/Portfolio/skills' ? 'selectedItem menuItem': 'menuItem'} to = 'skills'>
        <text className={currentPath==='/Portfolio/skills' ? 'selected': null}> Skills </text>
      </Link>

      <Link onClick={this.togglePanel.bind(this)} className={currentPath==='/Portfolio/contact' ? 'selectedItem menuItem': 'menuItem'} to = 'contact'>
        <text className={currentPath==='/Portfolio/contact' ? 'selected': null}> Contact </text>
      </Link>
      </div>
      </div>
    );
  }

  togglePanel() {
    console.log("click registered: visible: " + this.state.panelIsVisible)

    var panel = document.getElementById("dropdown-menu-panel");
    if (!this.state.panelIsVisible){
      panel.style.top = "0px";
    }
    else{
      panel.style.top = "-350px";
    }
    this.setState({
      panelIsVisible: !this.state.panelIsVisible
    })
  }
}

export default Menu;

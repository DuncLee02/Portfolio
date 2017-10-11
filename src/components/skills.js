import React, { Component } from 'react';
import './skills.css'


class Skills extends Component {
  render() {
    return (
      <div className="skillsContainer">
        <div className='skillsTopBar'>
          <br/>
          <text className='skillsHeader'>  SKILLS </text>
        </div>

        <text className='skillsIntro'> My current toolset includes: </text>

        <div className='skillSetContainer'>
          <div className='skillItem'>
            <text className='skillItemHeader'> HTML5 </text>
            <img className='skillIcon' src={require('../images/html5.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text className='skillItemHeader'> CSS3 </text>
            <img className='skillIcon' src={require('../images/css.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text className='skillItemHeader'> React </text>
            <img className='skillIcon' src={require('../images/react.png')} alt='HTML5'/>
          </div>

          <div className='skillItem'>
            <text className='skillItemHeader'> Python </text>
            <img className='skillIcon' src={require('../images/python.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text className='skillItemHeader'> Java </text>
            <img className='skillIcon' style={{'borderRadius': 15}} src={require('../images/java.png')} alt='HTML5'/>
          </div>

          <div className='skillItem'>
            <text className='skillItemHeader'> Swift </text>
            <img className='skillIcon' style={{'height': 100}} src={require('../images/swift.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text className='skillItemHeader'> xCode </text>
            <img className='skillIcon' style={{'borderRadius': 15}} src={require('../images/xcode.jpg')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text className='skillItemHeader'> React Native </text>
            <img className='skillIcon' src={require('../images/react_native.png')} alt='HTML5'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

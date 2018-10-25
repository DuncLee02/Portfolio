import React, { Component } from 'react';
import './skills.css'


class Skills extends Component {
  render() {
    return (
      <div className="skillsContainer pageContainer">
        <div className='pageHeader'>
          <br/>
          <text className='header-text'>  SKILLS </text>
        </div>

        <text className='skillsIntro'> My current toolset includes: </text>

        <div className='skillSetContainer'>
          <div className='skillItem'>
            <text> HTML5 </text>
            <img src={require('../images/html5.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text> CSS3 </text>
            <img src={require('../images/css.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text> React </text>
            <img src={require('../images/react.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text> Python </text>
            <img src={require('../images/python.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text> Java </text>
            <img style={{'borderRadius': 15}} src={require('../images/java.png')} alt='HTML5'/>
          </div>

          <div className='skillItem'>
            <text > Swift </text>
            <img style={{'height': 100}} src={require('../images/swift.png')} alt='HTML5'/>
          </div>

          <div className='skillItem'>
            <text> xCode </text>
            <img  style={{'borderRadius': 15}} src={require('../images/xcode.jpg')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text> React Native </text>
            <img src={require('../images/react_native.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text> ASP.NET </text>
            <img src={require('../images/aspdotnet.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text> Visual Studio </text>
            <img src={require('../images/visualstudio.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text> C# </text>
            <img src={require('../images/c_sharp.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text> Azure </text>
            <img src={require('../images/azure.png')} alt='HTML5'/>
          </div>
          <div className='skillItem'>
            <text> SiteCore </text>
            <img src={require('../images/sitecore.png')} alt='HTML5'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

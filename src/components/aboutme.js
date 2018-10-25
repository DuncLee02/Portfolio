import React, { Component} from 'react';
import './aboutme.css'

class about extends Component {
  render() {
    return (
      <div className="aboutContainer pageContainer">
        <div className='pageHeader'>
          <br/>
          <text className='header-text'>  ABOUT </text>
        </div>
        <div className='topInfoBar'>
        <div className='introductionContainer'>
            <text className='introductionText'> I am a developer at RDA corporation with a passion for thoughtful UI design,
             collaboration, and creative solutions.
             </text>
        </div>
        </div>

        <div className='introductionTextBody'>

          <p> As a developer, I am driven to innovate and have an unequaled desire to build things.  I love to think outside of the box
          and find innovative ways to solve problems quickly and efficiently, benefiting both me and those
          I work with.
          </p>
          <p>
          My career began at the University of Virginia when I took an intro programming class on a whim and fell in love.  I
          went on to major in computer science and became the treasurer of a mobile developement club, HooApps, at UVA.  After building a solid
          foundation of knowledge in Object Oriented Programming, I became proficient in a number of frontend and backend development languages and landed
          a job working for RDA Corporation in Hunt Valley, MD.
          </p>

          <text> what I{"'"}ve been up to lately: </text>
          <ul>
            <li> Working as a software developer for RDA corporation in HuntValley </li>
            <li> Learning the ASP.NET MVC Framework </li>
            <li> Familiarizing myself with Azure Cloud Services </li>
            <li> Working with CMS services such as SiteCore </li>
          </ul>

        </div>


      </div>
    );
  }
}

export default about;

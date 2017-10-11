import React, { Component} from 'react';
import './aboutme.css'

class about extends Component {
  render() {
    return (
      <div className="aboutContainer">

        <div className='topInfoBar'>
        <br/>
        <text className='aboutHeader'>  ABOUT </text>
          <div className='introductionContainer'>
            <text className='introductionText'> I am a student at the University of Virginia with a passion for thoughtful UI design,
             collaboration, and creative solutions.
            </text>
          </div>
        </div>

        <div className='introductionTextBody'>

          <p> As a developer, I am driven innovate and have an unequaled desire to build things.  I love to think outside of the box
          and find innovative ways to solve problems quickly and efficiently, benefiting both me and those
          I work with.
          </p>
          <p> I have a strong background in react, react-native, and iOS programming.  If you check out my portfolio,
          you will find examples of several applications I have build using these languages.  In addition to extracuricular
          projects, I am also the treasurer of HooApps, a CIO at UVA that teaches students the basics of app development.
          As a member of the exec board I give members lessons at our weekly meeting, hold office hours to answer questions,
          and manage the clubs finances.
          </p>

          <text> what I{"'"}ve been up to lately: </text>
          <ul>
            <li> Building this website! </li>
            <li> Taking classes on websecurity and SQL at the University of Virginia </li>
            <li>  Teaching lessons at HooApps lessons to aspiring iOS developers </li>
          </ul>

        </div>


      </div>
    );
  }
}

export default about;


import React, { Component } from 'react';
import './contact.css'


class Contact extends Component {

  render() {
    return (
      <div className="contactContainer">
        <div className='contactTopBar'>
          <br/>
          <text className='contactTopBarTitle'> CONTACT </text>
        </div>

        <div className='contactInfoContainer'>
          <div className='contactItem' >
            <div className='contactIconCircle'>
              <img className='contactIcon' src={require('../images/phone.png')} alt='phone'/>
            </div>
            <text className='contactText'> (757)-903-5119 </text>
          </div>
          <div className='contactItem' >
            <div className='contactIconCircle'>
              <img className='contactIcon' src={require('../images/email.png')} alt='phone'/>
            </div>
            <a className='contactText' href='mailto:duncan23185@gmail.com'> duncan23185@gmail.com </a>
          </div>
          <div className='contactItem' >
            <div className='contactIconCircle'>
              <img className='contactIcon' src={require('../images/github.png')} alt='phone'/>
            </div>
            <a className='contactText' href='https://github.com/DuncLee02'> https://github.com/DuncLee02 </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

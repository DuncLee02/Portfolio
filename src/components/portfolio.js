import React, { Component} from 'react';
import './portfolio.css'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolioContainer">

      <div className='portfolioTopBar'>
        <br/>
        <text className='portfolioHeader'> PORTFOLIO </text>
      </div>

      <div className="timelineItem">
        <div className='timelineLine'>
          <img className='timelineCircle' src={require('../images/circle.png')}/>
        </div>
        <div className='timelineDate'>
          Jul - Sep 2017
        </div>
        <div className='timelineTextContainer'>
          <text className='nodeTitle'>
            Ander
          </text>
          <div className='nodeBody'>
            <text>
            I worked on a website for a car rental company called Ander.  Ander is a startup that is tapping into the market of renting cars at airports.
            </text>
            <text>
            They needed a website to coordinate the flow of information between those who own cars and those who want to rent them.
            </text>
            <text>
            The website features:
            </text>

            <div className='timelineApp'>
              <ul className='timelineWebsiteDescription'>
                <li className='timelineAppText'> A clean, custom searchbar  </li>
                <li className='timelineAppText'> Responsive information pages </li>
                <li className='timelineAppText'> A google login </li>
                <li className='timelineAppText'> Firebase backend </li>
                <br/>
              </ul>
              <img src={require('../images/ander1.png')} className='timelineWebsitePhoto' alt='ander'/>
            </div>

            <text> The website was never fully completed due to insurance issues, but can be visited
              <a href='https://dunclee02.github.io/ander/'> here </a>
            </text>

          </div>

        </div>
      </div>

        <div className="timelineItem">
          <div className='timelineLine'>
            <img className='timelineCircle' src={require('../images/circle.png')} alt='circle'/>
          </div>
          <div className='timelineDate'>
            Jun - Aug 2017
          </div>
          <div className='timelineTextContainer'>
            <text className='nodeTitle'>
              Smart Source Apps
            </text>
            <text className='nodeBody'>
              This last summer I worked at a startup in Charlottesville called smart source apps building mobile applications.
              <br/>
              During this time I worked on two applications, one of which was later published to the appstore
              <ol>
                <li className='timelineli'> BeSmart
                  <div className='timelineApp'>
                    <div className='timelineAppDescription'>
                      <br/>
                      <text className='timelineAppText'> Besmart is an android application that reminds users to maintain healthy habits through a checklist and notifications sent to the user throughout the day</text>
                      <br/>
                      <text className='timelineAppText'> I built the UI for the checklist (pictured right) in this application and helped with backend and other parts </text>
                      <br/>
                      <text className='timelineAppText'> You can visit BeSmart at the following
                        <a href="https://play.google.com/store/apps/details?id=com.smartsourceapps.besmart&hl=en"> link</a>
                      </text>
                      <br/>


                    </div>
                    <img src={require('../images/besmart1.png')} className='timelineAppPhoto' alt='BeSmart'/>
                    <img src={require('../images/besmart2.png')} className='timelineAppPhoto' alt='BeSmart'/>
                  </div>
                </li>
                <li className='timelineli'> MyAlibi
                  <div className='timelineApp'>
                    <div className='timelineAppDescription'>
                      <br/>
                      <text className='timelineAppText'> MyAlibi is an iOS application that records and verifies (through the fingerprint scanner) users location and speed throught the day</text>
                      <br/>
                      <text className='timelineAppText'> This information could be used to prove ones location at a certain time, prove your speed to an officer, or track the movements of your children</text>
                      <br/>
                      <text className='timelineAppText'> For reasons unknown to me this app never made it to the appstore, but screenshots are provided! </text>
                      <br/>


                    </div>
                    <img src={require('../images/myalibi1.png')} className='timelineAppPhoto' alt='MyAlibi' />
                    <img src={require('../images/myalibi2.png')} className='timelineAppPhoto' alt='MyAlibi'/>
                  </div>
                </li>
              </ol>
            </text>
          </div>
        </div>

      </div>
    );
  }
}

export default Portfolio;

import React, {Component} from 'react';
import './portfolio.css'

class Portfolio extends Component {
  render() {
    return (<div className="portfolioContainer pageContainer">
      <div className='pageHeader'>
        <br/>
        <text className='header-text'>PORTFOLIO</text>
      </div>


      <div className="timelineItem">
        <text className='nodeTitle'>RDA Website Modernization</text>
        <text className='timelineDate'>Sep - Oct 2018</text>
        <div className='nodeBody'>
          <text>
            Over the next month I worked with a team of developers on an overhaul of the RDA Website.  We reworked the website's SiteCore
            architecture so that Marketing could easily make changes, added carousels and interactive components,
            sitecorized the chatbot, and added new pages explaining our company's services.
          </text>

          <div className='timelineApp'>
            <ul className='timelineWebsiteDescription'>
              <li className='timelineAppText'>ASP.NET MVC Backend</li>
              <li className='timelineAppText'>Bootstraped UI</li>
              <li className='timelineAppText'>Technologies: C#, JQuery, JavaScript, Sitecore, Visual Studio</li>
              <br/>
            </ul>
            <div>
              <img src={require('../images/rda_website_1.PNG')} className='timelineWebsitePhoto' alt='Chatbot'/>
              <img src={require('../images/rda_website_2.PNG')} className='timelineWebsitePhoto' alt='Chatbot'/>
            </div>

          </div>
        </div>
      </div>



      <div className="timelineItem">
        <text className='nodeTitle'>Azure Chatbot</text>
        <text className='timelineDate'>Aug - Sep 2018</text>
        <div className='nodeBody'>
          <text>
            I built a QNA bot for RDA's company website.  The chatbot bootstraps a microsoft-supplied base template
            and adds animations, an intuitive UI, secure token authentication, conversation logging, and suggested
            questions to improve user experience.
          </text>

          <div className='timelineApp'>
            <ul className='timelineWebsiteDescription'>
              <li className='timelineAppText'>ASP.NET backend authentication</li>
              <li className='timelineAppText'>Azure Cloud Bot Services and Table Services</li>
              <li className='timelineAppText'>Sitecore Integration</li>
              <li className='timelineAppText'>Technologies: C#, JQuery, JavaScript, Azure Cloud Services</li>
              <br/>
            </ul>
            <div>
            <img src={require('../images/chatbot_1.PNG')} className='timelineAppPhoto' alt='Chatbot'/>
            <img src={require('../images/chatbot_2.PNG')} className='timelineAppPhoto' alt='Chatbot'/>
            </div>

          </div>
        </div>
      </div>




      <div className="timelineItem">
        <text className='nodeTitle'>Microsoft Certifications</text>
        <text className='timelineDate'>Jul - Aug 2018</text>
        <div className='nodeBody'>
          <text>
            In my first month at RDA, I got microsoft certifications in HTML5, CSS3, JavaScript ES5, and TSQL
          </text>
          <text>
            These courses gave me a solid base in both frontend and backend technologies that I will be able to build on throughout my career.
          </text>

          <div className='timelineApp'>
            <ul className='timelineWebsiteDescription'>
              <br/>
            </ul>
            <img src={require('../images/microsoft_certification.PNG')} className='timelineWebsitePhoto' alt='BeSmart'/>
          </div>
        </div>
      </div>



      <div className="timelineItem">
        <text className='nodeTitle'>HooApps</text>
        <text className='timelineDate'>2016-2018</text>
        <div className='nodeBody'>
          <text> While at UVA, I was the treasurer of a club called HooApps.</text>
          <text></text>

          <div className='timelineApp'>
            <ul>
              <li className='timelineAppText'>Gave members lessons at weekly meetings</li>
              <li className='timelineAppText'>Held office hours to answer questions</li>
              <li className='timelineAppText'>Managed the clubs finances</li>
              <li className='timelineAppText'>Foster student's personal projects</li>
            </ul>
            <div>
              <div>
                <img src={require('../images/hooapps.jpeg')} className='timelineAppPhoto' alt='MyAlibi'/>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="timelineItem">
        <text className='nodeTitle'>Ander</text>
        <text className='timelineDate'>Jul - Sep 2017</text>
        <div className='nodeBody'>
          <text>
            I worked on a website for a car rental company called Ander. Ander is a startup that is tapping into the market of renting cars at airports.
          </text>
          <text>
            They needed a website to coordinate the flow of information between those who own cars and those who want to rent them.
          </text>
          <text>The website features:
          </text>

          <div className='timelineApp'>
            <ul className='timelineWebsiteDescription'>
              <li className='timelineAppText'>A clean, custom searchbar</li>
              <li className='timelineAppText'>Responsive information pages</li>
              <li className='timelineAppText'>A google login</li>
              <li className='timelineAppText'>Firebase backend</li>
              <br/>
            </ul>
            <a href='https://dunclee02.github.io/ander/'>
              <img src={require('../images/ander1.png')} className='timelineWebsitePhoto' alt='BeSmart'/>
            </a>
          </div>
        </div>
      </div>

      <div className="timelineItem">
        <text className='nodeTitle'>BeSmart</text>
        <text className='timelineDate'>Jun - Aug 2017</text>
        <div className='nodeBody'>
          <br/>
          <text>
            Besmart is a react native application that reminds users to maintain healthy habits through a checklist and notifications sent to the user throughout the day
            I built the UI for the checklist (pictured right) in this application, helped with backend integration.
          </text>
          <br/>

          <div className='timelineApp'>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.smartsourceapps.besmart&hl=en">
              <img src={require('../images/besmart1.png')} className='timelineAppPhoto' alt='BeSmart'/>
              <img src={require('../images/besmart2.png')} className='timelineAppPhoto' alt='BeSmart'/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="timelineItem">
        <text className='nodeTitle'>MyAlibi</text>
        <text className='timelineDate'>Jun - Aug 2017</text>
        <div className='nodeBody'>
          <text>
            I worked on a website for a car rental company called ander. ander is a startup that is tapping into the market of renting cars at airports.
            They needed a website to coordinate the flow of information between those who own cars and those who want to rent them.
          </text>
          <text>The App features:</text>

          <div className='timelineApp'>
            <ul>
              <li className='timelineAppText'>Fingerpring recognition</li>
              <li className='timelineAppText'>A map to display location and data points</li>
              <li className='timelineAppText'>intuitive searchbars and charts to filter data</li>
            </ul>
            <div>
              <img src={require('../images/myalibi1.png')} className='timelineAppPhoto' alt='MyAlibi'/>
              <img src={require('../images/myalibi2.png')} className='timelineAppPhoto' alt='MyAlibi'/>
            </div>
          </div>
        </div>
      </div>

    </div>);
  }
}

export default Portfolio;

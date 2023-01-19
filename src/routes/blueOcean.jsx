import React from 'react';
import PortfolioCarousel from '../components/carouselBuilder.jsx';
import TechStackCards from '../components/techStackCards.jsx';

function BlueOcean() {
  return (
    <div id="constructionContainer">
      <div id="constructionLeftContainer">
        <div id="sdc-title">
          <a target="_blank" href="https://github.com/APolk10/DuguidConstruction">
            <img id="mvp-githubLink" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670455086/Personal%20Site/github-mark_g6mb0a.png"></img>
          </a>
          <div id="construction-header">
            <p>Construction Application</p>
            <p id="construction-subheader">(Fondly nicknamed Duguid Construction)</p>
          </div>
        </div>
        <p className="construction-text">This multipage website was designed with the help of NextJS. It is a multipage application that services a midsized residential and commercial handyman service.</p>
        <p className="construction-text">Below is the main page that every user, regardless of credentials, sees upon first loading the page.</p>
        <img className="construction-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673819746/Personal%20Site/ezgif.com-gif-maker_ayhfvh.gif"></img>
        <p className="construction-text">One of the main features this website showcases is the ability to authenticate users and provide a view of the site based on user credentials. I worked extensively on the employee and manager views with a colleague. Employees should be able to view outstanding jobs that are assigned to the by a manager as well as the associated tools, whereas the manager view should house all global jobs and allow assignment of employees.</p>
        <p className="construction-header">Main Roles:</p>
        <ul className="construction-list">
          <li className="construction-roles">Client</li>
          <li className="construction-roles">Employee</li>
          <li className="construction-roles">Manager</li>
        </ul>
        <p className="construction-text">Below showcases the view of a manager with a larger number of jobs viewable as well as the authority to assign employees</p>
        <img className="construction-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673820706/Personal%20Site/ezgif.com-gif-maker_2_sfk2tg.gif"></img>
        <p className="construction-text">Another of the main features I worked on was the integration and connection to the Google Maps API. I wanted to manage company specific state in a way that allowed all jobs to be displayed on the map widget for an employee who logs in, as well as global jobs to be displayed for managers. The maps API was a challenge to work with at first, but after understanding how to properly leverage it allowed for a very rewarding feature.</p>
        <p className="construction-text">Below showcases the map functionality as from the perspective of an employee role.</p>
        <img className="construction-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673820349/Personal%20Site/ezgif.com-gif-maker_1_rcpug9.gif"></img>
        <p id="icon-header">Technologies used:</p>
        <TechStackCards technologies={['JavaScript', 'NodeJS', 'NextJS', 'GoogleMaps', 'AWS', 'MongoDB', 'Cloudinary']}></TechStackCards>
      </div>
    </div>
  )
}
export default BlueOcean;
import React from 'react';
import TechStackCards from '../components/techStackCards.jsx';

function BlueOcean() {
  return (
    <div className="outerContainer">
      <div className="pageContainer">
        <div className="pageTitle">
          <a target="_blank" rel="noreferrer" href="https://github.com/APolk10/DuguidConstruction">
            <img id="mvp-githubLink" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670455086/Personal%20Site/github-mark_g6mb0a.png"></img>
          </a>
          <div id="construction-header">
            <p>Construction Application</p>
            <p id="construction-subheader">(Fondly nicknamed Duguid Construction)</p>
          </div>
        </div>
        <div className="dataContainer">
        <p className="textHeader" id="specialHeaderStart">What is Duguid Construction?</p>
          <p className="subText">This multipage website was designed with the help of NextJS. It is a multipage application that is intended to service a midsized residential and commercial handyman service. I worked on a team of engineers to build this website and it has many different features working together. The website authenticates users using AuthO and based upon the user role, they will have a different view of the website as a result.</p>
          <p className="subText">Below is the main page that every user, regardless of credentials, sees upon first loading the page.</p>
          <img className="construction-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673819746/Personal%20Site/ezgif.com-gif-maker_ayhfvh.gif"></img>
          <p className="subText" id="extraSpace">One of the main features this website showcases is the ability to authenticate users and provide a view of the site based on user credentials. I worked extensively on the employee and manager views with a colleague. Employees should be able to view outstanding jobs that are assigned to the by a manager as well as the associated tools, whereas the manager view should house all global jobs and allow assignment of employees.</p>
          <p className="textHeader" id="specialHeader">Main Roles:</p>
          <ul className="construction-list">
            <li className="construction-roles">Client</li>
            <li className="construction-roles">Employee</li>
            <li className="construction-roles">Manager</li>
          </ul>
          <p className="subText">Below showcases the view of a manager with a larger number of jobs viewable as well as the authority to assign employees</p>
          <img className="construction-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673820706/Personal%20Site/ezgif.com-gif-maker_2_sfk2tg.gif"></img>
          <p className="subText">Another of the main features I worked on was the integration and connection to the Google Maps API. I wanted to manage company specific state in a way that allowed all jobs to be displayed on the map widget for an employee who logs in, as well as global jobs to be displayed for managers. The maps API was a challenge to work with at first, but after understanding how to properly leverage it allowed for a very rewarding feature.</p>
          <p className="subText">Below showcases the map functionality as from the perspective of an employee role.</p>
          <img className="construction-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673820349/Personal%20Site/ezgif.com-gif-maker_1_rcpug9.gif"></img>
          <p className="icon-header" id="specialHeader">Technologies used:</p>
          <TechStackCards technologies={['JavaScript', 'NodeJS', 'NextJS', 'GoogleMaps', 'AWS', 'MongoDB', 'Cloudinary']}></TechStackCards>
        </div>
      </div>
    </div>
  )
}
export default BlueOcean;
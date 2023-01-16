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
        <img className="construction-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673819746/Personal%20Site/ezgif.com-gif-maker_ayhfvh.gif"></img>
        <p className="construction-text">One of the main features this website showcases is the ability to authenticate users and provide a view of the site based on user credentials.</p>
        <p className="construction-header">Main Roles:</p>
        <ul>
          <li>Client</li>
          <li>Employee</li>
          <li>Manager</li>
        </ul>
        <img className="construction-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673820706/Personal%20Site/ezgif.com-gif-maker_2_sfk2tg.gif"></img>
        <p className="construction-text">Another of the main features I worked on was the integration and connection to the Google Maps API. I wanted to manage company specific state in a way that allowed all jobs to be displayed for an employee who logs in, as well as global jobs to be displayed for managers</p>
        <img className="construction-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673820349/Personal%20Site/ezgif.com-gif-maker_1_rcpug9.gif"></img>


        <TechStackCards technologies={['JavaScript', 'NodeJS', 'NextJS', 'GoogleMaps', 'AWS', 'MongoDB', 'Cloudinary']}></TechStackCards>
      </div>
    </div>
  )
}
export default BlueOcean;
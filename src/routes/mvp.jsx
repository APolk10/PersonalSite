import React from 'react';
import PortfolioCarousel from '../components/carouselBuilder.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
function MVP() {
  const URLs = [
    'https://res.cloudinary.com/dijhxevwz/image/upload/v1666815461/home_avkzzg.jpg',
    'https://res.cloudinary.com/dijhxevwz/image/upload/v1666815461/highlight_sranqm.jpg',
    'https://res.cloudinary.com/dijhxevwz/image/upload/v1666815461/popup_zbdptd.jpg',
    'https://res.cloudinary.com/dijhxevwz/image/upload/v1666815461/nextSlide_n9xmw4.jpg',
    'https://res.cloudinary.com/dijhxevwz/image/upload/v1666815461/resultOfRedirect_msp8ag.jpg'
  ]
  return (
    <div>
      <span id="projectTopBar"></span>
      <div id="project">
        <p id="projectHeader">Discover Music By Country</p>
        <div id="projectCarouselAndStack">
          <PortfolioCarousel imageURLs={URLs}/>
          <div id="stackColumn">
            Tech Stack
            <ul id="techList">
              <li>ReactJS</li>
              <li>ExpressJS</li>
              <li>MySQL</li>
              <li>MusicBrainz API</li>
            </ul>
          </div>
        </div>
        <p id="projectDescription">I created this application over the course of two days as a sprint project. I was inspired by my background as a musician and educator and my interest in music from around the globe. I wanted to show world music in a way I had not seen before and help connect people to artists they would not normally find. This app allows for users to click a country on an interactive map and discover musicians and artists from that country. The user can sift through up to 25 artists from the country clicked as well as click the link which redirects them off of the page to spotify on desktop with the artist already searched for them.</p>
      </div>
    </div>
  )
}
export default MVP;
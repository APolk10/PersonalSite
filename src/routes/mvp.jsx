import React from 'react';
import PortfolioCarousel from '../components/carouselBuilder.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function MVP() {

  const URLs = [
    'https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040571/Personal%20Site/home_avkzzg_powa0p.jpg',
    'https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040572/Personal%20Site/highlight_sranqm_f9oncb.jpg',
    'https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040571/Personal%20Site/popup_zbdptd_dqksar.jpg',
    'https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040571/Personal%20Site/nextSlide_n9xmw4_wbmwv2.jpg',
    'https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040571/Personal%20Site/resultOfRedirect_msp8ag_sqlwoy.jpg'
  ]

  return (
    <div id="mvp-outer-container">
      <div id="mvp-container">
        <p id="mvp-header">Discover Music By Country</p>
        <a id="mvp-githubLink" target="_blank" href="https://github.com/APolk10/MVP">View on github</a>
        <div id="mvp-carousel">
          <PortfolioCarousel imageURLs={URLs}/>
        </div>
        <p id="mvp-paragraph">I created this application over the course of two days as a sprint project. I was inspired by my background as a musician and educator and my interest in music from around the globe. I wanted to show world music in a way I had not seen before and help connect people to artists they would not normally find. This app allows for users to click a country on an interactive map and discover musicians and artists from that country. The user can sift through up to 25 artists from the country clicked as well as click the link which redirects them off of the page to spotify on desktop with the artist already searched for them.</p>
      </div>
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
  )
}
export default MVP;
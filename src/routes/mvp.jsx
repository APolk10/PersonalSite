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
        <div id="mvp-aboveCarousel">
          <p id="mvp-paragraphQuestion">What does this application do?</p>
          This application connects the user to music from any country selected. Upon user click the artist data is presented to the user and can be sifted through via the left and right arrows. If the user finds something that particularly intestests them, clicking the blue button near the bottom redirects them to Spotify with the search query supplied and activated.
        </div>
        <div id="mvp-carousel">
          <PortfolioCarousel imageURLs={URLs}/>
        </div>
        <p id="mvp-paragraphQuestion">What was my inspiration?</p>
        <p id="mvp-paragraph">I created this application over the course of <u>two days</u>. My musical background fueled my creativity for this project. I wanted to show world music in a way I had not seen before and help connect people to artists they would not normally find. </p>
      </div>
      <div id="stackColumn">
        <p id="stackTitle">Tech Stack</p>
        <ul id="techList">
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>ExpressJS</li>
          <li>MySQL</li>
          <li>mysql2</li>
          <li>Axios</li>
          <li>MusicBrainz API</li>
        </ul>
      </div>
    </div>
  )
}
export default MVP;
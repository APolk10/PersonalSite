import React from 'react';
import PortfolioCarousel from '../components/carouselBuilder.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import TechStackCards from '../components/techStackCards.jsx';

function MVP() {

  const URLs = [

    'http://res.cloudinary.com/dbvgiuj6d/image/upload/c_scale,w_900/v1672776512/Personal%20Site/Screenshot_from_2023-01-03_14-00-46_zcryft.png',
    'http://res.cloudinary.com/dbvgiuj6d/image/upload/c_scale,w_900/v1672776514/Personal%20Site/Screenshot_from_2023-01-03_14-01-19_iintmn.png',
    'https://res.cloudinary.com/dbvgiuj6d/image/upload/c_scale,h_540,w_900/v1672776513/Personal%20Site/Screenshot_from_2023-01-03_13-55-26_m6dzcu.png',
    'http://res.cloudinary.com/dbvgiuj6d/image/upload/c_scale,w_900/v1672776515/Personal%20Site/Screenshot_from_2023-01-03_14-00-54_uq8roz.png',
    'http://res.cloudinary.com/dbvgiuj6d/image/upload/c_scale,w_900/v1672776512/Personal%20Site/Screenshot_from_2023-01-03_14-00-30_lvvoow.png',
    'http://res.cloudinary.com/dbvgiuj6d/image/upload/c_scale,w_900/v1672776513/Personal%20Site/Screenshot_from_2023-01-03_14-01-12_sbjxq3.png',


  ]

  return (
    <div className="outerContainer">
      <div id="mvp-container">
        <div id="mvp-title-logo">
          <a target="_blank" rel="noreferrer" href="https://github.com/APolk10/MVP">
            <img id="mvp-githubLink" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670455086/Personal%20Site/github-mark_g6mb0a.png"></img>
          </a>
          <p id="mvp-header">Discover Music By Country</p>
        </div>
        <div className="dataContainer">
          <div className="application-news-box" >
            <p className="application-news">Check out the remake on desktop!</p>
            <a href="https://world-of-music.onrender.com/" rel="noreferrer" target="_blank" className="application-news">https://world-of-music.onrender.com/</a>
          </div>
          <p className="textHeader" id="specialHeader">What does this application do?</p>
          <u id="mvp-underlinedText">Discover Music by Country connects the user to music from any country in the world.</u>
          <p className="subText">
            When a country is selected, music data from that region pops up in a modal screen. This screen can be sifted through using the left and right arrows. If the user finds something that intestests them they can click the blue button to be redirected to Spotify where that particular artist will conveniently be searched for automatically. This application has been rewarding from the very beginning as both myself as well as my close friends and colleagues have discovered awesome new music selections from across the globe.
          </p>
          <div id="mvp-carousel">
            <PortfolioCarousel imageURLs={URLs}/>
          </div>
          <p className="textHeader" id="specialHeader">How does it work?</p>
          <div className="textHeader">The Map:</div>
          <p className="subText">
            This map is an open source TopoJSON map that I modified. All of the color highlighting and events that occur on the page were my own tweaking. I wanted the user to have immediate feedback when they interacted with the map. You can zoom in and out with the mousewheel as well as click and drag the map. In addition to this, when clicking, the map passes an object with the event that contains country codes unique to the country. I then used a country code converting library to help me pass the correct string to my external API. I talk about this more in depth below.
          </p>
          <div className="textHeader">The API:</div>
          <p className="subText">
            The MusicBrainz API is a flexible API that allowed me to pull the data I needed as long as I passed the proper query string. I was interested in using this API to isolate music by a region and I was able to do so by supplying a country code. The response I get from this free API was then translated into a modal pop up for the user to sort through and find new music
          </p>
          <div className="textHeader">The Spotify Redirect</div>
          <p className="subText">
            The button on the modal redirects the user in a new window to spotify. I piece together a unique url so that a search request is made with the Spotify API which will allow the user to land on the page as if they typed in the artist into the search bar.
          </p>
          <div className="textHeader">The Database:</div>
          <p className="subText">
            The MySQL database was a simple addition to this website for me to create baseline analytic data. Each time a user clicks a country, this is submitted to my database via a POST request which updated a counter. Each country has separate metrics that could later on be retrieved and displayed.
          </p>
          <p className="textHeader">What was my inspiration?</p>
          <p className="subText">I created this application over the course of <u>two days</u>. My music background fueled my creativity for this project. I wanted to show world music in a way I had not seen before and help connect people to artists they would not normally find. </p>
        <div>
      </div>
        <p className="icon-header" id="specialHeader">Technologies used:</p>
        <TechStackCards technologies={['JavaScript', 'NodeJS', 'ReactJS', 'ExpressJS', 'MySQL', 'MusicBrainz API']}>          </TechStackCards>
      </div>
      </div>
    </div>
  )
}
export default MVP;
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
        <p>This website was built based on the detailed request of a client. Their service consisted mainly of home repairs and improvements and their business was growing.</p>
        {/* <img className="construction-img" id="construction-main" src="http://res.cloudinary.com/dbvgiuj6d/image/upload/c_scale,w_700/v1672785690/Personal%20Site/Screenshot_from_2023-01-03_16-41-18_e2vtrg.png"></img> */}
        <img src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673819746/Personal%20Site/ezgif.com-gif-maker_ayhfvh.gif"></img>
        <img src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673820349/Personal%20Site/ezgif.com-gif-maker_1_rcpug9.gif"></img>
        <img src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673820706/Personal%20Site/ezgif.com-gif-maker_2_sfk2tg.gif"></img>

        <TechStackCards technologies={['JavaScript', 'NodeJS', 'NextJS', 'GoogleMaps', 'AWS', 'MongoDB', 'Cloudinary']}></TechStackCards>
      </div>
    </div>
  )
}
export default BlueOcean;
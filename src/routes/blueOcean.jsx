import React from 'react';
import PortfolioCarousel from '../components/carouselBuilder.jsx';

function BlueOcean() {
  return (
    <div id="constructionContainer">
      <div id="constructionLeftContainer">
        <div id="construction-header">
          <p>Construction Application</p>
          <p id="construction-subheader">(Fondly nicknamed Duguid Construction)</p>
          <a id="bo-githubLink" target="_blank" href="https://github.com/APolk10/MVP">View on github</a>
        </div>
        <img className="construction-img" id="construction-main" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127646/Personal%20Site/Screenshot_from_2022-11-09_18-01-24_ftoiig.png" width="450vw" height="auto"></img>
        <div id="construction-accordion">
          <img className="construction-img" id="flatAccordion" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127643/Personal%20Site/Screenshot_from_2022-11-09_18-00-18_wudfxd.png" width="450vw" height="auto"></img>
          <img className="construction-img" id="openAccordion" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127643/Personal%20Site/Screenshot_from_2022-11-09_18-00-04_a4xfiy.png" width="450vw" height="auto"></img>
        </div>
        <img className="construction-img" id="mapToolboxAccordion" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127643/Personal%20Site/Screenshot_from_2022-11-09_18-00-33_cajgg5.png" width="450vw" height="auto"></img>
        <img className="construction-img" id="mapToolbox" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127643/Personal%20Site/Screenshot_from_2022-11-09_18-01-04_xg2wkj.png" width="450vw" height="auto"></img>
        <div id="construction-maps">
          <img className="construction-img" id="mapZoomIn" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127644/Personal%20Site/Screenshot_from_2022-11-09_17-57-54_sp5v4r.png" width="450vw" height="auto"></img>
          <img className="construction-img" id="mapZoomInMore" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127644/Personal%20Site/Screenshot_from_2022-11-09_17-58-07_upja4g.png" width="450vw" height="auto"></img>
        </div>
      </div>
      <div id="stackColumn">
        Tech Stack
        <ul id="techList">
          <li>NextJS</li>
          <li>ReactJS</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Google Maps API</li>
          <li>node-geocoder</li>
          <li>Cloudinary</li>
        </ul>
      </div>
    </div>
  )
}
export default BlueOcean;
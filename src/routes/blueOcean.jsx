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
        <img className="construction-img" id="construction-main" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127646/Personal%20Site/Screenshot_from_2022-11-09_18-01-24_ftoiig.png" width="450vw" height="auto"></img>
        <div id="construction-accordion">
          <img className="construction-img" id="flatAccordion" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127643/Personal%20Site/Screenshot_from_2022-11-09_18-00-18_wudfxd.png" width="450vw" height="auto"></img>
          <img className="construction-img" id="openAccordion" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127643/Personal%20Site/Screenshot_from_2022-11-09_18-00-04_a4xfiy.png" width="450vw" height="auto"></img>
        </div>
        <p>This website was built</p>
        <img className="construction-img" id="mapToolboxAccordion" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127643/Personal%20Site/Screenshot_from_2022-11-09_18-00-33_cajgg5.png" width="450vw" height="auto"></img>
        <img className="construction-img" id="mapToolbox" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127643/Personal%20Site/Screenshot_from_2022-11-09_18-01-04_xg2wkj.png" width="450vw" height="auto"></img>
        <div id="construction-maps">
          <img className="construction-img" id="mapZoomIn" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127644/Personal%20Site/Screenshot_from_2022-11-09_17-57-54_sp5v4r.png" width="450vw" height="auto"></img>
          <img className="construction-img" id="mapZoomInMore" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668127644/Personal%20Site/Screenshot_from_2022-11-09_17-58-07_upja4g.png" width="450vw" height="auto"></img>
        </div>
        <TechStackCards technologies={['JavaScript', 'NodeJS', 'NextJS', 'GoogleMaps', 'AWS', 'MongoDB', 'Cloudinary']}></TechStackCards>
      </div>
    </div>
  )
}
export default BlueOcean;
import React from 'react';
// import TechStackCards from '../components/techStackCards.jsx';

function Photography() {
  return (
    <div className="outerContainer">
      <div className="pageContainer">
        <div className="pageTitle">
          <a target="_blank" rel="noreferrer" href="https://github.com/APolk10/TimPhotography">
              <img id="mvp-githubLink" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670455086/Personal%20Site/github-mark_g6mb0a.png"></img>
          </a>
          <p>McMillan Photography</p>
        </div>
        <div className="dataContainer">
          <div id="photography-placeholder">Coming Soon!</div>
          <div>
            <img className='siteGifs' src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1683060372/Personal%20Site/photographySite_jfzx3y.gif'></img>
          </div>
          {/* <TechStackCards technologies={['NextJS']}>          </TechStackCards> */}
        </div>
      </div>
    </div>
  )
}

export default Photography;
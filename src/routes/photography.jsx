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
          <div id="photography-placeholder">
            <mark>Coming Soon!</mark>
          </div>
          <div>
            <div className="textHeader" id="specialHeader">What is this application?</div>
            <p className="subText">This is a portfolio website that is being constructed for a client who is a talented photographer. He is in the beginning stages of growing his brand and wanted something to reflect his work and allow potential clients to contact him.</p>
            <img className='siteGifs' id="siteGifsAlt" src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1683060372/Personal%20Site/photographySite_jfzx3y.gif'></img>
          </div>
          {/* <TechStackCards technologies={['NextJS']}>          </TechStackCards> */}
        </div>
      </div>
    </div>
  )
}

export default Photography;
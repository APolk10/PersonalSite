import React from 'react';
import TechStackCards from '../components/techStackCards.jsx';

function Photography() {
  return (
    <div id="photography-outer-container">
      <div id="photography-container">
          <div id="photography-header">
            McMillan Photography
          <a target="_blank" rel="noreferrer" href="https://github.com/APolk10/TimPhotography">
              <img id="mvp-githubLink" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670455086/Personal%20Site/github-mark_g6mb0a.png"></img>
            </a>
          </div>
        <div id="photography-placeholder">Coming Soon!</div>
        <div>
          <img className='photographyGif' src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1683060372/Personal%20Site/photographySite_jfzx3y.gif'></img>
        </div>
      </div>
        {/* <TechStackCards technologies={['NextJS']}>          </TechStackCards> */}
    </div>
  )
}

export default Photography;
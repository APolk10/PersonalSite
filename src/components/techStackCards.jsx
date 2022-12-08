import React, { useState, setState } from 'react';

const icons = {
  GitHub: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670455086/Personal%20Site/github-mark_g6mb0a.png",
  LinkedIn: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670455199/Personal%20Site/LI-In-Bug_vsd5jr.png",
  JavaScript: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670464754/Personal%20Site/js_meomom.png",
  NodeJS: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670465182/Personal%20Site/Node.js_logo_1_htdxyz.svg",
  ReactJS: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670464620/Personal%20Site/React-icon.svg_zpnogq.png",
  ExpressJS: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670464862/Personal%20Site/Expressjs_sieqxt.png",
  MySQL: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670465094/Personal%20Site/logo-mysql-170x115_ovxpyy.png",
  'MusicBrainz API': "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670465087/Personal%20Site/MusicBrainz_Logo_Transparent_tf5pw2.png",
}
function TechStackCards({...stack}) {
  return (
    <div id="techCardGroup">
      {stack.technologies.map((technology) => (
        <div id="techCard" key={`${technology}`}>
          <img id="cardIcon" src={icons[technology]}></img>
          {technology}
        </div>
      ))}
    </div>
  )
};

export default TechStackCards;
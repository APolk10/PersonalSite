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
  AWS: "https://d0.awsstatic.com/logos/powered-by-aws.png",
  PostgreSQL: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670791044/Personal%20Site/PostgreSQL_logo.3colors.120x120_y7dkkm.png",
  NGINX: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670791211/Personal%20Site/icons8-nginx-96_nr26du.png",
  MongoDB: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670818567/Personal%20Site/MongoDB_ForestGreen_vuvole.png",
  NextJS: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670818526/Personal%20Site/next-js-icon-logo-EE302D5DBD-seeklogo.com_tetsw2.png",
  Cloudinary: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670819148/Personal%20Site/cloudinary_logo_blue_0720_svg_q3muaw.svg",
  GoogleMaps: "https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670818517/Personal%20Site/Google_Maps_Logo_2020.svg_siboqc.png",
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
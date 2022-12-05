import React from 'react';
import PortfolioCarousel from '../components/carouselBuilder.jsx';

function SDC() {
  return (
    <div id="sdc-outer-container">
      <div id="sdc-container">
        <p id="sdc-title">Server Rebuild for RESTful API</p>
        <a id="sdc-github" target="_blank" href="https://github.com/APolk10/SEGA-Project-Atelier.git">View on github</a>
        <img id="sdc-images" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668710535/SDC/SDC_workflow_xsxuzy.png" />
        <p className="sdc-paragraphs">
          The above screenshot showcases the end goal for the rebuild. I would have an Nginx load balancer intance that split my web traffic into thirds with each pointing to different server instances. One of the instances houses the PostgreSQL database I made and the other two connected remotely to it. This process allowed for the best results for the GET request for product reviews.
        </p >
        <img id="sdc-images" src="https://res.cloudinary.com/dijhxevwz/image/upload/v1667864881/PersonalSite/Screenshot_from_2022-11-07_17-33-37_e3n6t1.png" width="400" height="auto"/>
        <p className="sdc-paragraphs">
          This was the final result. I was able to push past this point and edge the GET requests up to 1000 requests per second while still maintaining a response time under 100ms but at that point it was clear that an upgrade to the hardware of the EC2 instance which housed the database would need to be upgraded. I am proud of the performance I was able to get on a base level AWS instance.
        </p>
      </div>
    <div>
    </div>
      <div id="stackColumn">
        <p id="stackTitle">Tech Stack</p>
        <ul id="techList">
        <li>Nginx</li>
          <li>ExpressJS</li>
          <li>PostgreSQL</li>
          <li>Amazon Web Services</li>
        </ul>
      </div>
    </div>
  )
}
export default SDC;
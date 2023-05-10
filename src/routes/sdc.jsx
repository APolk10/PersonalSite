import React from 'react';
import TechStackCards from '../components/techStackCards.jsx';

function SDC() {
  return (
    <div className="outerContainer">
      <div className="pageContainer">
        <div className="pageTitle">
          <a target="_blank" rel="noreferrer" href="https://github.com/APolk10/SEGA-Project-Atelier.git">
            <img id="mvp-githubLink" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670455086/Personal%20Site/github-mark_g6mb0a.png"></img>
          </a>
          <p id="sdc-title-text">Server Rebuild for RESTful API</p>
        </div>
        <div className="dataContainer">
          <div className="textHeader" id="specialHeaderStart">What is this application?</div>
          <p className="subText">
            This was an overhaul of a legacy server of an eCommerce site that I had worked on a team to rebuild. The website (see below) struggled under the load of increased web traffic. I rebuilt the backend of a legacy API that services the ratings and reviews section of the site. It was expected to support 100+ users/second at a response time under 100ms after the upgrade. I was given a week to complete this rebuilt.
          </p>
          <img id="sdc-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670788042/Personal%20Site/FEC_gif_xosd4d.gif"></img>
          <div className="textHeader" id="specialHeader">This was my process:</div>
          <div id="underlinedText">Step One: Transfer databases</div>
          <img id="sdc-schema" src="http://res.cloudinary.com/dbvgiuj6d/image/upload/c_scale,w_900/v1670790427/Personal%20Site/Adam_Polk_SDC_Schema_and_Model_s4mcem.jpg"></img>
          <p className="subText">
            I researched a database management system that would fit the needs of the data. There were millions of data entries that had some existing relationships and I knew that thoughtfully taking advantage of this leaning would allow me to scale my architecture later on. Although I saw it as a more difficult undertaking, I chose to go with a relational database and worked with the schema as seen above, with a few tweaks. I decided upon PostgreSQL because I knew I wanted to take advantage of the helpful aggregate functionality to return the nested data that the front end was expecting with little to no refactor.
          </p>
          <div id="underlinedText">Step Two: Rewrite server routes</div>
          <p className="subText">
            After building the new database and a successful ETL, I began writing my SQL style queries. It was challenging to create the nested structures for gathering metadata across multiple tables all in one query. The front end expected objects with many nested objects and arrays within with different sets of data for the front end. Eventually, I was able to accomplish this task and return the complete object with little serverside modification. I was excited to find this success as I knew the database would be faster and more optimized than the processing that could have taken place within my ExpressJS server.
          </p>
          <div id="underlinedText">Step Three: Local performance tests</div>
          <p className="subText">
            Now it was time to begin testing. I wrote a few K6 scripts in NodeJS to allow for local testing and after running the first test, I was disappointed. Multiple seconds for each call even with light numbers of requests/second. This meant I needed to work to streamline the process. The biggest change was adding indexes to the most trafficed request points. By picking coordinated table locations and ID&apos;s that were most used within query lookups I was able to see significant gains. My numbers looked much better. I was able to achieve under a 10ms response time well past 1000 requests per second for both of the main API calls. To further test I randomized the product ID sent to the database between 1-1,000,000 to avoid the database caching and the results were still looking good. Around a 15-20ms response time at the 1000 requests/second threshold. I was feeling pretty good so I moved to deploy.
          </p>
          <div id="underlinedText">Step Four: Deployment to AWS</div>
          <p className="subText">
            I launched an AWS instance using the free tier hardware and deployed my application there. After setup I began stress testing the application using Loader.io. I saw a performance hit right off the bat. One of the two main API calls was nearly halved. I began optimizing all the ways I could find from compressing the server headers to minimizing any computation on the server side. It became obvious that this API call was stressing the free tier AWS instance and I would need to work around this or fork over some cash to buy a stronger machine. I decided to circumvent this issue by load balancing.
          </p>
          <div id="underlinedText">Step Five: Load balancing with Nginx</div>
          <img id="sdc-loadBalancer" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668710535/SDC/SDC_workflow_xsxuzy.png"/>
          <p className="subText">
            I launched three more AWS instances. Two would serve as remotely connected servers to the database on the original instance. After tunneling to remotely connect from the two remote servers I was good to go. The third extra instance would act as the load balancing diverter. As traffic was sent toward my load balancer, it would split the traffic evenly to the two remotely connected instances. My numbers improved again however the metadata query that had the most aggregation and joins still lagged behind the product ID pull. It became clear that, although there was improvement, there would be diminishing returns no matter how horizontal I were to scale. In the future I would need to upgrade my database hosting machine.
          </p>
          <div className="textHeader" id="specialHeader">Wrapping up the experience:</div>
          <img id="sdc-images" src="https://res.cloudinary.com/dijhxevwz/image/upload/v1667864881/PersonalSite/Screenshot_from_2022-11-07_17-33-37_e3n6t1.png" width="400" height="auto"/>
          <p className="subText">
            I was proud of the performance optimizations I achieved after deployment. The GET product query performed strongly even past 750 requests/second even with a randomized ID; up to 1,000,000. The GET metadata query was less strong but still managed to stabilize at around 700 requests/second after load balancing. This FAR exceeded the expectations placed on my from the beginning, but if I were to return to this project I would enjoy testing stronger AWS machines to see how the performance would be impacted and learning more about PostgreSQL optimizations that I did not have time to explore.
          </p>
          <div>
            <p className="icon-header" id="specialHeader">Technologies used:</p>
            <TechStackCards technologies={['JavaScript', 'NodeJS', 'ExpressJS', 'PostgreSQL', 'AWS', 'NGINX']}></TechStackCards>
        `</div>
        </div>
      </div>
    </div>
  )
}
export default SDC;
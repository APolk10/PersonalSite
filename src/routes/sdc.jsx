import React from 'react';
import PortfolioCarousel from '../components/carouselBuilder.jsx';
import TechStackCards from '../components/techStackCards.jsx';

function SDC() {
  return (
    <div id="sdc-outer-container">
      <div id="sdc-container">
        <div id="sdc-title">
          <a target="_blank" href="https://github.com/APolk10/SEGA-Project-Atelier.git">
            <img id="mvp-githubLink" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670455086/Personal%20Site/github-mark_g6mb0a.png"></img>
          </a>
          <p>Server Rebuild for RESTful API</p>
        </div>
        <div id="sdc-paragraphQuestions">What is this application?</div>
        <p id="sdc-answers">
          The website seen below struggled under the load of increased web traffic. I rebuilt the backend of a legacy API that services the ratings and reviews section of the site so that it could support 100+ users/second at a response time under 100ms.
        </p>
        <p id="sdc-answers">I was given roughly a week to do this.</p>
        <img id="sdc-gif" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670788042/Personal%20Site/FEC_gif_xosd4d.gif"></img>
        <div id="sdc-paragraphQuestions">How did I manage this project?</div>
        <p id="sdc-answers">The approach I took and the steps to get there are outlined below:</p>
        <div id="sdc-paragraphQuestions">
          Step One: Transfer databases
        </div>
        <img id="sdc-schema" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670790427/Personal%20Site/Adam_Polk_SDC_Schema_and_Model_s4mcem.jpg"></img>
        <p id="sdc-answers">
           I researched a database management system that would fit the needs of the data. There were millions of data entries that had some existing relationships and I knew that thoughtfully taking advantage of this leaning would allow me to scale my architecture later on. Although I saw it as a more difficult undertaking, I chose to go with a relational database and worked with the schema as seen above, with a few tweaks. I decided upon PostgreSQL because I knew I wanted to take advantage of the helpful aggregate functionality to return the nested data that the front end was expecting with little to no refactor.
        </p>
        <div id="sdc-paragraphQuestions">
          Step Two: Rewrite server routes
        </div>
        <p id="sdc-answers">
          After building the new database and a successful ETL, I began writing my SQL style queries. It was challenging to create the nested structures for gathering metadata across multiple tables all in one query. The front end expected objects with many nested objects and arrays within with different sets of data for the front end. Eventually, I was able to accomplish this task and return the complete object with little serverside modification. I was excited to find this success as I knew the database would be faster and more optimized than the processing that could have taken place within my ExpressJS server.
        </p>
        <div id="sdc-paragraphQuestions">
          Step Three: Local performance tests
        </div>
        <p id="sdc-answers">
          Now it was time to begin testing. I wrote a few K6 scripts in NodeJS to allow for local testing and after running the first test, I was disappointed. Multiple seconds for each call even with light numbers of requests/second. This meant I needed to work to streamline the process. The biggest change was adding indexes to the most trafficed request points. By picking coordinated table locations and ID's that were most used within query lookups I was able to see significant gains. My numbers looked much better. I was able to achieve under a 10ms response time well past 1000 requests per second for both of the main API calls. To further test I randomized the product ID sent to the database between 1-1,000,000 to avoid the database caching and the results were still looking good. Around a 15-20ms response time at the 1000 requests/second threshold. I was feeling pretty good so I moved to deploy.
        </p>
        <div id="sdc-paragraphQuestions">
          Step Four: Deployment to AWS
        </div>
        <p id="sdc-answers">
          I launched an AWS instance using the free tier hardware and deployed my application there. After setup I began stress testing the application using Loader.io. I saw a performance hit right off the bat. One of the two main API calls was nearly halved. I began optimizing all the ways I could find from compressing the server headers to minimizing any computation on the server side. It became obvious that this API call was stressing the free tier AWS instance and I would need to work around this or fork over some cash to buy a stronger machine. I decided to circumvent this issue by load balancing.
        </p>
        <div id="sdc-paragraphQuestions">
          Step Five: Load balancing with Nginx
        </div>
        <img id="sdc-images" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668710535/SDC/SDC_workflow_xsxuzy.png" />
        <p id="sdc-answers">
          I launched three more AWS instances. Two would serve as remotely connected servers to the database on the original instance. After tunneling to remotely connect from the two remote servers I was good to go. The third extra instance would act as the load balancing diverter. As traffic was sent toward my load balancer, it would split the traffic evenly to the two remotely connected instances. My numbers improved again however the metadata query that had the most aggregation and joins still lagged behind the product ID pull. It became clear that, although there was improvement, there would be diminishing returns no matter how horizontal I were to scale. In the future I would need to upgrade my database hosting machine.
        </p>
        <div id="sdc-paragraphQuestions">
          Wrapping up the experience:
        </div>
        <img id="sdc-images" src="https://res.cloudinary.com/dijhxevwz/image/upload/v1667864881/PersonalSite/Screenshot_from_2022-11-07_17-33-37_e3n6t1.png" width="400" height="auto"/>
        <p id="sdc-answers">
          I was proud of the performance optimizations I achieved after deployment. The GET product query performed strongly even past 750 requests/second even with a randomized ID; up to 1,000,000. The GET metadata query was less strong but still managed to stabilize at around 700 requests/second after load balancing. This FAR exceeded the expectations placed on my from the beginning, but if I were to return to this project I would enjoy testing stronger AWS machines to see how the performance would be impacted and learning more about PostgreSQL optimizations that I did not have time to explore.
        </p>
        <div>
          <p id="icon-header">Technologies used:</p>
          <TechStackCards technologies={['JavaScript', 'NodeJS', 'ExpressJS', 'PostgreSQL', 'AWS', 'NGINX']}>          </TechStackCards>
      `</div>
      </div>
    </div>
  )
}
export default SDC;
import React from 'react';
import "animate.css";

function Home() {
    return (
      <div className="outerContainer" id="outerContainerAlt">
        <div className="pageTitle" id="pageTitleAlt">
          <div className="animate__animated animate__tada" id="pageTitleAlt2">Welcome to my Portfolio!</div>
        </div>
          <div id="aboutMeContainer">
            <div className="aboutMeRow">
              <div className="aboutMeBio" id="aboutMeBioAlt">
                  My name is Adam Polk and I&apos;m a former elementary music educator. I have always been a tech lover and have been playing around with computers since I was a child. I started my coding journey in 2021 when a band director friend and I reconnected. He was raving about his new field and software job. Before I knew it, I was already thinking about whether or not this could be a good fit for me, too. This was the start of my journey.
              </div>
              <img id="aboutMeHeadshot" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/c_scale,w_480/v1670438935/Personal%20Site/IMG_5342_n6cjh6.jpg" width="450vw" height="auto"></img>
            </div>
          <div className="aboutMeRow" id="aboutMeRowTwo">
          <img id="aboutMePython" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1671507266/Personal%20Site/python-logo-generic_ej8vix.svg"></img>
            <div className="aboutMeBio">
                  See, the truth was I had been wondering what was next in my life for a few years now. I love music, and I love education, but I also knew that it was time for a change. I decided to act on that feeling and bought a book about Python. I loved it from the very start. I remember wrestling through setting up my environment for the first time and the first print(&apos;Hello World&apos;) and all of the other fun firsts. What started as an effort to dip my toes into the pool of software, turned into a deep dive into a complete life change.
            </div>
          </div>
          <div className="aboutMeRow">
            <div className="aboutMeBio" id="aboutMeBioAlt">
              By the end of that school year I decided to attend Hack Reactor and so I quickly immersed myself in JavaScript. It was tough to prepare, but I was lucky enough to get in and, well, here I am now! Looking to learn and grow in this new and exciting field where I get to build cool things and help improve the world I live in. If you want to know more or just to chat, reach out to me on LinkedIn! I&apos;d love to talk.
            </div>
            <img id="aboutMeHackReactor" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1671507178/Personal%20Site/HR_h9ibly.png"></img>
          </div>
        </div>
      </div>
    )
}

export default Home;
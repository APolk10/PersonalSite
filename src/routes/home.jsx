import React from 'react';
import TechStackCards from '../components/techStackCards.jsx';

function Home() {
    return (
      <div id="aboutMeOuter">
        <div id="aboutMeHeader">Former music teacher explores a new passion...</div>
          <div id="aboutMeContainer">
            <div className="aboutMeRow">
              <div id="aboutMeBioGreeting">
                <p id="aboutMeGreeting">Hey there!</p>
                <p id="aboutMeBio">
                  My name is Adam and I'm a former elementary music educator going on a new adventure. I started my coding journey in 2021 when a band director friend and I reconnected and he was raving about his new field and software job. Before I knew it, I was already thinking about whether or not this could be a good fit for me.
                </p>
              </div>
              <img id="aboutMeHeadshot" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1670438935/Personal%20Site/IMG_5342_n6cjh6.jpg" width="450vw" height="auto"></img>
            </div>
          <div className="aboutMeRow">
          <img id="aboutMePython" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1671507266/Personal%20Site/python-logo-generic_ej8vix.svg"></img>
            <div>
              <p id="aboutMeBio">
                  See, the truth was I had been wondering what was next in my life for a few years now. I love music, and I love education, but I also knew that it was time for a change. I decided to act on that feeling and bought a book about Python. I loved it from the very start. I remember wrestling through setting up my environment for the first time and the first print('Hello World') and of the fun growing pains of "firsts". What started as a "dip my toes into the pool of software" turned into a complete life change.
                </p>
            </div>
          </div>
          <div className="aboutMeRow">
            <div>
              <p id="aboutMeBio">
              By the end of that school year I decided to attend Hack Reactor and so I quickly immersed myself in JavaScript. It was tough to prepare, but I was lucky enough to get in and, well, here I am now! Looking to learn and grow in this new and exciting field where I get to build cool things and help improve the world I live in. If you want to know more or just to chat, reach out to me on LinkedIn! I'd love to talk.
              </p>
            </div>
            <img id="aboutMeHackReactor" src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1671507178/Personal%20Site/HR_h9ibly.png"></img>

          </div>
          <div className="aboutMeRow">
            <p id="aboutMeBioClosing">Adam</p>
          </div>
        </div>
      </div>
    )
}

export default Home;